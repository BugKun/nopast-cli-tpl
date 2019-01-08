<template src="./template.html" />
<style scoped lang="scss" src="./style.scss"/>

<script>
    import { mapState, mapMutations } from 'vuex'

    export default {
        name: 'Server',
        computed: {
            ...mapState({
                serverActive: state => (state.serverActive)? "online" : "offline"
            })
        }
    }
</script>

