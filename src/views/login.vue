<template>
  <div class="login">
    <h1>Login</h1>
    <input type="text" placeholder="Email" v-model="email" />
    <br />
    <input type="password" placeholder="Senha" v-model="senha" />
    <br />
    <div class="btn-login">
      <button @click="login">Login</button>
    </div>
    <p>
      Você não tem conta?
      <span>
        <router-link to="/registrar">crie uma conta</router-link>
      </span>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
    data() {
        return {
            email: "",
            senha: "",
        };
    },

    methods: {
        login() {
            firebase
                .auth()
                    .signInWithEmailAndPassword(this.email, this.senha)
                    .then(() => {
                        this.$router.replace('home')
                        alert(`Bem Vindo`)
                    })
                    .catch((error) => {
                        alert(error.message);
                    })
        },
    },
};
</script>

<style scoped>

.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}

button {
  text-transform: uppercase;
  outline: 0;
  background: #007fb1;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  transition: all 0.3 ease;
  cursor: pointer;
}

p {
  margin-top: 40px;
  font-size: 13px;
}

p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>