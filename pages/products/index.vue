<template>
    <div>
        <h2>Products list here</h2>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products" :key="p.id">
                <ProductCard :product="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })
    useHead({
        title: 'Jojo shop'
    })
    //fetch the products
    const { data: products } = await useFetch('http://localhost:3000/products')
    
</script>
