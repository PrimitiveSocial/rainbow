<template>
    <div class="w-full h-full flex items-center justify-center bg-gray-100">
        <div class="text-center">
            <img src="@/assets/logo.svg" class="inline w-64" />
            <div class="text-gray-600 text-xl font-bold">Project Rainbow</div>
            <div>SPA starter kit with couple of UI components built with Vue & Tailwind</div>
            <router-link :to="{name: 'docs'}" class="text-white font-medium mt-8 inline-block bg-orange-300 w-48 rounded-md p-4">
                Visit the docs
            </router-link>
        </div>
    </div>
</template>