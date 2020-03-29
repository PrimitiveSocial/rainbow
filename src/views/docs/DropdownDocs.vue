<template>
    <div>
        <div class="max-w-7xl mx-auto px-4 pb-4 sm:px-6 lg:px-8">
            <h1 class="text-2xl font-semibold text-gray-900 pb-4 border-b">Dropdown</h1>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <!-- Basic setup card -->
            <card title="Basic Setup">
                <div slot="preview">
                    <div class="w-64">
                        <dropdown :options="dropdownOptions"></dropdown>
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

            <!-- Set default selected option card -->
            <card title="Default Selected Option">
                <div slot="preview">
                    <note>
                        To set a default selected value, use the <code class="inline-code">:default</code> prop.
                    </note>
                    <div class="w-64">
                        <dropdown :options="dropdownOptions" :default="4"></dropdown>
                    </div>
                </div>
                <div slot="template">
                    <div v-highlight>
                        <pre class="language-html"><code>{{ htmlEncode(code[2]) }}</code></pre>
                    </div>
                </div>
                <div slot="script">
                    <div v-highlight>
                        <pre class="language-javascript"><code>{{ htmlEncode(code[1]) }}</code></pre>
                    </div>
                </div>
            </card>

            <!-- Customize placeholder card -->
            <card title="Custom Placeholder">
                <div slot="preview">
                    <note>
                        To customize the placeholder text, use the <code class="inline-code">:placeholder</code> prop.
                    </note>
                    <div class="w-64">
                        <dropdown :options="dropdownOptions" :placeholder="'Pick a course'"></dropdown>
                    </div>
                </div>
                <div slot="template">
                    <div v-highlight>
                        <pre class="language-html"><code>{{ htmlEncode(code[3]) }}</code></pre>
                    </div>
                </div>
                <div slot="script">
                    <div v-highlight>
                        <pre class="language-javascript"><code>{{ htmlEncode(code[1]) }}</code></pre>
                    </div>
                </div>
            </card>

            <!-- Emit to parent card -->
            <card title="Emit value">
                <div slot="preview">
                    <note>
                        To send the selected value back to the parent component, the component emits a <code class="inline-code">@selected</code>
                        event with the value as payload.
                    </note>
                    <div class="w-64">
                        <dropdown :options="dropdownOptions" @selected="log"></dropdown>
                    </div>
                </div>
                <div slot="template">
                    <div v-highlight>
                        <pre class="language-html"><code>{{ htmlEncode(code[4]) }}</code></pre>
                    </div>
                </div>
                <div slot="script">
                    <div v-highlight>
                        <pre class="language-javascript"><code>{{ htmlEncode(code[5]) }}</code></pre>
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
    import Dropdown from "@/components/rainbow/Dropdown";

    export default {
        components: { Card, Note, Dropdown },
        mixins: [ HTMLEncoder],
        methods: {
            log(payload) {
                window.console.log(payload);
            }
        },
        data: () => {
            return {
                dropdownOptions: [
                    { key: 1, value: 'Vue' },
                    { key: 2, value: 'Tailwind'},
                    { key: 3, value: 'Laravel'},
                    { key: 4, value: 'Unit Testing'},
                    { key: 5, value: 'Events & Queues'},
                ],
                code: [
                    // template for first card
                    '<dropdown :options="dropdownOptions"></dropdown>\n',

                    // script for first, second and third card
                    'import Dropdown from "@/components/rainbow/Dropdown";\n' +
                    '\n' +
                    'export default {\n' +
                    '    components: {\n' +
                    '        Dropdown\n' +
                    '    }   ,\n' +
                    '    data: () => {\n' +
                    '        return {\n' +
                    '            dropdownOptions: [\n' +
                    '                { key: 1, value: "Vue"},\n' +
                    '                { key: 2, value: "Tailwind"},\n' +
                    '                { key: 3, value: "Laravel"},\n' +
                    '                { key: 4, value: "Unit Testing"},\n' +
                    '                { key: 5, value: "Events & Queues"},\n' +
                    '            ]\n' +
                    '        }\n' +
                    '    },\n' +
                    '}\n',

                    // template for second card
                    '<dropdown :options="dropdownOptions" :default="4"></dropdown>\n',

                    // template for third card
                    '<dropdown :options="dropdownOptions" :placehoder="\'Pick a course\'"></dropdown>\n',

                    // template for fourth card
                    '<dropdown :options="dropdownOptions" @selected="log"></dropdown>\n',

                    // script for fourth card
                    'import Dropdown from "@/components/rainbow/Dropdown";\n' +
                    '\n' +
                    'export default {\n' +
                    '    components: {\n' +
                    '        Dropdown\n' +
                    '    }   ,\n' +
                    '    data: () => {\n' +
                    '        return {\n' +
                    '            dropdownOptions: [\n' +
                    '                { key: 1, value: "Vue"},\n' +
                    '                { key: 2, value: "Tailwind"},\n' +
                    '                { key: 3, value: "Laravel"},\n' +
                    '                { key: 4, value: "Unit Testing"},\n' +
                    '                { key: 5, value: "Events & Queues"},\n' +
                    '            ]\n' +
                    '        }\n' +
                    '    },\n' +
                    '    methods: {\n' +
                    '        log(value) {\n' +
                    '            window.console.log(value);\n' +
                    '        }\n' +
                    '    }\n' +
                    '}\n',
                ]
            }
        }
    }
</script>
<style scoped>
    .inline-code {
        @apply bg-red-300 p-1 text-white rounded text-xs;
    }
</style>