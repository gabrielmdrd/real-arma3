<template>
    <div class="container">
        <b-form @submit.prevent="auth">
            <b-form-group>
                <label>Login</label>
                <b-form-input id="login"
                              type="text"
                              v-model="input.login"/>
                <label>Mot de passe</label>
                <b-form-input id="pwd"
                              type="password"
                              v-model="input.pwd"
                              placeholder="Enter email"/>
                <b-btn type="submit" variant="primary">Connexion</b-btn>
            </b-form-group>
        </b-form>
        <b-alert variant="danger" :show="showDismissibleAlert">les champs sont vides</b-alert>
        <p>{{ input.log }}</p>
    </div>

</template>

<script>
    import axios from '../../../node_modules/axios'
    export default {

        name: "login",
        beforeCreate: function () {
            if (this.$session.exists()) {
                this.$router.push('/adminPanel')
            }
        },
        data() {
            return {
                showDismissibleAlert: false,
                logged: "",
                input: {
                    login: "",
                    pwd:  ""
                }
            }
        },
        methods: {
            auth()
            {
                if(this.input.login === "" || this.input.pwd === "")
                {
                    this.showDismissibleAlert = true
                }
                else
                {
                    axios.post(`http://localhost:3000/auth`, {
                        body: this.input
                    })
                        .then(response => {
                            this.logged = response.data;
                            if( response.data == 1)
                            {
                                this.$session.set('login', this.input.login);
                                this.$router.push('/home');

                            }
                            else if(response.data == 2)
                            {
                                this.$session.set('login', this.input.login);
                                this.$session.set('admin', 1);
                                this.$router.push('/adminPanel');
                            }
                            else
                            {
                                this.showDismissibleAlert = true
                            }

                        })
                        .catch(e => {
                            this.errors.push(e)
                        })
                }
            }
        }


    }
</script>

<style scoped>
p{
    color: black;
}
</style>