<template>
    <nav class="side-bar">
        <div class=side-bar-header>
            <h1>Trailfinders SC</h1>
        </div>
        <ul class="side-bar-links">
            <li><router-link :to="{ name: 'Profile'}">Profile</router-link></li>
            <li><router-link :to="{ name: 'Events' }">Events</router-link></li>
            <li><router-link :to="{ name: 'Gallery' }">Gallery</router-link></li>
            <li><router-link :to="{ name: 'Menus' }">Menus</router-link></li>
            <li><router-link :to="{ name: 'Testimonials' }">Testimonials</router-link></li>
            <li><router-link :to="{ name: 'Users' }">Users</router-link></li>
            <li><router-link :to="{ name: 'Vacancies' }">Vacancies</router-link></li>
            <li><router-link :to="{ name: 'Venues' }">Venues</router-link></li>
        </ul>
    </nav>
</template>

<script>
    export default {
    
    }
</script>

<style scoped lang="scss">
    .side-bar {
        width: 20%;
        background-color: #2dce89;
        display: flex;
        flex-direction: column;
        padding: 2rem;
        border-radius: .5rem;
        color: #fff;
    }

    .side-bar-header {
        margin-bottom: 2rem;
    }

    .side-bar-links {
        list-style: none;

        li {
            margin-bottom: 1rem;
        }

        a {
            font-size: 1.4rem;
            color: #fff;
            text-decoration: none;
        }
    }
</style>