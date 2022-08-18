<template>
  <div>
    <b>Showcase works!</b><br />
    <a href="" @click="onLogin">login</a><br />
    <a href="" @click="onRegister">register</a><br />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function onLogin() {
  router.push("/login");
}

function onRegister() {
  router.push("/register");
}
</script>

<style lang="scss"></style>
