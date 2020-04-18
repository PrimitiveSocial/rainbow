<template>
    <div>
        <div class="h-screen flex overflow-hidden bg-white">
            <sidebar
                :selected="activeNav"
                @active-nav="setActiveNav"
            >
            </sidebar>

            <div class="flex flex-col w-0 flex-1 overflow-hidden">
                <main class="flex-1 relative z-0 overflow-y-scroll pt-2 pb-6 focus:outline-none md:py-6" tabindex="0">
                    <dropmenu-docs v-if="activeNav === 'Dropmenu'"></dropmenu-docs>
                    <dropdown-docs v-if="activeNav === 'Dropdown'"></dropdown-docs>
                    <modal-docs v-if="activeNav === 'Modal'"></modal-docs>
                    <sortable-docs v-if="activeNav === 'Sortable'"></sortable-docs>
                    <switcher-docs v-if="activeNav === 'Switcher'"></switcher-docs>
                    <tabs-docs v-if="activeNav === 'Tabs'"></tabs-docs>
                    <toggle-buttons-docs v-if="activeNav === 'ToggleButtons'"></toggle-buttons-docs>
                    <uploader-docs v-if="activeNav === 'Uploader'"></uploader-docs>
                </main>
            </div>
        </div>
        <note class="absolute bottom-0 w-full">
            <div>
                <p>These components provide functionality with minimum design.However, you can still customize their style from the source in <code class="text-xs">src/components/rainbow</code></p>
            </div>
        </note>
    </div>
</template>

<script>
    import Sidebar from "./Sidebar";
    import ModalDocs from "./ModalDocs";
    import DropdownDocs from "./DropdownDocs";
    import SwitcherDocs from "./SwitcherDocs";
    import DropmenuDocs from "./DropmenuDocs";
    import ToggleButtonsDocs from "./ToggleButtonsDocs";
    import UploaderDocs from "./UploaderDocs";
    import SortableDocs from "./SortableDocs";
    import TabsDocs from "./TabsDocs";
    import Note from "./Note";

    export default {
        components: { Sidebar, ToggleButtonsDocs, DropdownDocs, DropmenuDocs, SwitcherDocs, ModalDocs, UploaderDocs, SortableDocs, TabsDocs, Note },
        data: () => {
            return {
                activeNav: 'Dropmenu',
            }
        },
        methods: {
            setActiveNav(payload) {
                this.activeNav = payload;
            }
        }
    }
</script>