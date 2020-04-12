<template>
    <div class="w-full">
        <div class="flex justify-between px-10 pt-20 bg-purple-500">
            <div class="text-4xl lg:text-5xl leading-tight font-light w-3/5">
                <p class="text-gray-200">SPA starter-kit with</p>
                <p class="font-bold text-white">Vue & Tailwind components</p>
            </div>
            <div class="w-2/5 mt-20">
                <img src="@/assets/script.png"  />
            </div>
        </div>

        <div class="py-10 h-full ">
            <h3 class="text-center text-3xl text-purple-500 font-thin uppercase font-medium">Stack</h3>
            <p class="text-gray-600 text-lg w-1/2 text-center mb-10 mx-auto ">
                Zero configuration. Everything is already done for you.
            </p>
            <div class="flex text-center">
                <div class="w-1/3">
                    <p class="text-lg leading-6 font-medium text-gray-900 uppercase">Vue-cli</p>
                    <p class="mt-2 text-base leading-6 text-gray-400">Vue-Standard Tooling for Vue.js</p>
                </div>
                <div class="w-1/3">
                    <p class="text-lg leading-6 font-medium text-gray-900 uppercase">Vue router</p>
                    <p class="mt-2 text-base leading-6 text-gray-400">Official router for Vue.js</p>
                </div>
                <div class="w-1/3">
                    <p class="text-lg leading-6 font-medium text-gray-900 uppercase">Vuex</p>
                    <p class="mt-2 text-base leading-6 text-gray-400">State management for Vue.js</p>
                </div>
            </div>
            <div class="flex text-center mt-10">
                <div class="w-1/3">
                    <p class="text-lg leading-6 font-medium text-gray-900 uppercase">Tailwind</p>
                    <p class="mt-2 text-base leading-6 text-gray-400">Utility-first CSS framework</p>
                </div>
                <div class="w-1/3">
                    <p class="text-lg leading-6 font-medium text-gray-900 uppercase">Jest</p>
                    <p class="mt-2 text-base leading-6 text-gray-400">JavaScript testing framework</p>
                </div>
                <div class="w-1/3">
                    <p class="text-lg leading-6 font-medium text-gray-900 uppercase">primitive</p>
                    <p class="mt-2 text-base leading-6 text-gray-400">
                        Handy packages from
                        <a href="https://www.npmjs.com/search?q=primitivesocial" target="_blank" class="text-blue-500">@primitivesocial</a>
                    </p>
                </div>
            </div>
        </div>

        <div class="bg-gray-200 py-10">
            <h3 class="text-center mb-10 text-3xl text-purple-500 font-thin uppercase font-medium">Installation</h3>
            <div class="mx-auto w-1/2">
                <div v-highlight>
                    <pre class="lang-bash w-full text-xs"><code>{{ code }}</code></pre>
                </div>
            </div>
        </div>
        <div class="bg-white py-10">
            <h3 class="text-center text-3xl text-purple-500 font-thin uppercase font-medium">Rainbow</h3>
            <p class="text-gray-600 text-lg w-1/2 text-center mx-auto">
                Handcrafted Vue/Tailwind components to help you create amazing spas.
                <router-link :to="{name: 'docs'}">
                    <button class="bg-green-400 rounded-md text-white px-12 py-6 mt-10 text-lg focus:outline-none">
                        Browse components
                        <svg class="h-4 w-4 inline" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g class="fill-current">
                                    <polygon id="Combined-Shape-Copy" points="16.1715729 9 10.1005051 2.92893219 11.5147186 1.51471863 20 10 19.2928932 10.7071068 11.5147186 18.4852814 10.1005051 17.0710678 16.1715729 11 -5.68434189e-14 11 -5.68434189e-14 9"></polygon>
                                </g>
                            </g>
                        </svg>
                    </button>
                </router-link>
            </p>
        </div>
        <div class="bg-orange-100 py-10">
            <h3 class="text-center text-3xl text-purple-500 font-thin uppercase font-medium">Primitive packages</h3>
            <p class="text-gray-600 text-lg w-1/2 text-center mx-auto">
                NPM packages from primitive social to speed up your development.
            </p>
            <div class="bg-white shadow overflow-hidden sm:rounded-md mt-10 w-1/2 mx-auto">
                <ul>
                    <li v-for="(p,index) in primitivePackages" :key="index" class="border-t border-gray-200">
                        <div class="flex justify-between items-center">
                            <div class="p-4">
                                <p class="font-medium">{{ p.name }}</p>
                                <p class="text-gray-600 lowercase">{{ p.description }}</p>
                            </div>
                            <div class="p-4 text-blue-700 font-medium">
                                <a :href="p.link" target="_blank">
                                    Repository
                                    <svg class="h-5 w-5 inline" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import "vue-code-highlight/themes/prism-tomorrow.css";
    import "vue-code-highlight/themes/window.css";

    export default {
        data: () => {
            return {
                code: 'git clone git@github.com:PrimitiveSocial/rainbow.git\nrm -rf .git\nnpm install\nnpm run serve',
                primitivePackages: [
                    { name: '@primitivesocial/ps-validation', link: 'https://github.com/PrimitiveSocial/ps-validation', description: 'Out of the box Vue data validation rules.'},
                    { name: '@primitivesocial/ps-kernel', link: 'https://github.com/PrimitiveSocial/ps-kernel', description: 'middleware system for Vue-router and Vuex'},
                ]
            }
        }
    }
</script>