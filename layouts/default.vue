<script lang="ts" setup>
useHead({
  titleTemplate: (chunk) => {
    const title = "Интернет-магазин модной одежды - брендовые вещи в Mood";
    return chunk ? `${chunk} - ${title}` : title;
  },
});
</script>

<template>
  <div id="main" class="flex min-h-screen flex-col bg-slate-50">
    <Head>
      <Link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <Link rel="manifest" href="/favicons/site.webmanifest" />
      <Link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <Link rel="shortcut icon" href="/favicons/favicon.ico" />
      <Meta name="msapplication-TileColor" content="#2d89ef" />
      <Meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <Meta name="theme-color" content="#ffffff" />
    </Head>
    <div class="px-5 py-2.5">
      <HeaderAdditional />
      <HeaderMain class="pt-4 md:pt-6" />
      <NuxtPage />
    </div>
    <FooterMain class="mt-auto" />
  </div>
</template>
