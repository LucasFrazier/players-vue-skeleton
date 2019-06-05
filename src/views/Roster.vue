<template>
  <div class="roster container">
    <h1 class="title">Roster</h1>
    <table class="table">
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Rating</th>
      <th>Handedness</th>
      <th></th>
    </tr>
    <!-- {this.state.players.map(player => ( -->
      <tr>
        <th key={player.id}>Lucas</th>
        <th>Frazier</th>
        <th>10</th>
        <th>right</th>
        <th>
          <button 
            class="delete is-danger" 
            
          />
        </th>
      </tr>
      <!-- ))} -->
    </table>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    padding: 25px;
    font-size: 10px;
  }
</style>