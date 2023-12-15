<template>
    <router-link :to="previousPageUrl" class="btn btn-outline-primary mx-2 bottom-btn" v-if="page > 1">Previous</router-link>
    <router-link :to="nextPageUrl" class="btn btn-outline-primary mx-2 bottom-btn" v-if="page < totalpages">Next</router-link>
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
        },
        previousPageUrl() {
            let url = `?page=${this.previousPage}&orderby=${this.orderby}`;
            if (this.pagetype == 'brand')  url += `&brand=${this.brand}`;
            if (this.pagetype == 'search') url += `&search=${this.search}`;
            return url;
        }, 
        nextPageUrl() {
            let url = `?page=${this.nextPage}&orderby=${this.orderby}`;
            if (this.pagetype == 'brand')  url += `&brand=${this.brand}`;
            if (this.pagetype == 'search') url += `&search=${this.search}`;
            return url;
        }
    }
}
</script>

<style></style>