import type { Ref } from "vue";

export const checkIfWalletIsConnected = async (walletAddress: Ref) => {
  // We're using optional chaining (question mark) to check if the object is null
  //@ts-ignore
  if (window?.solana?.isPhantom) {
    console.log("Phantom wallet found!");
    //@ts-ignore
    const response = await window.solana.connect({ onlyIfTrusted: true });
    if (response) {
      console.log("Connected with Public Key:", response.publicKey.toString());
    }
    walletAddress.value = response.publicKey.toString();
  } else {
    alert("Solana object not found! Get a Phantom Wallet 👻");
  }
};
