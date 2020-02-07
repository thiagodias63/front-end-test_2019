<template>
  <div class="header">
    <span></span>
    <h1 class="header-title">My Bookings</h1>
    <button id="header-button-config">
      <i class="fa fa-cog"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>


<style scoped>
.header {
  padding-top: .9rem;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
}
.header h1.header-title {
  font-size: 1.3rem;
  font-weight: normal;
}
.header button#header-button-config {
  background: unset;
  /* color: #6B6C71; */
  color: #EFEDEF;
  border: none;
  margin: 0;
  font-size: 1.2rem;
  margin-right: 25px;
}
</style>
