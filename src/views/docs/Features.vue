<template>
    <div>
        <div class="flex justify-end items-center">
            <div
                v-for="(option,index) in options"
                :key="index"
                class="ml-4 text-xs px-2 py-1 rounded-full"
                :class="classList(index)"
            >
                {{ option }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            options: {
                type: Array,
                required: true
            }
        },
        data: () => {
            return {
                bgs: [
                    'bg-green-200',
                    'bg-orange-200',
                    'bg-blue-200',
                    'bg-indigo-500',
                    'bg-teal-200',
                    'bg-yellow-200',
                ],
                colors: [
                    'text-green-600',
                    'text-orange-600',
                    'text-blue-600',
                    'text-white',
                    'text-teal-600',
                    'text-yellow-600',
                ]
            }
        },
        methods: {
            classList(index) {
                return this.bgs[index] + ' ' + this.colors[index];
            }
        }
    }
</script>