<template>
    <div class="bg-blue-100 flex items-start p-4 mb-4">
        <div class="flex-shrink-0">
            <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        </div>
        <div class="ml-3">
            <p class="text-sm leading-6 font-thing text-blue-600">
                <slot></slot>
            </p>
        </div>
    </div>
</template>