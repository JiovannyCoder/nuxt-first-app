<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore in quis non nisi adipisci dicta eveniet. Eius laborum obcaecati facere!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore in quis non nisi adipisci dicta eveniet. Eius laborum obcaecati facere!</p>
    </div>
    <div>
        {{ data }}
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/ninja?name=Jojo')
</script>
    
<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
</style>