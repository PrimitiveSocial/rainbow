<template>
    <div>
        <nav class="border-b border-gray-300 relative my-4 w-full">
            <div class="flex flex-start">
                <span
                    v-for="(tab,index) in tabs"
                    :key="index"
                    @click="activeTab = tab"
                    class="text-gray-500 text-base capitalize px-6 py-2 cursor-pointer hover:text-gray-700"
                    :class="{ 'text-gray-700 font-medium border-b border-gray-700 border-b-3' : tab === activeTab }"
                >
                    {{ tab.title }}
                </span>
                <div class="tabs-navigation-indicator" ref="indicator"></div>
            </div>
        </nav>
        <div class="tabs-content">
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                tabs: [],
                activeTab: null
            }
        },
        watch: {
            activeTab: function(newVal) {
                this.tabs.map( (tab) => {
                    tab.isActive = tab === this.activeTab;
                });
                this.$refs["indicator"].style.left = (newVal.index * 25) + '%';
            }
        },
        methods: {
            setDefaultActiveTab: function() {
                this.activeTab = this.tabs.find( tab => tab.active) || this.tabs[0];
            },
            setTabsIndexes: function() {
                this.tabs.map( (tab, index) => {
                    tab.index = index;
                });
            }
        },
        created() {
            this.tabs = this.$children;
        },
        mounted() {
            this.setDefaultActiveTab();
            this.setTabsIndexes();
        }
    }
</script>
