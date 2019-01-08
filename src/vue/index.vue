<template src="./template.html" />
<style lang="scss" scoped src="./style.scss" />

<script>
    export default {
        name: 'NopastCliTpl',
        props: {
            text: {
                type: String,
                required: true
            }
        }
    };
</script>
