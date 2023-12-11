<script>
export default {
    name: 'Select',
    setup() {
        return {
            orderby: ''
        }
    }
}
</script>

<template>
     <!-- {% if request.GET.search %}
            <select name="orderby" class="form-select" aria-label="Sort Products By" hx-get="/search?{{pagetype}}={{brand}}" hx-target="main" hx-push-url="/search?{{pagetype}}={{brand}}">
            {% elif request.GET.brand %}
            <select name="orderby" class="form-select" aria-label="Sort Products By" hx-get="/brand?{{pagetype}}={{brand.brand_url}}" hx-target="main" hx-push-url="/brand?{{pagetype}}={{brand}}">
            {% elif pagetype == 'favorites' %}
            <select name="orderby" class="form-select" aria-label="Sort Products By" hx-get="/favorites" hx-target="main" hx-push-url="/favorites">
            {% else %} -->
            <select name="orderby" class="form-select" aria-label="Sort Products By" hx-get="/" hx-target="main" hx-push-url="true">
            <!-- {% endif %} -->
                <!-- <option value="-discount" {% if orderby == '-discount' %} selected {% endif %}>Highest Discount</option>
                <option value="discount_price" {% if orderby == 'discount_price' %} selected {% endif %}>Lowest Price</option>
                <option value="-discount_price" {% if orderby == '-discount_price' %} selected {% endif %}>Highest Price</option> -->
                <option value="-discount">Highest Discount</option>
                <option value="discount_price">Lowest Price</option>
                <option value="-discount_price">Highest Price</option>
            </select>
</template>