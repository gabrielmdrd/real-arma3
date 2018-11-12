<template>
    <div class="container">
        <b-form @submit.prevent="auth">
            <b-form-group>
                <label>Titre</label>
                <b-form-input id="title"
                              type="text"
                                v-model="postBody.title"/>
                <label>Select image</label>
                <b-form-file  @change="onFileSelected" placeholder="Selectionner une image"></b-form-file>
                <label>Select file to download</label>
                <b-form-file   placeholder="Selectionner un mode"></b-form-file>
                <label>Description</label>
                <b-form-input id="title"
                              type="text"
                              v-model="postBody.content"/>
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
                    content: "",
                    img_src : "navy_seals_1.jpg",
                    uploadFile: null
                },
                selectedFile: null
            }
        },
        methods: {
            postPost() {
                const fd = new FormData();
                fd.append('image', this.selectedFile, this.selectedFile.name);
                this.uploadFile = fd;
                axios.post(`http://localhost:3000/post`, {
                    body: this.postBody
                })
                    .then(response => {})
                    .catch(e => {
                        this.errors.push(e)
                    })
            },
            onFileSelected(event)
            {
                this.selectedFile = event.target.files[0];
                console.log(this.selectedFile);
            }
        }
    }
</script>

<style scoped>

</style>