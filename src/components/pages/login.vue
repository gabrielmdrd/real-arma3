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
    import users from '../../users'
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
                users: users[1].login,
                input: {
                    login: "",
                    pwd:  "",
                    log: ""
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
                    if(this.input.login === this.users)
                    {
                        this.input.log = "logged"
                        this.$session.set('login', this.input.login)
                        this.$router.push('/adminPanel')

                    }
                    else
                    {
                        this.input.log = "introuvable"
                    }
                    this.showDismissibleAlert = false
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