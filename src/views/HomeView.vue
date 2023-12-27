<script>
import SearchItem from '@/components/SearchItem.vue';
import SelectItem from '@/components/SelectItem.vue';
import MessageItem from '@/components/MessageItem.vue';
import PageButtons from '@/components/PageButtons.vue';
import DropDown from '@/components/DropDown.vue';
import SupplementItem from '@/components/SupplementItem.vue';
import LoadingItem from '@/components/LoadingItem.vue';
import axios from 'axios';
export default {
  components: {
    SearchItem, 
    SelectItem,
    MessageItem,
    PageButtons,
    DropDown,
    SupplementItem,
    LoadingItem,
  },
  data() {
    return {
      data: null,
      orderby: this.$route.query.orderby || '-discount',
    };
  },
  mounted() {
    this.getData();
    console.log(this.pagetype)
  },
  watch: {
    '$route': 'getData',
    '$route.query.orderby': function(newOrderby) {
      this.orderby = newOrderby || '';
    },
  },
  computed : {
    pagetype() {
      return this.$route.path.split('/')[1] || 'supplements';
    },
  },
  methods: {
    getData() {
      axios.get(`http://laravel.discountsupplinks.com/api/${this.pagetype}`, {
        params: {
          [this.pagetype]: this.$route.query[this.pagetype] || '',
          page: this.$route.query.page || 1,
          orderby: this.$route.query.orderby || '-discount',
        },
      })
      .then((response) => {
        this.data = response.data;
        console.log(response.data)
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.log(error);
      });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    handleUpdateOrderby(orderby) {
      this.$router.push({ 
        query: { 
          ...this.$route.query, 
          orderby: orderby 
        } 
      });
    },
    addFavorite(id) {
      if(!this.data.favorites.includes(id)) {
        this.data.favorites.push(id);
      }
    },
    removeFavorite(id) {
      const index = this.data.favorites.indexOf(id);
      if(index > -1) {
        this.data.favorites.splice(index, 1);
      }
    },
    logout(orderby){
      axios.post('http://laravel.discountsupplinks.com/api/logout')
      .then(() => {
        // remove laravel_session cookie
        document.cookie = 'laravel_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        // redirect to home page
        this.$router.push({ 
          query: { 
            ...this.$route.query, 
            orderby: orderby 
          } 
        });
      })
    }
  },
}
</script>

<template>
  <div class="container p-4" v-if="data">
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
          <drop-down v-on:logout="logout" />
        </div>
      </div>
    </div>
    <div class="row d-flex align-items-stretch pb-5">
      <supplement-item :supplements="data.supplements" :favorites="data.favorites" v-on:add-favorite="addFavorite" v-on:remove-favorite="removeFavorite" />
    </div>
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-center">
          <page-buttons :page="data.page" :totalpages="data.totalPages" :orderby="orderby" :pagetype="this.pagetype" />
        </div>
      </div>
    </div>
  </div>
  <loading-item v-else />
</template>

<style>
.container {
  background-color: white;
}
</style>