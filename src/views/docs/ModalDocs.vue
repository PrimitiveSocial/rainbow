<template>
    <div>
        <div class="max-w-7xl mx-auto px-4 pb-4 sm:px-6 lg:px-8 flex justify-between border-b mb-8">
            <h1 class="text-2xl font-semibold text-gray-900">Modal</h1>
            <features :options="features"></features>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <!-- Basic setup card -->
            <card title="Setup">
                <div slot="preview">
                    <div class="w-64">
                        <button
                            class="px-4 py-2 bg-indigo-300 text-white rounded outline-none text-xs"
                            @click="$modal.open('courses')"
                        >
                            Open Modal
                        </button>
                        <modal name="courses">
                            <div slot="default">
                                <!-- Content starts here -->
                                <div class="p-5 text-xl text-black capitalize font-bold pb-4 border-b">My modal</div>
                                <!-- Content starts here -->
                            </div>
                        </modal>
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
            <card title="Customization" description="Change size, remove close icon and background">
                <div slot="preview">
                    <div class="w-64">
                        <button
                            class="px-4 py-2 bg-indigo-300 text-white rounded outline-none text-xs"
                            @click="$modal.open('courses-custom')"
                        >
                            Open Modal
                        </button>
                        <modal
                            name="courses-custom"
                            size="large"
                            :with-close-icon="false"
                            :transparent-bg="true"
                        >
                            <div slot="default">
                                <!-- Content starts here -->
                                <div class="p-5 text-xl text-black capitalize font-bold pb-4 border-b">My custom modal</div>
                                <button @click="$modal.close('courses-custom' )" class="px-4 py-2 bg-red-300 rounded m-3">Close</button>
                                <!-- Content starts here -->
                            </div>
                        </modal>
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

            <!-- Passing parameters -->
            <card title="Passing parameters"  description="Access the params using the slot-scope provided by the component">
                <div slot="preview">
                    <div class="w-64">
                        <button
                            class="px-4 py-2 bg-indigo-300 text-white rounded outline-none text-xs"
                            @click="$modal.open('params-modal', { js: 'Vue', css: 'Tailwind'})"
                        >
                            Open Modal
                        </button>
                        <modal name="params-modal">
                            <div slot-scope="{ params }">
                                <p>Javascript Framework: {{ params.js }}</p>
                                <p>CSS Framework: {{ params.css }}</p>
                            </div>
                        </modal>
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
        </div>
    </div>
</template>

<script>
    import Card from "./Card";
    import Features from "./Features";
    import HTMLEncoder from "./HTMLEncoder";
    import Modal from "@/components/rainbow/Modal";

    export default {
        components: { Modal, Features, Card },
        mixins: [ HTMLEncoder],
        data: () => {
            return {
                features: [
                    'Slot',
                    'slot-scope',
                    'Size',
                    'Close',
                    'Params'
                ],
                code: [
                    // template for first card
                    '<button @click="$modal.open(\'my-modal\')">Open Modal</button>\n\n' +
                    '<modal name="my-modal">\n' +
                    '    <div slot="default">\n' +
                    '        <!-- Content starts here -->\n' +
                    '        <div class="p-5 text-xl text-black capitalize font-bold pb-4 border-b">Courses modal</div>\n' +
                    '        <!-- Content ends here -->\n' +
                    '    </div>\n' +
                    '</modal>',

                    // script for all card
                    'import Modal from "@/components/rainbow/Modal";\n' +
                    '\n' +
                    'export default {\n' +
                    '    components: {\n' +
                    '        Modal\n' +
                    '    },\n' +
                    '}\n',

                    // template for second card
                    '<modal \n' +
                    '    name="my-custom-modal" \n' +
                    '    size="large" \n' +
                    '    :with-close-icon="false" \n' +
                    '    :transparent-bg="true"\n' +
                    '>\n\n' +
                    '<modal name="my-custom-modal" size="large">\n' +
                    '    <div slot="default">\n' +
                    '        <!-- Content -->\n' +
                    '        <button @click="$modal.close(\'courses-custom\' )">Close</button>\n'+
                    '    </div>\n' +
                    '</modal>',

                    // template for third card
                    ' <button\n' +
                    '     @click="$modal.open(\'my-modal\', { js: \'Vue\', css: \'Tailwind\'})"\n' +
                    '>\n' +
                    'Open Modal\n' +
                    '</button>\n\n' +
                    '<modal name="my-modal">\n' +
                    '    <div slot-scope="{ params }">\n' +
                    '        <p>Javascript Framework: {{ params.js }}</p>\n' +
                    '        <p>CSS Framework: {{ params.css }}</p>\n' +
                    '    </div>\n' +
                    '</modal>'
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