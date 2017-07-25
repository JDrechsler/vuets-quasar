<template>
	<section>
		<q-layout>
			<div slot="header" class="toolbar">
				<q-toolbar-title>
					Quasar Framework v{{$q.version}}
				</q-toolbar-title>
			</div>
	
			<q-drawer>
				<div class="list platform-delimiter">
					<div class="list-header">
						<img src="https://media.glassdoor.com/sqll/431522/arvato-systems-north-america-squarelogo-1424240649715.png" class="responsive paddingLeft">
					</div>
					<q-drawer-link icon="home" to="/">Home</q-drawer-link>
					<q-drawer-link icon="local_grocery_store" to="inventory">Inventory</q-drawer-link>
					<q-drawer-link icon="theaters" to="media">Media</q-drawer-link>
					<q-drawer-link icon="account_circle" to="account">Account</q-drawer-link>
					<q-drawer-link icon="help" to="help">Help</q-drawer-link>
					<q-drawer-link icon="feedback" to="feedback">Feedback</q-drawer-link>
				</div>
			</q-drawer>
	
			<keep-alive>
				<router-view class="layout-view"></router-view>
			</keep-alive>
	
			<div slot="footer" class="toolbar">
				footer
			</div>
		</q-layout>
	</section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	data() {
		return {

		}
	}
})
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

.paddingLeft {
	padding-left: 40px
}

h1,
h2 {
	font-weight: normal;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #42b983;
}
</style>
