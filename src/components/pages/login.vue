<template>
    <div class="container">
        <b-form @submit.prevent="auth">
            <b-form-group>
                <label>Login</label>
                <b-form-input id="login"
                              type="text"
                              v-model="input.login"
				placeholder="Entrer votre identifiant"/>
                <label>Mot de passe</label>
                <b-form-input id="pwd"
                              type="password"
                              v-model="input.pwd"
                              placeholder="Entrer votre mot de passe"/>
                <b-btn type="submit" variant="primary">Connexion</b-btn>
            </b-form-group>
        </b-form>
        <b-alert variant="danger" :show="showDismissibleAlert">les champs sont vides</b-alert>
        <p>{{ input.log }}</p>
	<b-alert variant="success" :show="showCoAdm">Vous êtes connecté en tant qu'administrateur.</b-alert>
	 <b-alert variant="success" :show="showCoUser">Vous êtes connecté en tant qu'utilisateur.</b-alert>
    </div>

</template>

<script>
    import axios from '../../../node_modules/axios'
    import {navBar} from "../../store";
	import {bus} from "../../main";

    export default {

        name: "login",
        beforeCreate: function () {
            if (this.$session.exists()) {
                this.$router.push('/adminPanel')
            }
        },
        data() {
            return {
		showCoAdm: false,
		showCoUser: false,
		showAuthFail: true,
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
		const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
                if(this.input.login === "" || this.input.pwd === "")
                {
                    this.showDismissibleAlert = true
                }
                else
                {
                    axios.post(`http://89.157.15.147:3000/auth`, {
                        body: this.input
                    })
                        .then(response => {
                            this.logged = response.data;
                            if( response.data == 1)
                            {
				sleep(2000).then(() => {
					  this.showCoUser = true;
				})
	
                                this.$session.set('login', this.input.login);
                                for(let i = 0;i < navBar.navData.length;i++)
                                {
                                    if(navBar.navData[i].page === "Connexion")
                                    {
                                        navBar.navData.splice(i,1);
                                        navBar.navData.push({
                                            page: "Deconnexion",
                                            page_url: '/logout'
                                        });
                                    }
                                }
                                this.$router.push('/store');

                            }
                            else if(response.data == 2)
                            {
				sleep(2000).then(() => {
					  this.showCoAdm = true;
				})
                                this.$session.set('login', this.input.login);
                                this.$session.set('admin', 1);
                                for(let i = 0;i < navBar.navData.length;i++)
                                {
                                    if(navBar.navData[i].page === "Connexion")
                                    {
                                        navBar.navData.splice(i,3);
                                        navBar.navData.push({
                                            page: "Deconnexion",
                                            page_url: '/logout'
                                        }, {
                                                page: "Administration",
                                                page_url: '/login'
                                        });
                                    }
                                }
                                this.$router.push('/adminPanel');
                            }
                            else
                            {
                                this.showAuthFail = true;
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
