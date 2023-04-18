<template>
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error!</strong> {{ error }} 
        <button type="button" class="btn-close" @click="close"></button>
    </div>
</template>
<script>
export default {
    props:{
        error: {
            type: String,
            required: true
        },
        close:{
            type: Function,
            required: true
        } 
    },
    name: 'Validation'
}
</script>
<style></style>