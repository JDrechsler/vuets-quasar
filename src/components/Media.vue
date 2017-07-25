<template>
	<section>
		<div class="layout-padding">
			<p class="caption">Gallery Slider</p>
			<q-gallery-slider :src="slider"></q-gallery-slider>
	
			<p class="caption">Youtube</p>
			<q-video :src="link" style="width: 853px; height: 480px"></q-video>
		</div>
	</section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	data() {
		return {
			link: "https://www.youtube.com/embed/doj4ifa_zh8?ecver=2",
			slider: [
				'https://www.arvato.com/content/dam/arvato/images/brand/photos/arvato_newsfeed_492198101.adaptive.768.jpg',
				'https://www.arvato.com/content/dam/arvato/images/solutions-material/photos/arvato_IT-Solutions1.adaptive.768.jpg',
				'https://www.arvato.com/content/dam/arvato/images/solutions-material/teaser-images/arvato_IT_Cloud_88433541.adaptive.768.jpg',
				'https://www.arvato.com/content/dam/arvato/images/solutions-material/photos/arvato_Solutions_Marketing_Solutions_155391073.adaptive.768.jpg'
			]
		}
	}
})
</script>

<style>

</style>