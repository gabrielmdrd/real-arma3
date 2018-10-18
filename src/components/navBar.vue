<template>
    <nav class="navBar">
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
                        page_url: '/Magasin'
                    },
                    {
                        page: "Contact",
                        page_url: '/Contact'
                    },
                    {
                        page: "A propos",
                        page_url: '/about'
                    }]
            }
        }
    }
</script>

<style src="../assets/css/navBar.css" ></style>