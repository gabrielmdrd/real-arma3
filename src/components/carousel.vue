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
                    caption="First slide" t
                    ext="Nulla vitae elit libero, a pharetra augue mollis interdum."
                    img-src="https://picsum.photos/1024/480/?image=52"
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide
                    id="slide"
                    caption="First slide"
                    text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                    img-src="https://picsum.photos/1024/480/?image=54">
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide
                    id="slide"
                    caption="First slide"
                    text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                    img-src="https://picsum.photos/1024/480/?image=58">
            </b-carousel-slide>
        </b-carousel>


    </div>
</template>

<script>
    export default {
        name: "carousel",
        data () {
            return {
                slide: 0,
                sliding: null
            }
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