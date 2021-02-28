<template>
  <div v-if="$q.platform.is.ios">
    <div class="bg-grey-4 q-pa-md rounded-borders">
      Для установки нажмите
      <span class="dynamicovPWA_notification_icon"
        ><img src="ios-share.svg" alt="" style="height: 20px" /></span
      >, затем коснитесь «На экран 'Домой'»
    </div>
    <svg
      width="41"
      height="20"
      viewBox="0 0 41 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 20L40.5 0.5H1.5L21 20Z" fill="#E0E0E0" />
    </svg>
  </div>
</template>
