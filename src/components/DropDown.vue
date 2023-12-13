<template>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <!-- {% if logged_in %}
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li><a class="dropdown-item" href="/favorites" hx-get="/favorites" hx-target="main" hx-push-url="true">Favorites</a></li>
          <li><a class="dropdown-item" hx-get="signout" hx-push-url="/" hx-target="main" href="/signout">Sign Out</a></li>
      {% else %} -->
        <li><a class="dropdown-item" hx-get="/signin" hx-push-url="true" hx-target="main" href="/signin">Sign In</a></li>
        <li><a class="dropdown-item" hx-get="/signup" hx-push-url="true" hx-target="main" href="/signup">Sign Up</a></li>
      <!-- {% endif %} -->
  </ul>
</template>

<script>
export default {
  name: 'DropDown',
}
</script>

<style>

</style>