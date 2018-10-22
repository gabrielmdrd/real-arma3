<template>
    <div class="container">
        <b-form @submit.prevent="auth">
            <b-form-group>
                <label>Titre</label>
                <b-form-input id="title"
                              type="text"
                                v-model="postBody.title"/>
                <label>Image</label>
                <!--<b-form-file v-model="file" :state="Boolean(file)" placeholder="Choose a file..."></b-form-file>-->
                <label>Description</label>
                <b-form-input id="title"
                              type="text"
                              v-model="postBody.desc"/>
                <b-button class="card_btn" variant="primary" v-on:click="postPost" >Poster</b-button>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
    import axios from '../../../node_modules/axios'
    export default {
        name: "admin-panel-form",
        data(){
            return {
                postBody:  {
                    title: "",
                    desc: "",
                    img_src : "navy_seals_1.jpg"
                }
            }
        },
        methods: {
            postPost() {
                axios.post(`http://localhost:3000/post`, {
                    body: this.postBody
                })
                    .then(response => {})
                    .catch(e => {
                        this.errors.push(e)
                    })
            }
        }
    }
</script>

<style scoped>

</style>