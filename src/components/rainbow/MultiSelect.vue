<template>
    <div class="relative">
        <div class="flex flex-wrap bg-white font-light border px-1 py-2 rounded w-full">
            <span
                class="inline-flex items-center font-light border rounded bg-indigo-300 text-white mx-1 py-1 px-3 mb-2 text-xs cursor-pointer hover:bg-indigo-600"
                v-for="(item) in selectedItems"
                :key="item.key"
                @click="remove(item)"
            >
                <span>{{ item.value }}</span>
                <button type="button" class="text-white leading-none ml-2 focus:outline-none">&times;</button>
            </span>
            <input class="flex-1 outline-none py-1 px-2 text-sm font-light focus:outline-none" v-model="search" ref="multiSelect" @keyup.prevent="navigate" />
        </div>
        <ul
            class="w-full border p-2 rounded absolute z-50 bg-white"
            v-if="search"
        >
            <li
                class="py-1 px-2 cursor-pointer bg-white hover:bg-indigo-100"
                v-for="(option,index) in filteredOptions"
                :key="option.key"
                :class='{"bg-indigo-100": currentItem === index}'
                @click="add(option)"
            >
                {{ option.value }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            value:
            {
                type: Array,
                required: true
            },
            options: {
                type: Array,
                required: true,
            },
            readOnly: {
                type: Boolean,
                required: false,
                default: false
            }
        },
        data () {
            return {
                selectedItems: [],
                search: null,
                currentItem: 0
            }
        },
        methods: {
            add(item){
                this.selectedItems.push(item);
                this.$emit('input', this.selectedItems);
                this.search = '';
                this.$refs.multiSelect.focus();
            },
            remove(item) {
                this.selectedItems = this.selectedItems.filter(t => t.key !== item.key);
                this.$emit('input', this.selectedItems);
            },
            navigate(event){
                event.stopPropagation();
                event.preventDefault();

                // arrow up
                if (event.keyCode === 38 && this.currentItem > 0) {
                    this.currentItem--;
                }
                // arrow down
                else if (event.keyCode === 40 && this.currentItem < this.searchResultsCount -1) {
                    this.currentItem++;
                }
                // enter
                else if (event.keyCode === 13) {
                    // select item
                    if(this.searchResultsCount) {
                        this.add(this.filteredOptions[this.currentItem]);
                        this.currentItem = 0;
                    }
                    // add item
                    else if( !this.searchResultsCount && !this.readOnly) {
                        this.add({ key: this.search, value: this.search});
                    }
                }
                // backspace (remove last item)
                else if(event.keyCode === 8  && this.selectedItems && !this.searchResultsCount && !this.search) {
                    this.remove(this.selectedItems[this.selectedItems.length-1]);
                }
            }
        },
        computed: {
            filteredOptions() {
                if (!this.search) {
                    return null;
                } else {
                    return this.options.filter(option => {
                        return !this.selectedItems.some(item => item.key === option.key);
                    })
                    .filter(option => {
                        return option.value
                            .toLowerCase()
                            .includes(this.search.toLowerCase());
                    });
                }
            },
            searchResultsCount() {
                return (this.filteredOptions) ? this.filteredOptions.length : 0;
            }
        },
        watch: {
            value: {
                handler: function () {
                    this.selectedItems = this.value
                },
                immediate: true
            }
        }
    }
</script>