<template>
    <div>
        <div class="max-w-7xl mx-auto px-4 pb-4 sm:px-6 lg:px-8 flex justify-between border-b mb-8">
            <h1 class="text-2xl font-semibold text-gray-900">Tabs</h1>
            <features :options="features"></features>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <!-- Basic setup card -->
            <card title="Setup">
                <div slot="preview">
                    <div class="p-8 bg-white w-128">
                        <tabs>
                            <tab title="laravel">
                                <p>Laravel is a web application framework with elegant syntax.</p>
                            </tab>
                            <tab title="vue">
                                <p>The Progressive JavaScript Framework.</p>
                            </tab>
                            <tab title="tailwind">
                                <p>A utility-first CSS framework for rapidly building custom designs.</p>
                            </tab>
                        </tabs>
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
    import Tabs from "@/components/rainbow/tabs/Tabs";
    import Tab from "@/components/rainbow/tabs/Tab";

    export default {
        components: { Tabs, Tab, Features, Card },
        mixins: [ HTMLEncoder],
        data: () => {
            return {
                features: [
                    'slots',
                ],
                isPublished: false,
                code: [
                    // template for first card
                    '<tabs>\n' +
                    '    <tab title="laravel">\n' +
                    '        <p>Laravel is a web application framework with elegant syntax.</p>\n' +
                    '    </tab>\n' +
                    '    <tab title="vue">\n' +
                    '        <p>The Progressive JavaScript Framework.</p>\n' +
                    '    </tab>\n' +
                    '    <tab title="tailwind">\n' +
                    '        <p>A utility-first CSS framework for rapidly building custom designs.</p>\n' +
                    '    </tab>\n' +
                    '</tabs>',

                    // script for first card
                    'import Tabs from "@/components/rainbow/tabs/Tabs";\n' +
                    'import Tab from "@/components/rainbow/tabs/Tab";\n' +
                    '\n' +
                    'export default {\n' +
                    '    components: {\n' +
                    '        Tabs, Tab\n' +
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