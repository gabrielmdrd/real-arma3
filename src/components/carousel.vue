<template>
    <div id="pCarou">
        <b-carousel id="carousel1"
                    style="text-shadow: 1px 1px 2px #333;"
                    controls
                    indicators
                    background="#ababab"
                    :interval="4000"
                    img-width="1024"
                    img-height="480"
                    v-model="slide"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
        >

            <!-- Text slides with image -->
            <b-carousel-slide
                    id="slide"
                    :caption="lastImgs[0].title"
                    :text="lastImgs[0].content"
                    :img-src="require(`@/assets/img/store/${lastImgs[0].img_src}`) "
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide
                    id="slide"
                    :caption="lastImgs[1].title"
                    :text="lastImgs[1].content"
                    :img-src="require(`@/assets/img/store/${lastImgs[1].img_src}`) ">
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide
                    id="slide"
                    :caption="lastImgs[2].title"
                    :text="lastImgs[2].content"
                    :img-src="require(`@/assets/img/store/${lastImgs[2].img_src}`) ">
            </b-carousel-slide>
        </b-carousel>


    </div>
</template>

<script>
    import axios from '../../node_modules/axios'
    export default {
        name: "carousel",
        data () {
            return {
                slide: 0,
                sliding: null,
                lastImgs: []
            }
        },
        mounted() {
            axios.get(`http://89.157.15.147:3000/getLastImgs`)
            .then(response => {
                this.lastImgs = response.data;
                console.log(this.lastImgs);
            })
            .catch(e => {
                this.errors.push(e)
            });
        },
        methods: {
            onSlideStart (slide) {
                this.sliding = true
            },
            onSlideEnd (slide) {
                this.sliding = false
            }
        }
    }
</script>
<style>
    #pCarou
    {
        height: 100% !important;
	
    }
    #carousel1
    {
        height: 100% !important;
	background: red;
    }

    #slide
    {
        height: 100%;
    }
    .carousel-inner
    {
        height: 100%;
    }

</style>
<!-- carousel-1.vue -->
