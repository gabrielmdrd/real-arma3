<template>
    <nav class="navBar">
        <img class="mainLogo" src="../../src/assets/img/global/logo.png"/>
        <ul>

            <li v-for="navValue in navData">
                <router-link :to="{ path: navValue.page_url }">{{ navValue.page }}</router-link>
            </li>
        </ul>
    </nav>

</template>

<script>
    export default {
        name: "nav-bar",
        data(){
            return {
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
                        page: "Deconnexion",
                        page_url: '/logout'
                    },
                    {
                        page: "Panier",
                        page_url: '/logout'
                    },
                    {
                        page: "Administration",
                        page_url: '/login'
                    }]
            }
        }
    }
</script>

<style src="../assets/css/navBar.css" ></style>