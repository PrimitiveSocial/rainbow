<template>
    <div class="bg-white shadow-md mb-12 border rounded">
        <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
                <div class="ml-2 mt-2">
                    <h3 class="text-lg leading-6 font-medium text-gray-800">
                        {{ title }}
                    </h3>
                    <p v-if="description" class="text-xs text-gray-500" v-html="description"></p>
                </div>
                <div class="ml-4 mt-2">
                    <span @click="activeSlot = 'preview'" class="cursor-pointer rounded-md py-2 px-3 mx-1 text-xs hover:bg-gray-300 hover:text-gray-600" :class="activeClass('preview')">Preview</span>
                    <span @click="activeSlot = 'template'" class="cursor-pointer rounded-md py-2 px-3 mx-1 text-xs hover:bg-gray-300 hover:text-gray-600" :class="activeClass('template')">Template</span>
                    <span @click="activeSlot = 'script'" class="cursor-pointer rounded-md py-2 px-3 mx-1 text-xs hover:bg-gray-300 hover:text-gray-600" :class="activeClass('script')">Script</span>
                </div>
            </div>
        </div>

        <div v-show="activeSlot === 'preview'" class="p-6 bg-gray-100 flex items-center justify-center">
            <slot name="preview"></slot>
        </div>
        <div v-show="activeSlot === 'template'" class="p-6 bg-gray-100 flex items-center justify-center">
            <slot name="template"></slot>
        </div>
        <div v-show="activeSlot === 'script'" class="p-6 bg-gray-100 flex items-center justify-center">
            <slot name="script"></slot>
        </div>
    </div>
</template>

<script>
    import "vue-code-highlight/themes/prism-tomorrow.css";
    import "vue-code-highlight/themes/window.css";
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: false,
                default: null
            }
        },
        data: () => {
            return {
                activeSlot: 'preview'
            }
        },
        methods: {
            activeClass(value) {
                return (this.activeSlot === value) ? 'bg-gray-300 text-gray-600' : 'text-gray-400'
            }
        }
    }
</script>

<style scoped>
    pre {
        margin: 0;
    }
    code {
        font-size: 12px;
    }
</style>