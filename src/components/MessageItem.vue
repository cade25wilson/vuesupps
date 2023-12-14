<template>
        <p class="mb-0">{{ totalItems }} total results</p>
        <h2 class="mb-2" v-if="brand">{{ brand }}</h2>
        <h2 class="mb-2" v-if="this.$route.query.search">Search Results for {{ this.$route.query.search }}</h2>
</template>

<script>
export default {
    name: 'MessageItem',
    props: {
        totalItems: {
            type: Number,
            required: true
        },
        brand: {
            type: String,
            required: false
        },
    },
}
</script>