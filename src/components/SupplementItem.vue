<template>
    
    <div class="col-xl-3 col-lg-4 col-12 mt-3" style="height: auto;" v-for="supplement in supplements" :key="supplement.id">
        <div class="border rounded p-3" style="height: 100%;">
            <div class="mb-2 text-center">
                    <a :href="supplement.supplementlink ? supplement.supplementlink.url : supplement.url">
                        <img :src="supplement.image" :alt="supplement.name" class="img-thumbnail border-0"
                            style="max-height: 266px;" v-if="supplement.image">
                        <!-- <img src="{% static '/images/' %}loadingimg.jpg" alt="{{ supplement.name }}"
                            class="img-thumbnail border-0" style="max-height: 266px;" v-else> -->
                    </a>
                    <!-- {% if logged_in %}
                    {% if supplement.id in ids %}
                    <div class="col-1 offset-11 full{{supplement.id}}">
                        <i hx-post="/remove/?id={{supplement.id}}" hx-target=".full{{supplement.id}}" hx-push-url="false"
                            class="bi bi-heart-fill text-danger text-right"></i>
                    </div>
                    {% else %}
                    <div class="col-1 offset-11 empty{{supplement.id}}">
                        <i hx-post="/add/?id={{supplement.id}}" hx-target=".empty{{supplement.id}}" hx-push-url="false"
                            class="bi bi-heart text-secondary"></i>
                    </div>
                    {% endif %}
                    {% endif %} -->
            </div>
            <div class="product-name h-auto">
                <h5>{{ supplement.name }}</h5>
                <div class="row" style="height: auto;">
                    <div class="col-3">
                        <div class="product-price">
                            <p>
                                <span class="text-danger"><del>${{ supplement.original_price }}</del></span>
                                ${{ supplement.discount_price }}
                            </p>
                        </div>
                    </div>
                    <div class="col-9">
                        <div class="product-brand text-end">
                            <router-link :to="`/brand?brand=${supplement.brand_url}`" class="text-black">
                                <p class="mb-0">{{ supplement.brand_name }}</p>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <p v-if="supplement.discount != 0.00">${{ supplement.discount }}🔻</p>
                    </div>
                    <div class="col-9 text-end">
                        <!-- <a href="{{ supplement.advertiser.url }}" class="text-black">
                            <p>{{ supplement.advertiser.name }}</p>
                        </a> -->
                    </div>
                </div>
                <div class="row">
                    <!-- create a div to center it -->
                    <div class="text-center">
                        <!-- {% if supplement.supplementlink %}
                        <a href="{{ supplement.supplementlink.url }}" class="btn btn-primary w-75">View Product</a>
                        {% else %} -->
                        <a :href="supplement.url" class="btn btn-primary w-75">View Product</a>
                        <!-- {% endif %} -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SupplementItem',
    props: {
        supplements: {
            type: Array,
            required: true
        },
    }
}
</script>

<style></style>