<template>
    <div v-if="this.$session.exists()">
        <ul v-for="item in this.basket" class="itemContainer">
            <li>{{ item.title }}
                <b-button variant="danger" @click="removeFromBasket(item.id)">Retirer</b-button>
            </li>
        </ul>
        <b-button variant="primary" @click="checkOut">Valider</b-button>
    </div>
    <div v-else>
        <p>il faut vous connecter</p>
    </div>

</template>

<script>
    export default {
        name: "basket",
        data(){
            return {
                basket: this.$session.get('basket')
            }
        },
        methods : {
            removeFromBasket(id)
            {
                for(let i = 0;i < this.basket.length;i++)
                {
                    if(this.basket[i].id == id)
                    {
                        this.basket.splice(i, 1);
                        this.$session.set('basket', this.basket);
                    }
                }
                console.log(this.$session.get('basket'));
            }
        },
        checkOut()
        {

        }
    }
</script>

<style scoped>
    ul
    {
        list-style-type: none;
    }
.itemContainer
{
    width: 100%;
    height: 40px;
    background: #1d2124;
    color: white;
}
</style>