<template>
    <div class="relative">
        <div class="w-full border p-2 rounded flex justify-between cursor-pointer bg-white" @click="openDropdown">
            <div class="w-5/6">
                <input
                    type="text"
                    class="w-full outline-none text-sm font-light cursor-pointer"
                    ref="search-dropdown"
                    v-model="label"
                    :placeholder="placeholder"
                    :disabled="!searchable"
                    @keyup="openDropdown"
                    @blur="validateSelectedInput"
                />
            </div>
            <div class="w-1/6 text-right mr-1" @click="toggleDropdown">
                <svg class="inline w-4 h-4" v-if="!key" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g class="fill-current">
                            <polygon points="9.29289322 12.9497475 10 13.6568542 15.6568542 8 14.2426407 6.58578644 10 10.8284271 5.75735931 6.58578644 4.34314575 8"></polygon>							</g>
                    </g>
                </svg>
                <svg class="inline w-3 h-3" v-if="key" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g class="fill-current">
                            <polygon points="10 8.58578644 2.92893219 1.51471863 1.51471863 2.92893219 8.58578644 10 1.51471863 17.0710678 2.92893219 18.4852814 10 11.4142136 17.0710678 18.4852814 18.4852814 17.0710678 11.4142136 10 18.4852814 2.92893219 17.0710678 1.51471863 10 8.58578644"></polygon>
                        </g>
                    </g>
                </svg>
            </div>
        </div>

        <ul
            class="w-full border p-2 rounded absolute z-50 bg-white"
            v-if="showDropdown"
        >
            <li
                v-for="(option,index) in filteredOptions"
                :key="option.key"
                class="py-1 px-2 cursor-pointer bg-white"
                :class='{"bg-indigo-100": currentItem === index}'
                @click="selectOption(option)"
                @mouseover="currentItem = index"
            >
                {{ option.value }}
            </li>
            <li v-if="!filteredOptions.length">
                <span class="text-xs text-gray-500 text-center block">No results found matching your search.</span>
            </li>
        </ul>

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
            placeholder: {
                type: String,
                required: false,
                default: 'Search items'
            },
            searchable: {
                type: Boolean,
                required: false,
                default: true
            },
            withKeyboardNavigation: {
                type: Boolean,
                required: false,
                default: true
            }
        },
        data() {
            return {
                showDropdown: false,
                label: null,
                key: null,
                currentItem: 0
            }
        },
        computed: {
            filteredOptions() {
                if (!this.label) {
                    return this.options;
                } else {
                    return this.options.filter(option => {
                        return option.value
                            .toLowerCase()
                            .includes(this.label.toLowerCase());
                    });
                }
            }
        },
        methods: {
            openDropdown() {
                this.showDropdown = true;
                if(this.searchable) {
                    this.$refs['search-dropdown'].focus();
                }
            },
            closeDropdown() {
                this.showDropdown = false;
            },
            selectOption(option) {
                this.key = option.key;
                this.closeDropdown();
                this.currentItem = 0;
            },
            handleClickOutside(e) {
                if (this.$el.contains(e.target)) {
                    return;
                }
                this.closeDropdown();
            },
            toggleDropdown() {
                (this.key)
                    ? this.key = this.label = null
                    : this.openDropdown();
            },
            validateSelectedInput() {
                // if no results found, reset the value.
                if(this.filteredOptions.length === 0) {
                    this.key = this.label = null;
                    this.closeDropdown();
                }
            },
            nextItem(event) {
                // arrow up
                if (event.keyCode === 38 && this.currentItem > 0) {
                    this.currentItem--;
                    // arrow down
                } else if (event.keyCode === 40 && this.currentItem < this.filteredOptions.length -1) {
                    this.currentItem++;
                    // enter
                } else if (event.keyCode === 13 && this.filteredOptions.length) {
                    this.selectOption(this.filteredOptions[this.currentItem]);
                }
            },
        },
        watch: {
            key: {
                handler: function(value) {
                    this.$emit('input', this.key);

                    if(!value) {
                        this.label = null;
                        return;
                    }

                    let option = this.options.find(option => {
                        return option.key === value;
                    });

                    this.label = option.value;
                },
                immediate: true
            },
        },
        mounted() {
            this.key = this.value;
            document.addEventListener("click", this.handleClickOutside);

            if(this.withKeyboardNavigation) {
                document.addEventListener("keyup", this.nextItem);
            }
        }
    }
</script>