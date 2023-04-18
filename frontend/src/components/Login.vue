<template>
    <div class="form w-50 mx-auto mt-5 text-center">
        <p class="fs-1">Login</p>
        <Validation v-if="error" :close="Close" :error="error" />
        <form @submit.prevent>
            <Input :label="'Email'" :type="'email'" v-model="email" />
            <Input :label="'Password'" :type="'password'" v-model="password" />
            <button type="submit" @click="Send" class="btn btn-primary">Login</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            error: ""
        };
    },
    methods: {
        Close() {
            this.error = null;
        },
        Send() {
            if (!this.email || !this.password) {
                this.error = 'All fields are required'
                return
            }
            const user = {
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('login', user)
                .then((res) => this.$router.push('/'))
        }
    },
}
</script>