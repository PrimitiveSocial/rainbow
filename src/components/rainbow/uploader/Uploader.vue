<template>
    <div>
        <slot name="default">
            <button @click="$modal.open('uploader')" class="px-4 py-2 bg-indigo-300 text-white rounded focus:outline-none">Upload</button>
        </slot>

        <modal name="uploader" size="large">
            <input type="file" ref="upload-input" class="hidden" :multiple="isMultipleUpload" accept="image/*" @change="previewImages">

            <div v-if="hasUploadedImages" class="bg-gray-100 p-4 mb-16">
                <div class="w-full m-auto flex justify-between items-center">
                    <div>
                        <button class="btn-primary mr-4" @click="openFileDialog" v-if="isMultipleUpload">
                            <svg class="h-4 w-4 inline" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g class="fill-current">
                                        <path d="M11,9 L11,5 L9,5 L9,9 L5,9 L5,11 L9,11 L9,15 L11,15 L11,11 L15,11 L15,9 L11,9 Z M10,20 C15.5228475,20 20,15.5228475 20,10 C20,4.4771525 15.5228475,0 10,0 C4.4771525,0 0,4.4771525 0,10 C0,15.5228475 4.4771525,20 10,20 Z M10,18 C14.418278,18 18,14.418278 18,10 C18,5.581722 14.418278,2 10,2 C5.581722,2 2,5.581722 2,10 C2,14.418278 5.581722,18 10,18 Z" id="Shape"></path>
                                    </g>
                                </g>
                            </svg>
                            Add more
                        </button>
                        <button class="btn-success" @click="upload">
                            <svg class="h-4 w-4 inline" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g class="fill-current">
                                        <path d="M16.8792928,9.09695343 C18.6654343,9.4976045 20,11.09295 20,13 C20,15.209139 18.209139,17 16,17 L5,17 C2.23857625,17 0,14.7614237 0,12 C0,9.58046798 1.71857515,7.56233069 4.00162508,7.09968852 C4.00054449,7.06659179 4,7.03335948 4,7 C4,5.34314575 5.34314575,4 7,4 C7.55384606,4 8.07263826,4.1500834 8.51792503,4.41179863 C9.4182103,3.53797709 10.6462795,3 12,3 C14.7614237,3 17,5.23857625 17,8 C17,8.37684164 16.9583108,8.74394625 16.8792928,9.09695343 Z M10,7 L14,11 L6,11 L10,7 Z M9,11 L11,11 L11,14 L9,14 L9,11 Z" id="Combined-Shape"></path>
                                    </g>
                                </g>
                            </svg>
                            Upload
                        </button>
                    </div>
                    <div class="font-bold mr-16" v-if="isMultipleUpload">
                        Showing image {{ imageCounter }}
                        <svg
                            class="h-4 w-4 inline cursor-pointer mx-2"
                            viewBox="0 0 20 20"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            @click="currentImageIndex--"
                            v-if="canGoBackward"
                        >
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g class="fill-current">
                                    <polygon id="Combined-Shape" points="10 13 18 13 18 7 10 7 10 2 2 10 10 18 10 13"></polygon>
                                </g>
                            </g>
                        </svg>
                        <svg
                            class="h-4 w-4 inline cursor-pointer mx-2"
                            viewBox="0 0 20 20"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            @click="currentImageIndex++"
                            v-if="canGoForward"
                        >
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g class="fill-current">
                                    <polygon id="Combined-Shape" points="10 7 2 7 2 13 10 13 10 18 18 10 10 2 10 7"></polygon>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>

            <div v-if="hasUploadedImages" class="mb-8">
                <div v-for="(image, index) in uploadedImages" :key="index">
                    <div v-if="index === currentImageIndex">
                        <image-editor
                            :image="image.base64"
                            :index="index"
                            :aspect-ratio="aspectRatio"
                            @image-cropped="cropImage"
                        ></image-editor>
                    </div>
                </div>
            </div>

            <div v-else class="text-indigo-300 w-full h-full flex justify-center items-center p-24">
                <div class="text-center">
                    <svg class="h-48 w-48 block mb-4" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g class="fill-current">
                                <path d="M11,13 L8,10 L2,16 L11,16 L18,16 L13,11 L11,13 Z M0,3.99406028 C0,2.8927712 0.898212381,2 1.99079514,2 L18.0092049,2 C19.1086907,2 20,2.89451376 20,3.99406028 L20,16.0059397 C20,17.1072288 19.1017876,18 18.0092049,18 L1.99079514,18 C0.891309342,18 0,17.1054862 0,16.0059397 L0,3.99406028 Z M15,9 C16.1045695,9 17,8.1045695 17,7 C17,5.8954305 16.1045695,5 15,5 C13.8954305,5 13,5.8954305 13,7 C13,8.1045695 13.8954305,9 15,9 Z" id="Combined-Shape"></path>
                            </g>
                        </g>
                    </svg>

                    <button class="px-4 py-2 rounded focus:outline-none hover:bg-indigo-300 hover:text-white" @click="openFileDialog">
                        <svg class="h-4 w-4 inline mr-2 " viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" @click="$emit('click')">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g class="fill-current">
                                    <path d="M11,9 L11,5 L9,5 L9,9 L5,9 L5,11 L9,11 L9,15 L11,15 L11,11 L15,11 L15,9 L11,9 Z M10,20 C15.5228475,20 20,15.5228475 20,10 C20,4.4771525 15.5228475,0 10,0 C4.4771525,0 0,4.4771525 0,10 C0,15.5228475 4.4771525,20 10,20 Z M10,18 C14.418278,18 18,14.418278 18,10 C18,5.581722 14.418278,2 10,2 C5.581722,2 2,5.581722 2,10 C2,14.418278 5.581722,18 10,18 Z" id="Shape"></path>
                                </g>
                            </g>
                        </svg>
                        Add photo
                    </button>
                </div>
            </div>
        </modal>

    </div>
