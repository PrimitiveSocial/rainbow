<template>
    <div class="flex w-full justify-center">
        <div class="h-auto w-3/5">
            <vue-cropper
                ref="cropper"
                :src="image"
                :cropBoxResizable="false"
                :viewMode="2"
                :zoomOnWheel="false"
                :aspectRatio="aspectRatio"
                :dragMode="'move'"
            >
            </vue-cropper>
        </div>
        <div class="ml-4">
            <button class="text-xs mb-4 block focus:outline-none" @click="crop()">
                <svg class="h-4 w-4 inline" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g class="fill-current">
                            <path d="M14,16 L14,20 L16,20 L16,16 L20,16 L20,14 L6,14 L6,0 L4,0 L4,4 L0,4 L0,6 L4,6 L4,14.0059397 C4,15.1054862 4.8927712,16 5.99406028,16 L14,16 Z M14,13 L14,6 L7,6 L7,4 L14.0059397,4 C15.1072288,4 16,4.89451376 16,5.99406028 L16,13 L14,13 Z" id="Combined-Shape"></path>
                        </g>
                    </g>
                </svg>
            </button>
            <button class="text-xs mb-4 block focus:outline-none" @click="zoom(0.2)">
                <svg class="h-4 w-4 inline" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g class="fill-current">
                            <path d="M7,7 L5,7 L5,9 L7,9 L7,11 L9,11 L9,9 L11,9 L11,7 L9,7 L9,5 L7,5 L7,7 Z M12.9056439,14.3198574 C11.5509601,15.3729184 9.84871145,16 8,16 C3.581722,16 0,12.418278 0,8 C0,3.581722 3.581722,0 8,0 C12.418278,0 16,3.581722 16,8 C16,9.84871145 15.3729184,11.5509601 14.3198574,12.9056439 L19.6568542,18.2426407 L18.2426407,19.6568542 L12.9056439,14.3198574 Z M8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 Z" id="Combined-Shape"></path>
                        </g>
                    </g>
                </svg>
            </button>
            <button class="btn-primary text-xs mb-4 block focus:outline-none" @click="zoom(-0.2)">
                <svg class="h-4 w-4 inline" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g class="fill-current">
                            <path d="M12.9056439,14.3198574 C11.5509601,15.3729184 9.84871145,16 8,16 C3.581722,16 0,12.418278 0,8 C0,3.581722 3.581722,0 8,0 C12.418278,0 16,3.581722 16,8 C16,9.84871145 15.3729184,11.5509601 14.3198574,12.9056439 L19.6568542,18.2426407 L18.2426407,19.6568542 L12.9056439,14.3198574 Z M8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 Z M5,7 L11,7 L11,9 L5,9 L5,7 Z" id="Combined-Shape"></path>
                        </g>
                    </g>
                </svg>
            </button>
            <button class="btn-primary text-xs mb-4 block focus:outline-none" @click="rotate(45)">
                <svg class="h-4 w-4 inline" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g class="fill-current">
                            <path d="M14.6568542,15.6568542 C13.209139,17.1045695 11.209139,18 9,18 C4.581722,18 1,14.418278 1,10 C1,5.581722 4.581722,2 9,2 C13.418278,2 17,5.581722 17,10 L15,10 C15,6.6862915 12.3137085,4 9,4 C5.6862915,4 3,6.6862915 3,10 C3,13.3137085 5.6862915,16 9,16 C10.6568542,16 12.1568542,15.3284271 13.2426407,14.2426407 L14.6568542,15.6568542 L14.6568542,15.6568542 Z M12,10 L20,10 L16,14 L12,10 L12,10 Z" id="Combined-Shape"></path>
                        </g>
                    </g>
                </svg>
            </button>
            <button class="btn-primary text-xs mb-4 block focus:outline-none" @click="reset()">
                <svg class="h-4 w-4 inline" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g class="fill-current">
                            <path d="M9.42239525,7.09396812 C10.2387498,5.25806681 9.89409813,3.03105216 8.38844025,1.52539428 C6.93864576,0.0755997864 4.82002948,-0.297742297 3.02577331,0.40536803 L6.97422669,4.35382141 L4.14579956,7.18224853 L0.197346187,3.23379515 C-0.50576414,5.02805132 -0.132422056,7.1466676 1.31737244,8.59646209 C2.70997507,9.98906472 4.71967257,10.3884681 6.46624524,9.79467236 L16.5961941,19.9246212 L19.4246212,17.0961941 L9.42239525,7.09396812 Z" id="Combined-Shape"></path>
                        </g>
                    </g>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
    import VueCropper from 'vue-cropperjs';
    import 'cropperjs/dist/cropper.css';

    export default {
        components: { VueCropper },
        props: {
            image: {
                type: String,
                required: true
            },
            index: {
                type: Number,
                required: true
            },
            aspectRatio: {
                type: Number,
                required: true,
                default: 1
            }
        },
        methods: {
            crop() {
                let base64Image = this.$refs.cropper.getCroppedCanvas().toDataURL();
                this.$refs.cropper.replace(base64Image);
                this.$emit('image-cropped', {index: this.index, image: base64Image});
            },
            reset() {
                this.$refs.cropper.reset();
            },
            zoom(percent) {
                this.$refs.cropper.relativeZoom(percent);
            },
            rotate(deg) {
                this.$refs.cropper.rotate(deg);
            },
            cropOnEnterKey(event) {
                if(event.keyCode === 13)
                    this.crop();
            }
        },
        mounted() {
            document.addEventListener("keyup", this.cropOnEnterKey);
        }
    }
</script>