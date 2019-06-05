<template>
  <div class="new-player container">
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
              onChange={this.handleChange}
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
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
              onChange={this.handleChange}
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        
        <div class="field">
        <label class="label is-marginless">Rating</label>
        <!-- {this.state.ErrorRating && <p class="help is-danger is-marginless">Please Enter a Rating from 0 to 10!</p>} -->
          <p class="control has-icons-left has-icons-right">
            <input 
              id="rating"
              class="input"
              type="text" 
              placeholder="Rating"
              onChange={this.handleChange}
            />
            <span class="icon is-small is-left">
              <i class="fas fa-star"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        
        <div class="field">
        <label class="label is-marginless">Handedness</label>
          <div class="control">
            <div class="select is-primary">
              <select 
              id="handedness"
              class="input"
              type="text"
              value={this.state.handedness}
              onChange={this.handleChange}
              >
                <option value="right">Right</option>
                <option value="left">Left</option>
              </select>
            </div>
          </div>
        </div>
        
        <div class="field">
          <p class="control">
            <button id="create" class="button is-primary" type="submit">
              Create
            </button>
          </p>
        </div>
        </form>
      </div>
</template>

<style lang="scss" scoped>
  .container {
    padding: 25px;
    font-size: 10px;
  }
</style>