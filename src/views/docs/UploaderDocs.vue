<template>
    <div>
        <div class="max-w-7xl mx-auto px-4 pb-4 sm:px-6 lg:px-8 flex justify-between border-b mb-8">
            <h1 class="text-2xl font-semibold text-gray-900">Uploader</h1>
            <features :options="features"></features>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <!-- Basic setup card -->
            <card title="Setup" description="If aspect-ratio is not set, it is defaulted to 1">
                <div slot="preview">
                    <div class="w-64">
                        <uploader @photos-uploaded="showPhotos" :aspect-ratio="16/9"></uploader>
                        <div class="mt-4 flex flex-wrap">
                            <img v-for="(photo,index) in photos" :key="index" :src="photo.base64" class="mr-2 h-24 w-24" />
                        </div>
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
    import Uploader from "@/components/rainbow/uploader/Uploader";

    export default {
        components: { Uploader, Features, Card },
        mixins: [ HTMLEncoder],
        methods: {
            showPhotos(payload) {
                this.photos = payload.photos;
            }
        },
        data: () => {
            return {
                features: [
                    'upload',
                    'multiple',
                    'crop',
                    'rotate'
                ],
                photos: [],
                code: [
                    // template for first card
                    '<uploader @photos-uploaded="showPhotos" :aspect-ratio="16/9"></uploader>\n\n' +
                    '<!-- preview uploaded photos -->\n' +
                    '<div class="mt-4 flex flex-wrap" v-if="photos">\n' +
                    '    <img v-for="(photo,index) in photos" :key="index" :src="photo.base64" class="mr-2 h-24 w-24" />\n' +
                    '</div>',

                    // script for first card
                    'import Uploader from "@/components/rainbow/uploader/Uploader";\n' +
                    '\n' +
                    'export default {\n' +
                    '    components: {\n' +
                    '        Uploader\n' +
                    '    },\n' +
                    '    data: () => {\n' +
                    '        return {\n' +
                    '            photos: [],\n' +
                    '        }\n' +
                    '    },\n' +
                    '    methods: {\n' +
                    '        showPhotos(payload) {\n' +
                    '            this.photos = payload.photos;\n' +
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