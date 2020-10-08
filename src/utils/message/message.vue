<script>
    import {Toast} from 'Components'

    export default {
        name: 'Message',
        components: {
            Toast
        },
        data: () => ({
            pool: [],
            show: false,
            tips: ''
        }),
        created() {

        },
        methods: {
            alert(msg) {
                var poolLen = this.pool.length
                if(msg) {
                    this.pool.push(msg)
                    this.pool = Array.from(new Set(this.pool))
                } else if(poolLen > 0) {
                    msg = this.pool[poolLen - 1]
                }

                if (msg) {
                    this.show = true
                    this.tips = msg
                    setTimeout(() => {
                        this.confirm()
                    }, 3000)
                } else {
                    this.show = false
                }

                return msg
            },
            confirm() {
                this.pool.pop()
                this.alert()
            }
        },
    }
</script>

<template src="./template.html" />
<style scoped lang="less" src="./style.less" />