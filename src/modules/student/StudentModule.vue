<template>
  <HeaderComponent />
  <div class="container-fluid">
    <div class="row">
      <SideBarComponent />
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue"
import SideBarComponent from "./components/SideBarComponent.vue";
</script>