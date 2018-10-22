<template>
    <div >

        <b-navbar class="adminPanelNavBar"toggleable="md" type="dark" variant="info">
            <b-navbar-nav v-for="item in navBarItems">
                <b-nav-item v-on:click="adminPanelComponents = item.component">{{ item.page }}</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
        <component :is="adminPanelComponents"
        ></component>
    </div>
</template>

<script>
    import item from '../adminComponents/post_item'
    import navBar from '../adminComponents/adminPanelNavBar'
    import FormFields from '../adminComponents/adminPanelForm'
    import listItems from '../adminComponents/adminPanelListItems'
    export default {

        name: "admin-panel",
        beforeCreate: function () {
            if (!this.$session.exists()) {
                this.$router.push('/')
            }
        },
        data(){
            return {
                adminPanelComponents: "FormFields",
                navBarItems: [
                    {
                        page: "Ajouter un article",
                        component: "FormFields"
                    },
                    {
                        page: "Ajouter un utilisateur",
                        component: "item"
                    },
                    {
                        page: "Lister les items",
                        component: "listItems"
                    }
                ]

            }
        },
        components:{
            item,
            navBar,
            FormFields,
            listItems
        }
    }

</script>

<style scoped>
    .adminPanelNavBar
    {
        background: #202E91 !important;
        color: white !important;
    }

</style>