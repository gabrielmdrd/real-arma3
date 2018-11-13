<template>
</template>

<script>
    export default {
        name: "logout",
        beforeCreate: function () {
            this.$session.destroy();
            this.$router.push('/home')
        },
    }
</script>

<style scoped>

</style>