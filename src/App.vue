<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
			<router-link to="/login">Login</router-link> |
			<router-link to="/register">Register</router-link> |
			<router-link to="/roster">Roster</router-link> |
			<router-link to="/player/new">Create New</router-link>
    </div>
    <router-view/>
  </div>
</template>

// SCSS or CSS is supported out of the box, use what brings you joy!
<style lang="scss">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	// color: #2c3e50;
}
#nav {
	padding: 30px;
	a {
		font-weight: bold;
		color: #00d1b2;
		&.router-link-exact-active {
			color: black;
		}
	}
}
</style>
