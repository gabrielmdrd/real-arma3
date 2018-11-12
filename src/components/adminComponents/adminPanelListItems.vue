<template>
    <div>
    <b-table striped hover :items="data" :fields="fields"></b-table>
    <h1>items</h1>
    </div>
</template>

<script>
    import axios from '../../../node_modules/axios'
    export default {

        name: "admin-panel-list-items",
        data(){
            return {
                data: [],
                data1: items
            }
        },
        mounted () {
            axios.get('http://localhost:3000')
                .then( (response) => {
                    this.data = response.data;
                    console.log(this.data);
                })
                .catch(function (error){
                    console.log(error);
                })
        }
    }
</script>

<style scoped>

</style>