<template>
	<section>
		<div class="layout-padding">
			<h3>Feedback</h3>
	
			<q-rating v-model="ratingModel" :max="5"></q-rating>
			<br>
			<button @click="submitRating">Submit</button>
		</div>
	</section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Toast } from 'quasar-framework'
export default Vue.extend({
	data() {
		return {
			msg: "TestMessage :)",
			ratingModel: 5
		}
	},
	methods: {
		submitRating() {
			Toast.create({
				html: 'Thank you for your opinion!',
				timeout: 2500,
				bgColor: '#1589FF'
			})
		}
	}
})
</script>
<style scoped>
.test {
	background-color: lemonchiffon
}
</style>

