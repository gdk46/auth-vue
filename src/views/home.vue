<template>
    <div>
        <div id="nav">
            <router-link to="/sobre">Sobre</router-link>  |
            <router-link to="/">Sair</router-link>
        </div>
        <router-view/>

        <h1 align="center">Bem-vindo</h1>
    </div>
</template>

<script>
export default {
    name: "Home"
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

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>