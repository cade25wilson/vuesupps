<template>
    <!-- {% if totalproducts %} -->
        <p class="mb-0"> total results {{ totalItems }}</p>
    <!-- {% endif %}
    {% if request.GET.brand %}
        <h2 class="mb-2">{{ brand.brand_name }}</h2>
    {% endif %}
    {% if request.GET.search %}
        <h2 class="mb-2">Search Results for "{{ request.GET.search }}"</h2>
    {% endif %} -->
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
        search: {
            type: String,
            required: false
        }
    },
}
</script>