<template>
    <nav class="top-bar">
        <img class="top-bar-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6X2lldt_gy2tcbXCKBbKWNVBpH-f1Mcjsw&usqp=CAU">
        <router-link :to="{ name: 'Profile' }">Profile</router-link>
        <router-link :to="{ name: 'Login' }">Logout</router-link>
    </nav>
</template>

<script>
    export default {
    
    }
</script>

<style scoped lang="scss">
    .top-bar {
        height: 8rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        a {
            color: #fff;
            font-size: 1.6rem;
            margin: 0 1rem;
            text-decoration: none;
        }

        &-img {
            height: 5rem;
            width: 5rem;
            border-radius: 50%;;
        }
    }
</style>