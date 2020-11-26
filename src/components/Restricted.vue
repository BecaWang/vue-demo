<template>
  <div id="restricted">
    <!-- <div class="routing">

    </div> -->
    <!-- <router-link to="/login">Login</router-link>
    <router-link to="/restricted/home">Home</router-link>
    <router-link to="/helloWorld">helloWorld</router-link> -->

    <ul>
      <li>
        <router-link to="/restricted/home">Home</router-link>
      </li>
      <li>
        <router-link to="/login">Login</router-link>
      </li>
      <li>
        <router-link to="/helloWorld">helloWorld</router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>