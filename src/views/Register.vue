<template>
  <div class="container">
        <form onSubmit={this.handleSubmit}>
          
          <div class="field">
            <label class="label is-marginless">First Name</label>
            <!-- {this.state.ErrorFirstName && <p class="help is-danger is-marginless">Please Enter First Name!</p>} -->
            <p class="control has-icons-left has-icons-right">
              <input 
                id="firstName" 
                class="input" 
                type="text" 
                placeholder="First Name"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <!-- {this.state.ErrorFirstName && (
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle" />
              </span>
              )} -->
            </p>
          </div>
          
          <div class="field">
          <label class="label is-marginless">Last Name</label>
          <!-- {this.state.ErrorLastName && <p class="help is-danger is-marginless">Please Enter Last Name!</p>} -->
            <p class="control has-icons-left has-icons-right">
              <input
                id="lastName"
                class="input"
                type="text"
                placeholder="Last Name"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <!-- {this.state.ErrorLastName && (
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle" />
              </span>
              )} -->
            </p>
          </div>
          
          <div class="field">
            <label class="label is-marginless">Email</label>
            <p class="control has-icons-left has-icons-right">
              <input
                id="email"
                class="input"
                type="email"
                placeholder="Email"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope" />
              </span>
              <!-- {this.state.ErrorEmail && (
                <span class="icon is-small is-right">
                  <i class="fas fa-exclamation-triangle" />
                </span>
              )} -->
            </p>
          </div>
          
          <div class="field">
            <label class="label is-marginless">Confirm Email</label>
            <!-- {this.state.ErrorVerifyEmail && <p class="help is-danger is-marginless">Email and Confirmation Email Do Not Match!</p>} -->
            <p class="control has-icons-left has-icons-right">
              <input
                id="confirmEmail"
                class="input"
                type="email"
                placeholder="Confirm Email"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope" />
              </span>

              <!-- {this.state.ErrorVerifyEmail && (
                <span class="icon is-small is-right">
                  <i class="fas fa-exclamation-triangle" />
                </span>
              )} -->
            </p>
          </div>
          
          <div class="field">
            <label class="label is-marginless">Password</label>
            <!-- {this.state.ErrorPassword && <p class="help is-danger is-marginless">Please Enter Password!</p>} -->
            <p class="control has-icons-left">
              <input
                id="password"
                class="input"
                type="password"
                placeholder="Password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock" />
              </span>
              <!-- {this.state.ErrorPassword && (
                <span class="icon is-small is-right">
                  <i class="fas fa-exclamation-triangle" />
                </span>
              )} -->
            </p>
          </div>
          
          <div class="field">
            <label class="label is-marginless">Confirm Password</label>
            <!-- {this.state.ErrorVerifyPassword && <p class="help is-danger is-marginless">Password and Confirmation Password Do Not Match!</p>} -->
            <p class="control has-icons-left">
              <input
                id="confirmPassword"
                class="input"
                type="password"
                placeholder="Confirm Password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock" />
              </span>
              <!-- {this.state.ErrorVerifyPassword && (
                <span class="icon is-small is-right">
                  <i class="fas fa-exclamation-triangle" />
                </span>
              )} -->
            </p>
          </div>
          
          <div class="field">
            <p class="control">
              <button id="register" class="button is-primary" type="submit">
                  Register
              </button>
            </p>
          </div>

        </form>
      </div>
</template>

<style lang="scss" scoped>
  .container {

    padding: 25px;
  }
</style>