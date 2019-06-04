<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
			<router-link to="/login">Login</router-link> |
			<router-link to="/register">Register</router-link> |
			<router-link to="/roster">Roster</router-link> |
			<router-link to="/player/new">Create New</router-link>
    </div> -->
		<div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a href="/" class="navbar-item">
                Home
              </a>

              <a href="/#/player/new" class="navbar-item">
                Create New
              </a>

              <!-- <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  More
                </a>

                <div class="navbar-dropdown">
                  <a class="navbar-item">
                    About
                  </a>
                  <a class="navbar-item">
                    Jobs
                  </a>
                  <a class="navbar-item">
                    Contact
                  </a>
                  <hr class="navbar-divider"/>
                  <a class="navbar-item">
                    Report an issue
                  </a>
                </div>
              </div> -->
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a href="/#/register" class="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a href="/#/login" class="button is-light">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    <router-view/>
  </div>
</template>

// SCSS or CSS is supported out of the box, use what brings you joy!
<!-- <style lang="scss">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	// text-align: center;
	// color: #2c3e50;
	// padding: 25px;
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
</style> -->
