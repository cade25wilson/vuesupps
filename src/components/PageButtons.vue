<template>
    <router-link :to="`?page=${previousPage}&brand=${brand}&orderby=${orderby}`"
        class="btn btn-outline-primary mx-2 bottom-btn" v-if="page > 1 && pagetype == 'brand'">Previous</router-link>
    <router-link :to="`?page=${previousPage}&search=${search}&orderby=${orderby}`"
        class="btn btn-outline-primary mx-2 bottom-btn" v-else-if="page > 1 && pagetype == 'search'">Previous</router-link>
    <router-link :to="`?page=${previousPage}&orderby=${orderby}`" class="btn btn-outline-primary mx-2 bottom-btn"
        v-else-if="page > 1 && pagetype == 'favorite'">Previous</router-link>
    <router-link :to="`?page=${previousPage}&orderby=${orderby}`" class="btn btn-outline-primary mx-2 bottom-btn"
        v-else-if="page > 1 && pagetype == 'index'">Previous</router-link>

    <router-link :to="`?page=${nextPage}&brand=${brand}&orderby=${orderby}`"
        class="btn btn-outline-primary mx-2 bottom-btn" v-if="page < totalpages && pagetype == 'brand'">Next</router-link>
    <router-link :to="`?page=${nextPage}&search=${search}&orderby=${orderby}`"
        class="btn btn-outline-primary mx-2 bottom-btn"
        v-else-if="page < totalpages && pagetype == 'search'">Next</router-link>
    <router-link :to="`?page=${nextPage}&orderby=${orderby}`" class="btn btn-outline-primary mx-2 bottom-btn"
        v-else-if="page < totalpages && pagetype == 'favorite'">Next</router-link>
    <router-link :to="`?page=${nextPage}&orderby=${orderby}`" class="btn btn-outline-primary mx-2 bottom-btn" v-else-if="page < totalpages && pagetype == 'index'">Next</router-link>
</template>

<script>
export default {
    name: 'PageButtons',
    mounted() {
        console.log(this.pagetype);
    },

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
        orderby: {
            type: String,
            required: false,
            default: '-discount'
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