<template>
    <span
            :class="{ 'bg-gray-200': !content, 'bg-indigo-400': content }"
            class="relative inline-block flex-no-shrink h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
            @click="toggle"
    >
        <span
                :class="{ 'translate-x-5': content, 'translate-x-0': !content }"
                class="relative inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
        >
            <span
                    :class="{ 'opacity-0 ease-out duration-100': content, 'opacity-100 ease-in duration-200': !content }"
                    class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
            >
                <svg class="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                    <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
            <span
                    :class="{ 'opacity-100 ease-in duration-200': content, 'opacity-0 ease-out duration-100': !content }"
                    class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
            >
                <svg class="h-3 w-3 text-indigo-400" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                </svg>
            </span>
        </span>
    </span>
</template>

<script>
    export default {
        props: ['value'],
        data () {
            return {
                content: this.value
            }
        },
        methods: {
            toggle() {
                this.content = !this.content;
                this.$emit('input', this.content)
            },
        }
    }
</script>

<style scoped>
    .w-11 {
        width: 2.75rem;
    }
</style>