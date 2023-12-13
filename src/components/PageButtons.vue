<template>
    <router-link :to="`?page=${supplements.previous_page_number}&brand=${brandl}`"
        class="btn btn-outline-primary mx-2 bottom-btn" v-if="page > 1 && pagetype == 'brand'">Previous</router-link>
    <router-link :to="`?page=${supplements.previous_page_number}&search=${search}`"
        class="btn btn-outline-primary mx-2 bottom-btn" v-else-if="page > 1 && pagetype == 'search'">Previous</router-link>
    <router-link :to="`?page=${supplements.previous_page_number}`" class="btn btn-outline-primary mx-2 bottom-btn"
        v-else-if="page > 1 && pagetype == 'favorite'">Previous</router-link>
    <router-link :to="`?page=${previousPage}`" class="btn btn-outline-primary mx-2 bottom-btn"
        v-else-if="page > 1 && pagetype == 'index'">Previous</router-link>

    <router-link :to="`?page=${supplements.next_page_number}&brand=${brand}`"
        class="btn btn-outline-primary mx-2 bottom-btn" v-if="page < totalpages && pagetype == 'brand'">Next</router-link>
    <router-link :to="`?page=${supplements.next_page_number}&search=${search}`"
        class="btn btn-outline-primary mx-2 bottom-btn"
        v-else-if="page < totalpages && pagetype == 'search'">Next</router-link>
    <router-link :to="`?page=${supplements.next_page_number}`" class="btn btn-outline-primary mx-2 bottom-btn"
        v-else-if="page < totalpages && pagetype == 'favorite'">Next</router-link>
    <router-link :to="`?page=${nextPage}`" class="btn btn-outline-primary mx-2 bottom-btn" v-else>Next</router-link>
</template>

<script>
export default {
    name: 'PageButtons',

    props: {
        page: {
            type: Number,
            required: true
        },
        totalpages: {
            type: Number,
            required: true
        },
        pagetype: {
            type: String,
            required: false,
            default: 'index'
        },
    },
    computed: {
        brand() {
            return this.$route.query.brand;
        },
        search() {
            return this.$route.query.search;
        },
        nextPage() {
            return Number(this.page) + 1;
        },
        previousPage() {
            return Number(this.page) - 1;
        }
    },

}
</script>

<style></style>