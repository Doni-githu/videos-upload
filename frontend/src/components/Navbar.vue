<template>
    <div class="navbar">
        <div class="navbar-container">
            <h1>
                <RouterLink to="/" class="link">Hyper Studio</RouterLink>
            </h1>
            <ul>
                <li>
                    <RouterLink to="/login" class="link">Login</RouterLink>
                </li>
                <li>
                    <RouterLink to="/register" class="link">Register</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';
export default {
    components: {
        RouterLink
    }
}
</script>
<style scoped>
.navbar {
    width: 100%;
    height: 80px;
    background-color: #023e8a;
}

.navbar .navbar-container h1 {
    color: #fff;
}

.navbar .navbar-container {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar .navbar-container ul {
    display: flex;
    gap: 20px;
}

.navbar .navbar-container ul li {
    list-style: none;
}

.link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 5px;
    text-decoration: none;
    color: #fff;
}
</style>