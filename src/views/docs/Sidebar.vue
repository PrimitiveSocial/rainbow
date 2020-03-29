<template>
    <div class="hidden md:flex md:flex-shrink-0">
        <div class="flex flex-col w-64 bg-gray-800">
            <div class="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div class="flex items-center flex-shrink-0 px-4 text-white">
                    Components
                </div>

                <nav class="mt-5 flex-1 px-2 bg-gray-800">
                    <a
                        v-for="component in components"
                        :key="component.value"
                        @click="$emit('active-nav', component.value)"
                        class="mt-1 rounded flex items-center px-2 py-2 text-sm leading-5 font-medium rounded-md cursor-pointer hover:text-white hover:bg-gray-700 focus:outline-none"
                        :class="getActiveClass(component.value)"
                    >
                        {{ component.label }}
                    </a>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            selected: {
                type: String,
                required: true
            }
        },
        methods: {
            getActiveClass(value) {
                return (value === this.selected) ? 'text-white bg-gray-700' : 'text-gray-500';
            }
        },
        data: () => {
            return {
                components: [
                    {value: 'ToggleButtons', label: 'Toggle Buttons'},
                    {value: 'Dropdown', label: 'Dropdown'},
                    {value: 'Dropmenu', label: 'Dropmenu'},
                    {value: 'Switcher', label: 'Switcher'},
                ]
            }
        }
    }
</script>