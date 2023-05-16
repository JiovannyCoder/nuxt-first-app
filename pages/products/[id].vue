<template>
    <div>
        <Head>
            <Title>Nuxt Jojo | {{ product.title }}</Title>
            <Meta name="description" :content="product.description"/>
        </Head>
        <ProductDetails :product="product" />
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const uri = 'http://localhost:3000/products/' + id

    // fetching the product
    const { data: product } = await useFetch(uri)

    if(!product.value) {
        throw createError({
            statusCode: 404, 
            statusMessage: 'Product not found'
        })
    }

    definePageMeta({
        layout: 'products'
    })

</script>
