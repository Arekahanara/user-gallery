<template>
  <nav class="nav-main">
    <ul>
      <li>
        <router-link :to="{ name: 'Home' }">
          Home
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Upload' }">
          Upload
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Gallery' }">
          Gallery
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
  .nav-main {
    ul {
      padding: 0;
      text-align: center;

      li {
        display: inline-block;
        padding: 5px 10px;
      }
    }
  }
</style>
