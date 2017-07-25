// var routesFromWebpack = ['Alarm.vue',
// 	'App.vue',
// 	'Error404.vue',
// 	'Home.vue',
// 	'Mail.vue',
// 	'Media.vue',
// 	'NeuerTest.vue',
// 	'TestComp.vue',
// 	'Weather.vue'
// ]

// console.log(routesFromWebpack)

// var routesTest: { path: string, component: void }[] = []

// routesFromWebpack.forEach(element => {
// 	var compName = element.replace('.vue', '')
// 	var compDomainName = `/${compName.toLocaleLowerCase()}`
// 	console.log(compName)
// 	console.log(compDomainName)
// 	routesTest.push({ path: compDomainName, component: load(compName) })
// });

// console.log(routesTest)

// function load(compName) {
// 	console.log()
// 	// return () => import(`./components/${compName}.vue`)
// }

// const routes = [
// 	{ path: '/mail', component: load('Mail') },
// 	{ path: '/weather', component: load('Weather') },
// 	{ path: '/testcomp', component: load('TestComp') },
// 	{ path: '/alarm', component: load('Alarm') },
// 	{ path: '/media', component: load('Media') },
// 	{ path: '/', component: load('Home') },
// 	{ path: '*', component: load('Error404') } // Not found
// ]