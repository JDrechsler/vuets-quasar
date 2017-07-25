import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load(compName: string) {
	return () => import(`./components/${compName}.vue`)
}

//Get CompNames from Webpack to build routes

declare var compNamesFromWebpack: string[]

var routes: { path: string, component: () => Promise<any> }[] = []

compNamesFromWebpack.forEach(element => {
	var compName = element.replace('.vue', '')
	var compDomainName = `/${compName.toLocaleLowerCase()}`
	console.log(`Created route ${compDomainName}`)
	routes.push({ path: compDomainName, component: load(compName) })
});

routes.push({ path: '/', component: load('Home') })
routes.push({ path: '*', component: load('Error404') })

export const router = new VueRouter({
	routes,
	mode: 'history'
})

