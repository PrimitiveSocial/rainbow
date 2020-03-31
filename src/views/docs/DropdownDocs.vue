<template>
    <div>
        <div class="max-w-7xl mx-auto px-4 pb-4 sm:px-6 lg:px-8 flex justify-between border-b mb-8">
            <h1 class="text-2xl font-semibold text-gray-900">Dropdown</h1>
            <features :options="features"></features>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <!-- Basic setup card -->
            <card title="Basic Setup">
                <div slot="preview">
                    <div class="w-64">
                        <dropdown :options="topics" v-model="topic"></dropdown>
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

            <!-- Customization Card -->
            <card title="Customization" description="Change placeholder text, disable search and keyboard navigation">
                <div slot="preview">
                    <div class="w-64">
                        <dropdown :options="topics" v-model="topic" :searchable="false" :placeholder="'Browse topics'" :with-keyboard-navigation="false"></dropdown>
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

        </div>
    </div>
</template>

<script>
    import Card from "./Card";
    import Features from "./Features";
    import HTMLEncoder from "./HTMLEncoder";
    import Dropdown from "@/components/rainbow/Dropdown";

    export default {
        components: { Card, Features, Dropdown },
        mixins: [ HTMLEncoder],
        data: () => {
            return {
                features: [
                    'reactive',
                    'placeholder',
                    'searchable',
                    'keyboard navigation',
                    'outside-click'
                ],
                topics: [
                    { key: 1, value: 'Vue' },
                    { key: 2, value: 'Tailwind'},
                    { key: 3, value: 'Laravel'},
                    { key: 4, value: 'Unit Testing'},
                    { key: 5, value: 'Events & Queues'},
                ],
                topic: null,
                code: [
                    // template for first card
                    '<dropdown :options="topics" v-model="topic"></dropdown>\n',

                    // script for first, second and third card
                    'import Dropdown from "@/components/rainbow/Dropdown";\n' +
                    '\n' +
                    'export default {\n' +
                    '    components: {\n' +
                    '        Dropdown\n' +
                    '    }   ,\n' +
                    '    data: () => {\n' +
                    '        return {\n' +
                    '            topics: [\n' +
                    '                { key: 1, value: "Vue"},\n' +
                    '                { key: 2, value: "Tailwind"},\n' +
                    '                { key: 3, value: "Laravel"},\n' +
                    '                { key: 4, value: "Unit Testing"},\n' +
                    '                { key: 5, value: "Events & Queues"},\n' +
                    '            ]\n' +
                    '        },\n' +
                    '        topic: null,\n' +
                    '    },\n' +
                    '}\n',

                    // template for second card
                    '<dropdown\n' +
                    '    :options="topics"\n' +
                    '    v-model="topic"\n' +
                    '    :searchable="false"\n' +
                    '    :with-keyboard-navigation="false"\n' +
                    '    :placeholder="\'Browse Topics\'"\n' +
                    '></dropdown>\n',
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