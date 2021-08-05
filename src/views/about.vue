<template>
    <div>
        <div id="nav">
            <router-link to="/home">Home</router-link>
        </div>

        <p align="center">sistema de autenticação com Firebase</p>
    </div>
</template>

<script>
export default {
    name: "About"
}
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>