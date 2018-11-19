<template>
<div class="container">
    <div v-if="this.$session.exists()">
        <ul v-for="item in this.basket" class="itemContainer">
            <li>{{ item.title }}
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
	<b-button variant="primary" @click="checkOut()">Valider</b-button>
</div>
</div>

</template>

<script>
    import axios from '../../../node_modules/axios'
    export default {
        name: "basket",
        data(){
            return {
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
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    };
</script>

<style scoped>
.vBtn
{
	align: right;
}
    ul
    {
        list-style-type: none;
    }
.itemContainer
{
    width: 100%;
    height: 40px;
    background: lightgrey;
    color: white;
	height: 40px;
}

.itemContainer li
{
	font-weight: bold;
	color: #000
}
</style>