</template>

<script>
    import Modal from "../Modal";
    import ImageEditor from "./ImageEditor";

    export default {
        components: { Modal, ImageEditor},
        props: {
            aspectRatio: {
                type: Number,
                required: false,
                default: 1
            },
            maxImages: {
                type: Number,
                required: false,
                default: 5
            }
        },
        data: () => {
            return {
                uploadedImages: [],
                currentImageIndex: 0
            }
        },
        computed: {
            hasUploadedImages() {
                return this.uploadedImages.length;
            },
            isMultipleUpload() {
                return this.maxImages > 1;
            },
            imageCounter() {
                return (this.currentImageIndex + 1) + ' of ' + this.uploadedImages.length;
            },
            canGoBackward() {
                return (this.hasUploadedImages && this.currentImageIndex > 0);
            },
            canGoForward() {
                return (this.hasUploadedImages && this.currentImageIndex < (this.uploadedImages.length-1));
            }
        },
        methods: {
            openFileDialog() {
                this.$refs['upload-input'].click();
            },
            previewImages() {
                let _files = this.$refs['upload-input'].files;

                _files.forEach((file) => {
                    let reader = new FileReader();
                    reader.onload = (event) => {
                        this.uploadedImages.push( {
                            base64: event.target.result,
                            name: file.name,
                            size: file.size
                        });
                    };
                    reader.readAsDataURL(file);
                });
            },
            cropImage(payload) {
                this.uploadedImages[payload.index]['base64'] = payload.image;
            },
            upload() {
                this.$emit('photos-uploaded', { photos: this.uploadedImages});
                this.uploadedImages = [];
                this.currentImageIndex = 0;
                this.$modal.close('uploader');
            },
            navigate(event) {
                if(event.keyCode === 37 && this.canGoBackward) {
                    this.currentImageIndex--;
                }

                if(event.keyCode === 39 && this.canGoForward) {
                    this.currentImageIndex++;
                }
            }
        },
        mounted() {
            // Add arrow left/right navigation support
            document.addEventListener("keyup", this.navigate);
        }
    }
</script>