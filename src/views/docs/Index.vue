<template>
    <div class="h-screen flex overflow-hidden bg-gray-100">
        <sidebar
            :selected="activeNav"
            @active-nav="setActiveNav"
        >
        </sidebar>

        <div class="flex flex-col w-0 flex-1 overflow-hidden">
            <main class="flex-1 relative z-0 overflow-y-auto pt-2 pb-6 focus:outline-none md:py-6" tabindex="0">
                <toggle-buttons-docs v-if="activeNav === 'ToggleButtons'"></toggle-buttons-docs>
                <dropdown-docs v-if="activeNav === 'Dropdown'"></dropdown-docs>
                <dropmenu-docs v-if="activeNav === 'Dropmenu'"></dropmenu-docs>
                <switcher-docs v-if="activeNav === 'Switcher'"></switcher-docs>
            </main>
        </div>
    </div>
</template>

<script>
    import Sidebar from "./Sidebar";
    import DropdownDocs from "./DropdownDocs";
    import SwitcherDocs from "./SwitcherDocs";
    import DropmenuDocs from "./DropmenuDocs";
    import ToggleButtonsDocs from "./ToggleButtonsDocs";

    export default {
        components: { Sidebar, ToggleButtonsDocs, DropdownDocs, DropmenuDocs, SwitcherDocs },
        data: () => {
            return {
                activeNav: 'ToggleButtons',
            }
        },
        methods: {
            setActiveNav(payload) {
                this.activeNav = payload;
            }
        }
    }
</script>