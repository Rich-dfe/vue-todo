<template>
  <div class="alert-notification">
    <v-alert
      :text="alertStore.text"
      :title="alertStore.title"
      :type="alertStore.type"
      closable
    ></v-alert>
  </div>
</template>

<script setup>
import { useAlertStore } from '@/stores/alert';
const alertStore = useAlertStore();
</script>

<style scoped>
.alert-notification{
    position: fixed;
    z-index: 1;
    bottom: 50px;
    width: 100%;
    padding: 0 30% 0 30%
}
</style>
