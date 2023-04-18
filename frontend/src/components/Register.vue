<template>
    <div class="form w-50 mx-auto mt-5 text-center">
        <p class="fs-1">Register</p>
        <Validation :error="error" :close="Close" v-if="error" />
        <form @submit.prevent>
            <Input :label="'Name'" :type="'text'" v-model="name" />
            <Input :label="'Email'" :type="'email'" v-model="email" />
            <Input :label="'Password'" :type="'password'" v-model="password" />
            <div class="label">
                <input type="file" style="display: none;" @change="ChangeInput" id="file">
                <label for="file">Image</label>
            </div>
            <button type="submit" @click="StartRegister" class="btn btn-primary">Register</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            image: null,
            error: null
        }
    },
    methods: {
        ChangeInput(e){
            this.image = e.target.files[0] 
        },
        StartRegister(){
            if(!this.name || !this.email || !this.password || !this.image){
                this.error = 'All fields are required'
                return
            }
            const fd = new FormData();

            fd.append('name', this.name)
            fd.append('email', this.email)
            fd.append('password', this.password)
            fd.append('image', this.image)

            this.$store.dispatch('register', fd)
                .then((res) => this.$router.push('/'))
                .catch((err) => this.error = err.data.message)
        },
        Close(){
            this.error = null
        }
    }
}
</script>
<style scoped>
.label {
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    border: var(--bs-border-width) solid var(--bs-border-color);
    border-radius: var(--bs-border-radius);
}
</style>