<template>
    <div class="bg-white overflow-hidden sm:rounded-lg sm:shadow mb-12">
        <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
                <div class="ml-4 mt-2">
                    <h3 class="text-lg leading-6 font-medium text-gray-600">
                        {{ title }}
                    </h3>
                </div>
                <div class="ml-4 mt-2">
                    <span @click="activeSlot = 'preview'" class="cursor-pointer rounded-md py-2 px-3 mx-1 text-xs hover:bg-gray-300 hover:text-gray-600" :class="activeClass('preview')">Preview</span>
                    <span @click="activeSlot = 'template'" class="cursor-pointer rounded-md py-2 px-3 mx-1 text-xs hover:bg-gray-300 hover:text-gray-600" :class="activeClass('template')">Template</span>
                    <span @click="activeSlot = 'script'" class="cursor-pointer rounded-md py-2 px-3 mx-1 text-xs hover:bg-gray-300 hover:text-gray-600" :class="activeClass('script')">Script</span>
                </div>
            </div>
        </div>

        <div v-show="activeSlot === 'preview'">
            <slot name="preview"></slot>
        </div>
        <div v-show="activeSlot === 'template'">
            <slot name="template"></slot>
        </div>
        <div v-show="activeSlot === 'script'">
            <slot name="script"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            }
        },
        data: () => {
            return {
                activeSlot: 'preview'
            }
        },
        methods: {
            activeClass(value) {
                return (this.activeSlot === value) ? 'bg-gray-300 text-gray-600' : 'text-gray-300'
            }
        }
    }
</script>