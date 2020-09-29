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

<template src="./template.html" />
<style scoped lang="less" src="./style.less"/>
