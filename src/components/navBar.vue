<template>
    <nav class="navBar">
        <img class="mainLogo" src="../../src/assets/img/global/logo.png"/>
        <ul >
            <li v-for="item in navData">
                <router-link :to="item.page_url">{{item.page}}</router-link>
            </li>
        </ul>

    </nav>


</template>

<script>
    export default {
        name: "nav-bar",
        data(){
            return {
                sessionStatus: this.$session.exists(),
                navData: [
                    {
                        page: "Accueil",
                        page_url: '/home'
                    },
                    {
                        page: "Magasin",
                        page_url: '/store'
                    },
                    {
                        page: "Contact",
                        page_url: '/Contact'
                    },
                    {
                        page: "A propos",
                        page_url: '/about'
                    },

                    {
                        page: "Panier",
                        page_url: '/basket'
                    }]
            }
        },
        computed: {
          hide()
          {
              console.log("worked");
          }
        },
        watch:{
          '$route' (){
              this.removeIfExists();
          }
        },
        methods: {
            removeIfExists()
            {
                if(this.$session.exists())
                {
                    this.navData.push({page: "Deconnexion", page_url: "/logout"});
                }
                else
                {
                    this.navData.push({page: "connexion", page_url: "/login"});

                }
                console.log(this.$session.exists());
                //return this.navData;
            }
        }
    }
</script>

<style src="../assets/css/navBar.css" ></style>