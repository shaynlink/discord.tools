<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <NuxtLink to="/" class="navbar-item">
                <h1 class="title is-5">Discord.tools</h1>
            </NuxtLink>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <NuxtLink to="/" class="navbar-item">
                    Home
                </NuxtLink>

                <NuxtLink to="/permissions" class="navbar-item">
                    Permissions
                </NuxtLink>

                <NuxtLink to="/intents" class="navbar-item">
                    Intents
                </NuxtLink>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>