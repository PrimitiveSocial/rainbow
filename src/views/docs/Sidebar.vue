<template>
    <div class="hidden md:flex md:flex-shrink-0">
        <div class="flex flex-col w-64 bg-gray-800">
            <div class="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div class="flex items-center flex-shrink-0 px-4 text-white uppercase font-bold">
                    <router-link :to="{name: 'home'}">
                        <div class="flex items-center">
                            <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" class="inline h-4 w-4 text-white mr-2">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g class="fill-current">
                                        <polygon id="Combined-Shape-Copy" points="3.82842712 9 9.89949494 2.92893219 8.48528137 1.51471863 0 10 0.707106781 10.7071068 8.48528137 18.4852814 9.89949494 17.0710678 3.82842712 11 20 11 20 9 3.82842712 9"></polygon>
                                    </g>
                                </g>
                            </svg>
                            <h3>Rainbow</h3>
                        </div>
                    </router-link>
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
                    {value: 'Dropmenu', label: 'Dropmenu'},
                    {value: 'Dropdown', label: 'Dropdown'},
                    {value: 'Modal', label: 'Modal'},
                    {value: 'MultiSelect', label: 'Multi Select'},
                    {value: 'Sortable', label: 'Sortable'},
                    {value: 'Switcher', label: 'Switcher'},
                    {value: 'Tabs', label: 'Tabs'},
                    {value: 'ToggleButtons', label: 'Toggle Buttons'},
                    {value: 'Uploader', label: 'Uploader'},
                ]
            }
        }
    }
</script>