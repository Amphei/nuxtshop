<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
import { useAuthStore } from '~/stores/auth'

const cartStore = useCartStore()
const authStore = useAuthStore()

if (process.client) {
  cartStore.nuxtClientInit()
  authStore.nuxtClientInit()
}

useSeoMeta({
  ogTitle: 'NuxtShop',
  ogDescription: 'eCommerce website example',
  ogImage: 'https://seeklogo.com/images/N/nuxt-logo-1CCC5F38FD-seeklogo.com.png',
  ogUrl: 'https://nuxtshop-yep.vercel.app',
  twitterTitle: 'NuxtShop',
  twitterDescription: 'eCommerce website example built with Nuxt3',
  twitterImage: 'https://seeklogo.com/images/N/nuxt-logo-1CCC5F38FD-seeklogo.com.png',
  twitterCard: 'summary',
})

useHead({
  htmlAttrs: { lang: 'en' },
  meta: [{ name: 'description', content: 'eCommerce website example' }],
  titleTemplate: titleChunk => {
    return titleChunk ? `${titleChunk} | NuxtShop` : 'NuxtShop'
  },
})
</script>

<template>
  <div>
    <NuxtLayout name="default">
      <div>
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>
