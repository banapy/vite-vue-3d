<script lang='ts' setup>
import {MapShow} from './map'
import {HtGlobe} from 'ht-components'
import {onBeforeUnmount} from "vue";

const tiandituTk = "1292dbbb36f799c61eabc3c732eef02c";
let mapshow: MapShow
const onLoaded = (viewer) => {
  mapshow = new MapShow(viewer)
}
onBeforeUnmount(() => {
  mapshow.destroy()
  mapshow = null
})
</script>
<template>
  <HtGlobe :tiandituTk="tiandituTk" @loaded="onLoaded"></HtGlobe>
</template>

<style scoped>
#cesium-map {
  width: 100%;
  height: 100%;
}
</style>
<style>
.popup {
  position: absolute;
  z-index: 1;
}
</style>
