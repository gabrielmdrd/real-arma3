<template>
    <div class="iteam_card_container">
        <b-col ><div  v-for="item in data" class="item_card">

                <img :src=" require(`@/assets/img/home/carousel/${item.img_src}`) " />

            <div>
                <b-button class="card_btn" variant="primary" >Ajouter au panier</b-button>
                <p class="title">{{ item.title }}</p>
                <p class="card_content">{{ item.content}}</p>
            </div>
        </div></b-col>
    </div>
</template>

<script>
    import axios from '../../../node_modules/axios'


    export default {
        name: "store",
        data(){
            return {
                data: []
            }
        },
        mounted () {
          axios.get('http://localhost:3000')
              .then( (response) => {
                  this.data = response.data;
              })
              .catch(function (error){
                  console.log(error);
              })
        }
    }
</script>

<style scoped>
    .iteam_card_container
    {
        height: 100%;
        padding: 20px;
    }
    .item_card
    {
        color: #ffffff;
        position: relative;
        display: inline-block;
        background: #252525;
        width: 23%;
        height: 50%;
        border-radius: 5px;
        box-shadow: 0px 0px 5px black;
        margin: 10px;
    }
    .item_card div
    {
        padding: 10px;
    }
    .item_card_img_container
    {

    }
    .item_card img
    {
        display: block;
        width: 100%;
        height:180px;
    }
    .title
    {
        font-weight: bold;
    }

    .card_btn
    {
        color: #000000;
        font-weight: bold;
        position: absolute;
        right: 2%;
        top: 48%;
        background: #ffffff;
        box-shadow: 0px 0px 5px black;
    }
</style>