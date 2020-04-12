<template>
    <div class="bg-yellow-100 text-yellow-800 justify-center flex items-center p-4" v-if="!isDismissed">
        <div class="ml-3">
            <p class="text-sm leading-6 font-thing flex flex-start items-center">
                <svg class="h-6 w-6 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <slot></slot>
            </p>
        </div>
        <div v-if="dismissable">
            <span class="font-medium uppercase text-xs ml-10 bg-yellow-400 opacity-50 px-4 py-2 rounded cursor-pointer" @click="isDismissed = true">Dismiss</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            dismissable: {
                type: Boolean,
                required: false,
                default: true
            }
        },
        data: () => {
            return {
                isDismissed: false,
            }
        }
    }
</script>