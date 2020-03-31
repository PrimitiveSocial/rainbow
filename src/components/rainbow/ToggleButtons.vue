<template>
    <div class="flex justify-between text-center font-light text-sm rounded bg-indigo-100 overflow-hidden">
        <div
            v-for="option in options"
            class="cursor-pointer p-3"
            :class="getClassList(option)"
            :key="option.value"
            @click="update(option)"
        >
            {{ option.label }}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                required: true
            },
            options: {
                type: Array,
                required: true
            },
        },
        data: () => {
            return {
                activeOptionValue: null
            }
        },
        methods: {
            update(option) {
                this.activeOptionValue = option.value;
                this.$emit('input', this.activeOptionValue);
            },
            getClassList(option) {
                let _classList = [
                    'w-1/' + this.options.length
                ];
                if(option.value === this.activeOptionValue) {
                    _classList.push('bg-indigo-400 text-white');
                }
                return _classList.join(' ');
            }
        },
        mounted() {
            this.activeOptionValue = this.value;
        }
    }
</script>