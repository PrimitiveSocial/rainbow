<template>
    <div
        class="block fixed w-full h-full z-50 top-0 left-0 overflow-auto flex justify-center items-center"
        :class="(!transparentBg ) ? 'overlay-bg' : ''"
        v-show="isOpen"
    >
        <div
            class="bg-white relative min-h-1/4 h-auto overflow-scroll"
            style="max-height: 80%"
            :class="sizeClass"
        >
            <svg
                class="h-4 w-4 text-gray-400 absolute top-2 right-2 hover:text-black cursor-pointer"
                @click="close"
                v-if="withCloseIcon"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
            >
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g class="fill-current">
                        <polygon points="10 8.58578644 2.92893219 1.51471863 1.51471863 2.92893219 8.58578644 10 1.51471863 17.0710678 2.92893219 18.4852814 10 11.4142136 17.0710678 18.4852814 18.4852814 17.0710678 11.4142136 10 18.4852814 2.92893219 17.0710678 1.51471863 10 8.58578644"></polygon>
                    </g>
                </g>
            </svg>

            <div class="w-full h-full overflow-scroll">
                <slot :params="params"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true
            },
            size: {
                type: String,
                required: false,
                default: 'medium'
            },
            transparentBg: {
                type: Boolean,
                required: false,
                default: false
            },
            withCloseIcon: {
                type: Boolean,
                required: false,
                default: true
            }
        },
        data: () => {
            return {
                isOpen: false,
                params: {}
            }
        },
        computed: {
            sizeClass() {
                let size = '';

                switch(this.size) {
                    case 'small':
                        size = 'w-1/4';
                        break;
                    case 'large' :
                        size = 'w-3/4';
                        break;
                    case 'medium': default:
                        size = 'w-2/4';
                        break;
                }

                return size;
            }
        },
        methods: {
            close() {
                this.isOpen = false;
            },
        },
        mounted() {
            window.EventBus.$on('open-modal', (payload) => {
                if (payload && payload.name && payload.name === this.name) {
                    this.isOpen = true;
                    this.params = payload.params;
                }
            });

            window.EventBus.$on('hide-modal', (payload) => {
                if (payload && payload.name && payload.name === this.name) {
                    this.isOpen = false;
                }
            });
        }
    }
</script>
<style scoped>
    .overlay-bg
    {
        background-color: rgba(0,0,0,0.5); /* Black w/ opacity */
    }
</style>