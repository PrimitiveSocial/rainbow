<template>
    <div>
        <div class="max-w-7xl mx-auto px-4 pb-4 sm:px-6 lg:px-8">
            <h1 class="text-2xl font-semibold text-gray-900 pb-4 border-b">Toggle Buttons</h1>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <!-- Basic setup card -->
            <card title="Basic Setup">
                <div slot="preview">
                    <div class="w-64 ml-4 my-10">
                        <toggle-buttons :options="toggleOptions"></toggle-buttons>
                    </div>
                </div>
                <div slot="template">
                    <div class="my-10 ml-4" v-highlight>
                        <pre class="language-html"><code>{{ htmlEncode(code[0]) }}</code></pre>
                    </div>
                </div>
                <div slot="script">
                    <div class="my-10 ml-4" v-highlight>
                        <pre class="language-javascript"><code>{{ htmlEncode(code[1]) }}</code></pre>
                    </div>
                </div>
            </card>

            <!-- With default option card -->
            <card title="Set default selected option">
                <div slot="preview">
                    <p class="m-4 text-sm leading-5 text-gray-500">
                        To set a default selected value, use the <code class="inline-code">:default</code> prop.
                    </p>
                    <div class="w-64 ml-4 my-10">
                        <toggle-buttons :options="toggleOptions" :default="3"></toggle-buttons>
                    </div>
                </div>
                <div slot="template">
                    <div class="my-10 ml-4" v-highlight>
                        <pre class="language-html"><code>{{ htmlEncode(code[2]) }}</code></pre>
                    </div>
                </div>
                <div slot="script">
                    <div class="my-10 ml-4" v-highlight>
                        <pre class="language-javascript"><code>{{ htmlEncode(code[1]) }}</code></pre>
                    </div>
                </div>
            </card>

            <!-- Emit to parent card -->
            <card title="Emit value to parent component">
                <div slot="preview">
                    <p class="m-4 text-sm leading-5 text-gray-500">
                        To send the selected value back to the parent component, the component emits a <code class="inline-code">@selected</code>
                        event with the value as payload.
                    </p>
                    <div class="w-64 ml-4 my-10">
                        <toggle-buttons :options="toggleOptions" @selected="log"></toggle-buttons>
                    </div>
                </div>
                <div slot="template">
                    <div class="my-10 ml-4" v-highlight>
                        <pre class="language-html"><code>{{ htmlEncode(code[3]) }}</code></pre>
                    </div>
                </div>
                <div slot="script">
                    <div class="my-10 ml-4" v-highlight>
                        <pre class="language-javascript"><code>{{ htmlEncode(code[4]) }}</code></pre>
                    </div>
                </div>
            </card>
        </div>
    </div>
</template>

<script>
    import Card from "./Card";
    import ToggleButtons from "@/components/rainbow/ToggleButtons";

    import "vue-code-highlight/themes/prism-tomorrow.css";
    import "vue-code-highlight/themes/window.css";
    import HTMLEncoder from "./HTMLEncoder";

    export default {
        components: { ToggleButtons, Card },
        mixins: [ HTMLEncoder],
        methods: {
            log(payload) {
                window.console.log('The value selected is: ' + payload);
            }
        },
        data: () => {
            return {
                toggleOptions: [
                    { value: 1, label: 'Vue'},
                    { value: 2, label: 'React'},
                    { value: 3, label: 'Angular'},
                ],
                code: [
                    // template for first card
                    '<toggle-buttons :options="toggleOptions"></toggle-buttons>\n',

                    // script for first and second card
                    'import ToggleButtons from "@/components/rainbow/ToggleButtons";\n' +
                    '\n' +
                    'export default {\n' +
                    '    components: {\n' +
                    '        ToggleButtons\n' +
                    '    }   ,\n' +
                    '    data: () => {\n' +
                    '        return {\n' +
                    '            toggleOptions: [\n' +
                    '                { value: 1, label: "Vue"},\n' +
                    '                { value: 2, label: "React"},\n' +
                    '                { value: 3, label: "Angular"},\n' +
                    '            ]\n' +
                    '        }\n' +
                    '    },\n' +
                    '}\n',

                    // template for second card
                    '<toggle-buttons :options="toggleOptions" :default="3"></toggle-buttons>\n',

                    // template for third card
                    '<toggle-buttons :options="toggleOptions" @selected="log"></toggle-buttons>\n',

                    // script for third card
                    'import ToggleButtons from "@/components/rainbow/ToggleButtons";\n' +
                    '\n' +
                    'export default {\n' +
                    '    components: {\n' +
                    '        ToggleButtons\n' +
                    '    }   ,\n' +
                    '    data: () => {\n' +
                    '        return {\n' +
                    '            toggleOptions: [\n' +
                    '                { value: 1, label: "Vue"},\n' +
                    '                { value: 2, label: "React"},\n' +
                    '                { value: 3, label: "Angular"},\n' +
                    '            ]\n' +
                    '        }\n' +
                    '    },\n' +
                    '    methods: {\n' +
                    '        log(value) {\n' +
                    '            window.console.log(value);\n' +
                    '        }\n' +
                    '    }\n' +
                    '}',
                ]
            }
        },
    }
</script>

<style scoped>
    pre {
        margin: 0;
    }
    code {
        font-size: 12px;
    }
    .inline-code {
        @apply bg-red-300 p-1 text-white rounded;
    }
</style>