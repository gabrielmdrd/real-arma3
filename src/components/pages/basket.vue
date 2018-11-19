<template>
<div class="container">
    <div v-if="this.$session.exists()">
        <ul v-for="item in this.basket" class="itemContainer">
            <li>{{ item.title }}
            	<span class="quan">       Quantité : 1</span>
                <b-button variant="danger" class="vBtn" @click="removeFromBasket(item.id)">Retirer</b-button>
            </li>
        </ul>

        
    </div>
    <div v-else>
        <p>il faut vous connecter</p>
    </div>
<div v-if="this.basket.length == 0">
	<h1>Votre panier est vide</h1>
</div>
<div v-else>
	<p>Nombre total d'articles : {{this.basket.length}}</p>
	<b-button :disabled="showDisable" variant="primary" @click="checkOut()">Valider le panier & Télécharger les articles</b-button>
</div>
<div v-if="showLoader">
<img class="imgLoader" :show="false"src="https://loading.io/spinners/typing/lg.-text-entering-comment-loader.gif" >
<p>Vos articles sont en cours de téléchargement. Veuillez patienter...</p>
</div>
</div>

</template>

<script>
    import axios from '../../../node_modules/axios'
    export default {
        name: "basket",
        data(){
            return {
		showLoader: false,
		showDisable: false,
                basket: this.$session.get('basket'),
            }
        },
        methods : {
            removeFromBasket(id) {
                for (let i = 0; i < this.basket.length; i++) {
                    if (this.basket[i].id == id) {
                        this.basket.splice(i, 1);
                        this.$session.set('basket', this.basket);
                    }
                }
                console.log(this.$session.get('basket'));
            },

            checkOut() {
		this.showLoader = true;
		this.showDisable = true;
                let str = "";
                for(let i = 0;i < this.basket.length;i++)
                {
                    if(i !== this.basket.length - 1)
                    {
                        str = str+"nb"+i+"="+this.basket[i].mod_src+"&";
                    }
                    else
                    {
                        str = str+"nb"+i+"="+this.basket[i].mod_src;
                    }
                }
                console.log(str);
                console.log(this.basket);
                axios.get('http://89.157.15.147:3000/download?'+str,{
                    responseType: 'arraybuffer',
                    headers: {
                        'Content-Type': 'application/zip',
                    }})
                    .then((response) => {
			
                        let blob = new Blob([response.data], { type: "application/zip" }),
                            url = window.URL.createObjectURL(blob);
                        window.open(url, "_self");
			this.showLoader = false;
			this.showDisable = false;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    };
</script>

<style scoped>
.quan
{
	margin-left: 150px;
}

.imgLoader
{
	position: absolute;
	top: 50%;
	left: 50%;
}
.vBtn
{
	margin-left: 40%;
}
    ul
    {
        list-style-type: none;
    }
.itemContainer
{
    width: 100%;
    height: 40px;
    background: #F0F0F0;
    color: white;
	height: 100px;
	box-shadow: 0px 0px 5px #252525;
	line-height: 100px;
}

.itemContainer li
{
	font-weight: bold;
	color: #000
}
</style>
