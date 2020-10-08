<script>
    import {Loading} from 'Components'
    
    export default {
        name: 'LoadingUtils',
        components: {
            Loading
        },
        data: () => ({
            isShow: false
        }),
        methods: {
            show() {
                this.isShow = true
            },
            hide() {
                this.isShow = false
            }
        }
    }
</script>

<template src="./template.html" />
<style scoped lang="less" src="./style.less"/>
