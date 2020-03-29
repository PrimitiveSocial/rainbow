<template>
    <div class="relative">
        <div class="w-full border p-2 rounded flex justify-between">
            <div class="w-5/6">
                <input
                    type="text"
                    :placeholder="placeholder"
                    class="w-full outline-none text-sm font-light"
                    v-model="selectedInput"
                    @click="openDropdown"
                    @keyup="openDropdown"
                    @blur="validateSelectedInput"
                    ref="search-dropdown"
                />
            </div>
            <div class="w-1/6 text-right mr-1 cursor-pointer" @click="toggleDropdown">
                <svg class="inline w-4 h-4" v-if="!selectedInput" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g class="fill-current">
                            <polygon points="9.29289322 12.9497475 10 13.6568542 15.6568542 8 14.2426407 6.58578644 10 10.8284271 5.75735931 6.58578644 4.34314575 8"></polygon>							</g>
                    </g>
                </svg>
                <svg
                    class="inline w-3 h-3" v-if="selectedInput" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
            options: {
                type: Array,
                required: true
            },
            placeholder: {
                type: String,
                required: false,
                default: 'Search items'
            },
            default: {
                required: false
            },
        },
        data() {
            return {
                showDropdown: false,
                selectedInput: null,
                selectedKey: null,
                currentItem: 0
            }
        },
        computed: {
            filteredOptions() {
                if (!this.selectedInput) {
                    return this.options;
                } else {
                    return this.options.filter(option => {
                        return option.value
                            .toLowerCase()
                            .includes(this.selectedInput.toLowerCase());
                    });
                }
            }
        },
        methods: {
            openDropdown() {
                this.showDropdown = true;
            },
            closeDropdown() {
                this.showDropdown = false;
            },
            selectOption(option) {
                this.selectedInput = option.value;
                this.selectedKey = option.key;
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
                (this.selectedInput)
                    ? this.selectedInput = this.selectedKey = null
                    : this.openDropdown();
            },
            nextItem(event) {
                // arrow up
                if (event.keyCode === 38 && this.currentItem > 0) {
                    this.currentItem--;
                    // arrow down
                } else if (event.keyCode === 40 && this.currentItem < this.filteredOptions.length -1) {
                    this.currentItem++;
                    // enter
                } else if (event.keyCode === 13) {
                    this.selectOption(this.filteredOptions[this.currentItem]);
                }
            },
            validateSelectedInput() {
                // if no results found, reset the value.
                if(this.filteredOptions.length === 0)
                    this.selectedInput = null;
            }
        },
        watch: {
            selectedInput() {
                this.$emit('selected', {
                    key: this.selectedKey,
                    value: this.selectedInput,
                });
            },
            default() {
                if(!this.default) {
                    this.selectedKey = null;
                    this.selectedInput = null;
                }
            }
        },
        mounted() {
            this.selectedKey = this.default ? this.default : null;

            if(this.selectedKey) {
                let defaultOption = this.options.filter(option => {
                    return option.key === this.selectedKey;
                }).shift();

                this.selectedInput = defaultOption.value;
            }

            document.addEventListener("click", this.handleClickOutside);
            document.addEventListener("keyup", this.nextItem);
        }
    }
</script>