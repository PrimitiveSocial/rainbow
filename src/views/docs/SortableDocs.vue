<template>
    <div>
        <div class="max-w-7xl mx-auto px-4 pb-4 sm:px-6 lg:px-8 flex justify-between border-b mb-8">
            <h1 class="text-2xl font-semibold text-gray-900">Sortable</h1>
            <features :options="features"></features>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <!-- Basic setup card -->
            <card title="Setup">
                <div slot="preview">
                    <div class="w-64">
                        <p class="font-semibold mb-5">Drag the list item to sort it</p>
                        <sortable-list v-model="todos">
                            <ul slot-scope="{ items }">
                                <sortable-item v-for="todo in items" :key="todo.id">
                                    <sortable-handle>
                                        <li class="bg-white px-4 border-b border-grey-lighter py-4 text-xs cursor-move focus:outline-none">
                                            {{ todo.description }}
                                        </li>
                                    </sortable-handle>
                                </sortable-item>
                            </ul>
                        </sortable-list>
                    </div>
                </div>
                <div slot="template">
                    <div v-highlight>
                        <pre class="language-html"><code>{{ htmlEncode(code[0]) }}</code></pre>
                    </div>
                </div>
                <div slot="script">
                    <div v-highlight>
                        <pre class="language-javascript"><code>{{ htmlEncode(code[1]) }}</code></pre>
                    </div>
                </div>
            </card>

        </div>
    </div>
</template>

<script>
    import Card from "./Card";
    import Features from "./Features";
    import HTMLEncoder from "./HTMLEncoder";
    import SortableList from "@/components/rainbow/sortable/SortableList";
    import SortableItem from "@/components/rainbow/sortable/SortableItem";
    import SortableHandle from "@/components/rainbow/sortable/SortableHandle";

    export default {
        components: { SortableList, SortableItem, SortableHandle, Features, Card },
        mixins: [ HTMLEncoder],
        data: () => {
            return {
                features: [
                    'reactive',
                    'slot',
                    'slot-scope',
                    'render-less'
                ],
                todos: [
                    { id: 1, description: "Setup Github actions" },
                    { id: 2, description: "Style with Tailwind" },
                    { id: 3, description: "Install primitive packages" },
                    { id: 4, description: "Update documentation" },
                    { id: 5, description: "Watch Laracon videos" },
                ],
                code: [
                    // template for first card
                    '<sortable-list v-model="todos">\n' +
                    '    <ul slot-scope="{ items }">\n' +
                    '        <sortable-item v-for="todo in items" :key="todo.id">\n' +
                    '            <sortable-handle>\n' +
                    '                <li>{{ todo.description }}</li>\n' +
                    '            </sortable-handle>\n' +
                    '        </sortable-item>\n' +
                    '    </ul>\n' +
                    '</sortable-list>',

                    // script for first card
                    'import SortableList from "@/components/rainbow/sortable/SortableList";\n' +
                    'import SortableItem from "@/components/rainbow/sortable/SortableItem";\n' +
                    'import SortableHandle from "@/components/rainbow/sortable/SortableHandle";\n' +
                    '\n' +
                    'export default {\n' +
                    '    components: {\n' +
                    '        SortableList, SortableItem, SortableHandle\n' +
                    '    },\n' +
                    '    data: () => {\n' +
                    '        return {\n' +
                    '            todos: [\n' +
                    '                    { id: 1, description: "Setup Github actions" },\n' +
                    '                    { id: 2, description: "Style with Tailwind" },\n' +
                    '                    { id: 3, description: "Install primitive packages" },\n' +
                    '                    { id: 4, description: "Update documentation" },\n' +
                    '                    { id: 5, description: "Watch Laracon videos" },\n' +
                    '                ],\n' +
                    '        }\n' +
                    '    },\n' +
                    '}\n',
                ]
            }
        },
    }
</script>

<style scoped>
    .inline-code {
        @apply bg-red-300 p-1 text-white rounded text-xs;
    }
</style>