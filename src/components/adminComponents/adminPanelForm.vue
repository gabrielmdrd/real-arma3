<template>
    <div class="container">
        <b-form @submit.prevent="auth">
            <b-form-group>
                <label>Titre</label>
                <b-form-input id="title"
                              type="text"
                                v-model="postBody.title"/>
                <label>Selectionner une image</label>
                <b-form-file   @change="onFileSelected($event.target.files)" placeholder="Selectionner une image"></b-form-file>
                <label>Selectionner un mode</label>
                <b-form-file   @change="onFileSelectedMod($event.target.files)" placeholder="Selectionner un mode"></b-form-file>
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
                    id: 0,
                    title: "",
                    content: "",
                    img_src : "navy_seals_1.jpg",
                    mod_src: "navy_seals_1.jpg"
                },
                uploadFile: new FormData(),
                uploadMod: new FormData()
            }
        },
        methods: {
            postPost() {
	

                axios.post(`http://89.157.15.147:3000/post`, {
                    body: this.postBody
                })
                    .then(response => {})
                    .catch(e => {
                        this.errors.push(e)
                    });

                axios.post(`http://89.157.15.147:3000/upload`, this.uploadFile)
                    .then(response => {})
                    .catch(e => {
                        this.errors.push(e)
                    });
               axios.post(`http://89.157.15.147:3000/uploadMod`, this.uploadMod)
                    .then(response => {})
                    .catch(e => {
                        this.errors.push(e)
                    });

                      },
            onFileSelected(fileList)
            {
                this.uploadFile.append("file", fileList[0], fileList[0].name);
                console.log(fileList[0]);
            },
            onFileSelectedMod(fileList)
            {

                this.uploadMod.append("mod", fileList[0], fileList[0].name);
                console.log(fileList[0]);
            }
        }
    }
</script>

<style scoped>

</style>
