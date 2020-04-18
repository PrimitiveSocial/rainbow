<template>
    <div v-show="isActive">
        <slot/>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            active: {
                type: Boolean,
                default: false
            }
        },
        data: () => {
            return {
                isActive: false,
                index: 0
            }
        }
    }
</script>
