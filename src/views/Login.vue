<template>
  <!-- <div class="login">
    <h1>This is the login page</h1>
    <button class="button is-success">Button</button>
  </div> -->
  <div class="container">
        <form>
          <div class="field">
            <label class="label is-marginless">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input
                id="email"
                class="input"
                type="email"
                placeholder="Email"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope" />
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label is-marginless">Password</label>
            <div class="control has-icons-left has-icons-right">
              <input
                id="password"
                class="input"
                type="password"
                placeholder="Password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock" />
              </span>
            </div>
          </div>

          
          <div class="field">
            <p class="control has-text-centered">
              <button id="login" class="button is-primary " type="submit">
                Login
              </button>
            </p>
          </div>
        </form>
        <h5>
          Need an account?
          <!-- <Link to="/register"> Register Here!</Link> -->
          <a href="/#/register">Register Here!</a>
        </h5>
      </div>
</template>

<style lang="scss" scoped>
  .container {

    padding: 24px;
  }
</style>


