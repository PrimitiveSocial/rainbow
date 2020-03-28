<template>
    <div class="flex justify-between text-center font-light text-sm rounded bg-indigo-100 overflow-hidden">
        <div
            v-for="option in options"
            class="cursor-pointer p-3"
            :class="getClassList(option)"
            :key="option.value"
            @click="activeOptionValue = option.value"
        >
            {{ option.label }}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            options: {
                type: Array,
                required: true
            },
            default: {
                type: Number,
                required: false
            }
        },
        data: () => {
            return {
                activeOptionValue: null
            }
        },
        methods: {
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
        watch: {
            activeOptionValue() {
                this.$emit('selected', this.activeOptionValue);
            }
        },
        mounted() {
            this.activeOptionValue = this.default ? this.default : this.options[0].value;
        }
    }
</script>