<script setup lang="ts">
const { walletAddress } = defineProps(["walletAddress"]);
</script>

<template>
  <button
    className="cta-button connect-wallet-button"
    @click="$emit('ConnectEmit')"
  >
    Connect to Wallet
  </button>
</template>

<style scoped></style>
