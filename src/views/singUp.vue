<template>
    <div class="sign-up">
        <h1>Cadastro</h1>
        <br />
        <input type="text" placeholder="Email" v-model="email" />
        <br />

        <input type="password" placeholder="Senha" v-model="senha" />
        
        <br />
        <button @click="signUp">Registrar</button>
        
        <p>
            <span>
                ou retorne ao
                <router-link to="/login"> login.</router-link>
            </span>
        </p>
    </div>
</template>


<script>
import firebase from "firebase";

export default {
    name: "SingUp",
    
    data() {
        return {
            email: "",
            senha: "",
        }
    },

    methods: {
        signUp() {
            firebase
                .auth()
                    .createUserWithEmailAndPassword(this.email, this.senha)
                    .then(() => {
                        this.$router.replace('home'),
                        alert('Sua conta foi cadastrata com sucesso!')
                    })
                    .catch((error) => {
                        console.log(error);
                        alert(`Aconteceu algo inesperado. ${error.message}`)
                    })
        }
    },
};
</script>

<style scoped>

.sign-up {
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