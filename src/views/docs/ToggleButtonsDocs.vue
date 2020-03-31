<template>
    <div>
        <div class="max-w-7xl mx-auto px-4 pb-4 sm:px-6 lg:px-8">
            <h1 class="text-2xl font-semibold text-gray-900 pb-4 border-b">Toggle Buttons</h1>
        </div>
        <div class="max-w-7xl mx-auto px-4 pb-4 sm:px-6 lg:px-8">
            <note>
                This component has a two-way data binding with <span class="inline-code">v-model</span>.
            </note>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <!-- Basic setup card -->
            <card title="Setup">
                <div slot="preview">
                    <div class="w-64">
                        <toggle-buttons :options="libraries" v-model="library"></toggle-buttons>
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
    import Note from "./Note";
    import HTMLEncoder from "./HTMLEncoder";
    import ToggleButtons from "@/components/rainbow/ToggleButtons";

    export default {
        components: { ToggleButtons, Card, Note },
        mixins: [ HTMLEncoder],
        data: () => {
            return {
                libraries: [
                    { value: 1, label: 'Vue'},
                    { value: 2, label: 'React'},
                    { value: 3, label: 'Angular'},
                ],
                library: 1,
                code: [
                    // template for first card
                    '<toggle-buttons :options="libraries" v-model="library"></toggle-buttons>\n',

                    // script for first card
                    'import ToggleButtons from "@/components/rainbow/ToggleButtons";\n' +
                    '\n' +
                    'export default {\n' +
                    '    components: {\n' +
                    '        ToggleButtons\n' +
                    '    }   ,\n' +
                    '    data: () => {\n' +
                    '        return {\n' +
                    '            libraries: [\n' +
                    '                { value: 1, label: "Vue"},\n' +
                    '                { value: 2, label: "React"},\n' +
                    '                { value: 3, label: "Angular"},\n' +
                    '            ],\n' +
                    '             library: 1,\n', +
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