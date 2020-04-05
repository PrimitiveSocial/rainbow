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
                        <p class="text-black text-xs mb-2 font-bold" @click="$modal.open('courses')">Open Modal:</p>
                        <modal name="courses" size="small" :with-close-icon="false">
                            <div>Rainbow Modal</div>
                            <button @click="$modal.close('courses')">Close</button>
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
                ],
                code: [
                    // template for first card
                    '<p class="text-black text-xs mb-2 font-bold">Set as homepage:</p>\n' +
                    '<swicther v-model="isPublished"></swicther>\n',

                    // script for first card
                    'import Switcher from "@/components/rainbow/Switcher";\n' +
                    '\n' +
                    'export default {\n' +
                    '    components: {\n' +
                    '        Switcher\n' +
                    '    },\n' +
                    '    data: () => {\n' +
                    '        return {\n' +
                    '            isPublished: false,\n' +
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