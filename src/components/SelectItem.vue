<script>
export default {
    name: 'SelectItem',
    data() {
        return {
            orderby: this.$route.query.orderby || '-discount',
        }
    },
    methods: {
        updateOrderby() {
            this.$emit('update:orderby', this.orderby);
        }
    }
}
</script>

<template>
    <select name="orderby" class="form-select" aria-label="Sort Products By" v-model="orderby" @change="updateOrderby">
        <option value="-discount" v-bind:selected="orderby === '-discount'">Highest Discount</option>
        <option value="discount_price" v-bind:selected="orderby === 'discount_price'">Lowest Price</option>
        <option value="-discount_price" v-bind:selected="orderby === '-discount_price'">Highest Price</option>
    </select>
</template>