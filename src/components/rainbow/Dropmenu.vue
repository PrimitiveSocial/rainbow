<template>
    <div class="relative">
        <span @click="toggleMenu" ref="trigger">
            <slot name="trigger">
                <svg class="h-4 w-4 inline cursor-pointer" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                    <g>
                        <g>
                            <g class="fill-current">
                                <circle cx="256" cy="256" r="64"/>
                                <circle cx="256" cy="448" r="64"/>
                                <circle cx="256" cy="64" r="64"/>
                            </g>
                        </g>
                    </g>
                </svg>
            </slot>
        </span>
        <nav
            class="drop-menu bg-white p-4 absolute rounded top-0 text-left border z-50"
            v-show="isOpen"
            :style="'min-width:' + minWidth+'rem; left:' + left + 'rem'"
        >
            <slot name="default" :close="close" />
        </nav>
    </div>
</template>

<script>
    export default {
        props: {
            direction: {
                type: String,
                required: false,
                default: 'right'
            },
            minWidth: {
                type: Number,
                required: false,
                default: 13.85
            },
            closeOnOutsideClick: {
                type: Boolean,
                required: false,
                default: true
            },
        },
        data: () => {
            return {
                isOpen: false,
            }
        },
        computed: {
            left() {
                if(this.direction === 'right')
                    return 0;
                else {
                    if (this.$refs.trigger) // bcz slot is not yet loaded
                        return (this.$refs.trigger.offsetWidth / 16);
                    else
                        return -this.minWidth
                }
            }
        },
        methods: {
            toggleMenu(e) {
                this.isOpen = !this.isOpen;
                e.stopPropagation();
            },
            handleOutsideClickEvent(e) {
                if (this.$el.contains(e.target)) {
                    return;
                }
                this.close();
            },
            close() {
                this.isOpen = false;
            }
        },
        mounted() {
            if(this.closeOnOutsideClick)
                window.addEventListener('click', this.handleOutsideClickEvent);
        }
    }
</script>

<style scoped>
    .drop-menu {
        box-shadow: 0 0.5rem 1rem rgba(222, 224, 228, 0.5);
    }
    .drop-menu.open {
        display: block;
    }
</style>
