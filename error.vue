<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold"> {{ error.statusCode }}</p>
        <p class="mt-7 text-6xl">Oooops.</p>
        <p class="mt-7">{{ error.message }}</p>
        <button class="bg-[#12b488] text-white px-3 py-2 rounded-md text-sm text-white mt-7" @click="handleClearError">Go Home...</button>
    </div>
</template>

<script setup>
const handleClearError = () => clearError({ 
    redirect: '/' ,
    fatal: true
})
const { error } = defineProps(['error'])

</script>

