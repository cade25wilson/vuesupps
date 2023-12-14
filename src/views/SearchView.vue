<script>
import SearchItem from '@/components/SearchItem.vue';
import SelectItem from '@/components/SelectItem.vue';
import MessageItem from '@/components/MessageItem.vue';
import PageButtons from '@/components/PageButtons.vue';
import Dropdown from '@/components/Dropdown.vue';
import SupplementItem from '@/components/SupplementItem.vue';
import axios from 'axios';
export default {
  components: {
    SearchItem, 
    SelectItem,
    MessageItem,
    PageButtons,
    Dropdown,
    SupplementItem
  },
  data() {
    return {
      data: null,
      orderby: this.$route.query.orderby || '-discount',
    };
  },
  mounted() {
    this.getData();
  },
  watch: {
    '$route': 'getData',
    '$route.query.orderby': function(newOrderby) {
      this.orderby = newOrderby || '';
    }
  },
  methods: {
    getData() {
      axios.get('http://laravel.discountsupplinks.com/api/search', {
        params: {
          search: this.$route.query.search || '',
          page: this.$route.query.page || 1,
          orderby: this.$route.query.orderby || '-discount',
        },
      })
      .then((response) => {
        this.data = response.data;
        window.scrollTo(0, 0);
        console.log(this.data);
      })
      .catch((error) => {
        console.log(error);
      });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    handleUpdateOrderby(orderby) {
      console.log(orderby);
      this.$router.push({ query: { orderby: orderby } });
    },
  },
}
</script>

<template>
  <div class="container p-4" style="background-color: white;" v-if="data">
    <div class="row">
      <div class="col-4 col-lg-6">
        <message-item :totalItems="data.totalItems" />
      </div>
      <div class="col-4 col-lg-2">
        <select-item v-on:update:orderby="handleUpdateOrderby"/>
      </div>
      <div class="col-3 col-lg-3 text-right">
        <search-item />
      </div>
      <div class="col-1 col-lg-1">
        <div class="dropdown">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Profile
          </a>
          <dropdown />
        </div>
      </div>
    </div>
    <div class="row d-flex align-items-stretch pb-5">
      <supplement-item :supplements="data.supplements" />
    </div>
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-center">
          <PageButtons :page="data.page" :totalpages="data.totalPages" :orderby="orderby" pagetype="search"/>
        </div>
      </div>
    </div>
  </div>
  <div class="container p-4" style="background-color: white;" v-else>
    <div class="row text-center">
      <h1>Loading...</h1>
    </div>
  </div>
</template>
