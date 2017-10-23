<style scoped>
    @import 'styles/common.css';
</style>
<template>
    <div>
        <if-header></if-header>
        <div class="if-main-container">
            <div class="if-left-menu ivu-menu-dark">
                <if-menu></if-menu>
            </div>
            <div class="if-router-view">
                <router-view></router-view>
            </div>
        </div>
        <if-footer></if-footer>
    </div>
</template>
<script>
    import ifMenu from "./views/menu.vue" ;
    import ifFooter from "./views/basic/footer.vue" ;
    import ifHeader from "./views/basic/header.vue" ;
    export default {
        data () {
            return {}
        },
        components : {
            ifMenu , ifFooter , ifHeader
        } ,
        mounted () {

        },
        beforeDestroy () {

        },
        methods: {

        }
    }
</script>
