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
    import { navBar } from "../store";
    export default {

        name: "nav-bar",
        data(){
            return {
                navData: navBar.navData
            }
        }
    }
</script>

<style src="../assets/css/navBar.css" ></style>