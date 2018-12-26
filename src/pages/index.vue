<template src="./template.html" />
<style scoped lang="scss" src="./style.scss"/>

<script>
    import { mapState, mapMutations } from 'vuex'


    export default {
        name: 'index',
        mounted() {
        },
        data() {
            return {
                
            }
        },
        computed: {
            ...mapState({
                serverActive: state => (state.serverActive)? "在线" : "离线"
            })
        },
        methods: {
            ...mapMutations({changeServerState: 'changeServerState'})
        }
    }
</script>

