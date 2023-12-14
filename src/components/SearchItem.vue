<template>
    <form class="w-100" @submit.prevent="submitForm">
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search" name="search" v-model="search">
            <button class="btn btn-primary" type="submit" id="button-addon2">Search</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'SearchItem',
    data() {
        return {
            search: this.$route.query.search || ''
        }
    },
    methods: {
        submitForm() {
            this.$router.push({ path: '/search', query: { search: this.search } });
        },
    },
}
</script>