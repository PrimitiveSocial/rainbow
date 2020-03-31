<template>
    <div>
        <div class="max-w-7xl mx-auto px-4 pb-4 sm:px-6 lg:px-8 flex justify-between border-b mb-8">
            <h1 class="text-2xl font-semibold text-gray-900">Dropmenu</h1>
            <features :options="features"></features>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <!-- Basic setup card -->
            <card title="Basic Setup">
                <div slot="preview">
                    <dropmenu>
                        <div slot="default">
                            <h3 class="text-indigo-600 font-medium mb-2">List of courses:</h3>
                            <ul>
                                <li class="my-1 font-thin text-xs">Laravel</li>
                                <li class="my-1 font-thin text-xs">Tailwind</li>
                                <li class="my-1 font-thin text-xs">Vue</li>
                            </ul>
                        </div>
                    </dropmenu>
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

            <!-- Set direction card -->
            <card title="Direction">
                <div slot="preview">

                    <dropmenu :direction="'left'">
                        <div slot="default">
                            <h3 class="text-indigo-600 font-medium mb-2">List of courses:</h3>
                            <ul>
                                <li class="my-1 font-thin text-xs">Laravel</li>
                                <li class="my-1 font-thin text-xs">Tailwind</li>
                                <li class="my-1 font-thin text-xs">Vue</li>
                            </ul>
                        </div>
                    </dropmenu>
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

            <!-- Set dropmenu width width -->
            <card title="Width" description="The width unit is 'rem'">
                <div slot="preview">
                    <dropmenu :min-width="25">
                        <div slot="default">
                            <h3 class="text-indigo-600 font-medium mb-2">List of courses:</h3>
                            <ul>
                                <li class="my-1 font-thin text-xs">Laravel</li>
                                <li class="my-1 font-thin text-xs">Tailwind</li>
                                <li class="my-1 font-thin text-xs">Vue</li>
                            </ul>
                        </div>
                    </dropmenu>
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

            <!-- Customize trigger button card -->
            <card title="Custom trigger" description="To customize the element that opens the dropmenu, add the 'trigger' slot">
                <div slot="preview">

                    <dropmenu>
                        <div slot="trigger">
                            <button class="text-white cursor-pointer bg-indigo-300 text-xs rounded-md p-2 focus:outline-none">
                                Open Menu
                            </button>
                        </div>
                        <div slot="default">
                            <h3 class="text-indigo-600 font-medium mb-2">List of courses:</h3>
                            <ul>
                                <li class="my-1 font-thin text-xs">Laravel</li>
                                <li class="my-1 font-thin text-xs">Tailwind</li>
                                <li class="my-1 font-thin text-xs">Vue</li>
                            </ul>
                        </div>
                    </dropmenu>
                </div>
                <div slot="template">
                    <div v-highlight>
                        <pre class="language-html"><code>{{ htmlEncode(code[4]) }}</code></pre>
                    </div>
                </div>
                <div slot="script">
                    <div v-highlight>
                        <pre class="language-javascript"><code>{{ htmlEncode(code[1]) }}</code></pre>
                    </div>
                </div>
            </card>

            <!-- Close on click outside card -->
            <card title="Disable close on outside click" description="To dynamically close the dropmenu, the component provides a slot-scope with close function ">
                <div slot="preview">
                    <dropmenu :close-on-outside-click="false">
                        <template slot-scope="{ close }">
                            <div slot="default">
                                <h3 class="text-indigo-600 font-medium mb-2">List of courses:</h3>
                                <ul>
                                    <li class="my-1 font-thin text-xs">Laravel</li>
                                    <li class="my-1 font-thin text-xs">Tailwind</li>
                                    <li class="my-1 font-thin text-xs">Vue</li>
                                </ul>
                                <button @click="close" class="bg-gray-500 text-white p-2 rounded-md text-xs">Close</button>
                            </div>
                        </template>
                    </dropmenu>
                </div>
                <div slot="template">
                    <div v-highlight>
                        <pre class="language-html"><code>{{ htmlEncode(code[5]) }}</code></pre>
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
    import Dropmenu from "@/components/rainbow/Dropmenu";

    export default {
        components: { Card , Features, Dropmenu},
        mixins: [ HTMLEncoder ],
        data: () => {
            return {
                features: [
                    'slots',
                    'slot-scope',
                    'width',
                    'direction',
                    'outside-click'
                ],
                code: [
                    // template for first card
                    '<dropmenu>\n' +
                    '    <div slot="default">\n' +
                    '        <!-- content of the menu goes here -->\n' +
                    '        <h3 class="text-indigo-600 font-medium mb-2">List of courses:</h3>\n' +
                    '        <ul>\n' +
                    '            <li class="my-1 font-thin text-xs">Laravel</li>\n' +
                    '            <li class="my-1 font-thin text-xs">Tailwind</li>\n' +
                    '            <li class="my-1 font-thin text-xs">Vue</li>\n' +
                    '        </ul>\n' +
                    '        <!-- content of the menu ends here -->\n' +
                    '    </div>\n' +
                    '</dropmenu>',

                    // script for first card
                    'import Dropmenu from "@/components/rainbow/Dropmenu";\n' +
                    '\n' +
                    'export default {\n' +
                    '    components: { Dropmenu },\n' +
                    '}',

                    // template second card
                    '<dropmenu :direction="\'left\'">\n' +
                    '    <div slot="default">\n' +
                    '        <!-- content of the menu goes here... -->\n' +
                    '    </div>\n' +
                    '</dropmenu>',

                    // template third card
                    '<dropmenu :min-width="25">\n' +
                    '    <div slot="default">\n' +
                    '        <!-- content of the menu goes here... -->\n' +
                    '    </div>\n' +
                    '</dropmenu>',

                    // template for fourth card
                    '<dropmenu>\n' +
                    '    <div slot="trigger">\n' +
                    '        <button class="text-white cursor-pointer bg-indigo-300 text-xs rounded-md p-2 focus:outline-none">\n' +
                    '            Sign up now\n' +
                    '        </button>\n' +
                    '    </div>\n' +
                    '    <div slot="default">\n' +
                    '        <!-- content of the menu goes here... -->\n' +
                    '    </div>\n' +
                    '</dropmenu>',

                    // template for fifth card
                    '<dropmenu :close-on-outside-click="false">\n' +
                    '    <template slot-scope="{ close }">\n' +
                    '        <div slot="default">\n' +
                    '            <h3 class="text-indigo-600 font-medium mb-2">List of courses:</h3>\n' +
                    '            <ul>\n' +
                    '                <li class="my-1 font-thin text-xs">Laravel</li>\n' +
                    '                <li class="my-1 font-thin text-xs">Tailwind</li>\n' +
                    '                <li class="my-1 font-thin text-xs">Vue</li>\n' +
                    '            </ul>\n' +
                    '            <button @click="close" class="bg-gray-500 text-white p-2 rounded-md text-xs">Close</button>\n' +
                    '        </div>\n' +
                    '    </template>\n' +
                    '</dropmenu>'
                ]
            }
        }
    }
</script>

<style scoped>
    .inline-code {
        @apply bg-red-300 p-1 text-xs text-white rounded;
    }
</style>