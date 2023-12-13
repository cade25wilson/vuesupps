<template>
    <form class="w-100" action="/search" method="GET" hx-get="/search?htmx" hx-target="main" hx-push-url="/search">
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search" name="search" value="">
            <button class="btn btn-primary" type="submit" id="button-addon2">Search</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'SearchItem',
    setup() {
        return {
            search: ''
        }
    }
}
</script>
