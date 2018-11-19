<template>
</template>

<script>
    import { navBar } from '../../store';
    export default {
        name: "logout",
        beforeCreate: function () {
            this.$session.destroy();
            for(let i = 0;i < navBar.navData.length;i++)
            {
                if(navBar.navData[i].page === "Deconnexion")
                {
                    navBar.navData.splice(i,2);
                    navBar.navData.push({
                        page: "Connexion",
                        page_url: '/login'
                    });
                }
                else if(navBar.navData[i].page === "Administration")
                {
                    navBar.navData.splice(i,2);
                    navBar.navData.push({
                        page: "Connexion",
                        page_url: '/login'
                    });
                }
            }
            this.$router.push('/')
        },
    }
</script>

<style scoped>

</style>
