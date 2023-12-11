<script>
import Search from '@/components/Search.vue';
import Select from '@/components/Select.vue';
import Message from '@/components/Message.vue';
export default {
  components: {
    Search, 
    Select,
    Message
  }
}
</script>

<template>
  <div class="container p-4" style="background-color: white;">
    <div class="row">
      <div class="col-4 col-lg-6">
        <!-- TODO: IMPORT PAGE MESSAGE -->
        <Message />
      </div>
      <div class="col-4 col-lg-2">
        <Select />
      </div>
      <div class="col-3 col-lg-3 text-right">
        <Search />
      </div>
      <div class="col-1 col-lg-1">
        <div class="dropdown">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Profile
          </a>
          <!-- TODO: PROFILE DROPDOWN COMPONENT -->
          <!-- <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">

          </ul> -->
        </div>
      </div>
    </div>
    <div class="row d-flex align-items-stretch pb-5">
      <!-- TODO: ADD SUPP LOGIC -->
    </div>
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-center">
          <!-- TODO: ADD PAGINATION BUTTONS -->
        </div>
      </div>
    </div>
  </div>
</template>
