<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import type { Ref } from "vue";
import { connectWallet, checkIfWalletIsConnected } from "./utils/functions";
import ConnectWallet from "./components/ConnectWallet.vue";
import Grid from "./components/Grid.vue";

const walletAddress = ref(null);
const GifList: Ref<[] | string[]> = ref([]);

onMounted(() => {
  checkIfWalletIsConnected(walletAddress);
});

//dev only
watch(walletAddress, () => {
  if (walletAddress) {
    console.log("Fetching GIF list...");

    // Call Solana program here.

    // Set state
    GifList.value = ["hello", "one"];
  }
});
</script>

<template>
  <main class="container">
    <p class="header">🖼 GIF Portal</p>
    <p>View your GIF collection in the metaverse ✨</p>
    <ConnectWallet
      :wallet-address="walletAddress"
      @ConnectEmit="connectWallet(walletAddress!)"
      v-if="!walletAddress"
    />
    <Grid v-else :gif-list="GifList" />
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
.header {
  font-size: 2rem;
}
</style>
