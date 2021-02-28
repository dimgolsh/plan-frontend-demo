export enum Mode {
  STANDALONE = 'standalone',
  BROWER = 'browser'
}

function getPWADisplayMode() {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches
  if (document.referrer.startsWith('android-app://')) {
    return 'pwa'
  } else if (navigator.standalone || isStandalone) {
    return 'standalone'
  }
  return 'browser'
}

export {
  getPWADisplayMode
}
