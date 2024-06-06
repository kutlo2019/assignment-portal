<template>
  <HeaderComponent />
  <div class="container-fluid">
    <div class="row">
      <SideBarComponent v-if="showSideBar()" />
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue"
import SideBarComponent from "./components/SideBarComponent.vue"
import { useRoute } from 'vue-router';

const route = useRoute();

const showSideBar = () => {
  let inlcudesAssignment = route.path.includes("assignment", 21)
  return !inlcudesAssignment
};
</script>