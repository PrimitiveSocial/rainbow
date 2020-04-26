<template>
    <div>
        <div class="max-w-7xl mx-auto px-4 pb-4 sm:px-6 lg:px-8 flex justify-between border-b mb-8">
            <h1 class="text-2xl font-semibold text-gray-900">Multi Select</h1>
            <features :options="features"></features>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <!-- Basic setup card -->
            <card title="Setup" description="To disable adding a new item, add the prop <pre class='inline bg-orange-200 text-xs'>:read-only='false'</pre>">
                <div slot="preview">
                    <div class="w-128">
                        <multi-select :options="options" v-model="stack"></multi-select>
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
    import MultiSelect from "@/components/rainbow/MultiSelect";

    export default {
        components: { MultiSelect, Features, Card },
        mixins: [ HTMLEncoder],
        data: () => {
            return {
                features: [
                    'reactive',
                    'read-only',
                    'searchable',
                    'keyboard navigation'
                ],
                stack: [],
                options: [
                    { key: 'Inertia', value: 'Inertia' },
                    { key: 'Jest', value: 'Jest' },
                    { key: 'Laravel', value: 'Laravel' },
                    { key: 'Livewire', value: 'Livewire' },
                    { key: 'React', value: 'React' },
                    { key: 'Tailwind', value: 'Tailwind' },
                    { key: 'Vue.js', value: 'Vue.js' },
                    { key: 'Vue router', value: 'Vue router' },
                    { key: 'Vuex', value: 'Vuex' },
                ],
                code: [
                    // template for first card
                    '<multi-select :options="options" v-model="stack"></multi-select>',

                    // script for first card
                    'import MultiSelect from "@/components/rainbow/MultiSelect";\n' +
                    '\n' +
                    'export default {\n' +
                    '    components: {\n' +
                    '        MultiSelect\n' +
                    '    },\n' +
                    '    data: () => {\n' +
                    '        return {\n' +
                    '            stack: [],\n' +
                    '            options: [\n' +
                    '                { key: \'Inertia\', value: \'Inertia\' },\n' +
                    '                { key: \'Jest\', value: \'Jest\' },\n' +
                    '                { key: \'Laravel\', value: \'Laravel\' },\n' +
                    '                { key: \'Livewire\', value: \'Livewire\' },\n' +
                    '                { key: \'React\', value: \'React\' },\n' +
                    '                { key: \'Tailwind\', value: \'Tailwind\' },\n' +
                    '                { key: \'Vue.js\', value: \'Vue.js\' },\n' +
                    '                { key: \'Vue router\', value: \'Vue router\' },\n' +
                    '                { key: \'Vuex\', value: \'Vuex\' },\n' +
                    '            ],\n' +
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
    .w-128 {
        width: 32rem;
    }
</style>