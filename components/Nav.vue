<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <nuxt-link class="navbar-brand" to="/" exact>Navbar</nuxt-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <nuxt-link class="nav-link active" to="/"
                exact-active-class="active" exact>
                    Home
                </nuxt-link>
                <nuxt-link class="nav-link" to="/users">
                    Users
                </nuxt-link>
                <nuxt-link class="nav-link" to="/posts">
                    Posts
                </nuxt-link>
            </div>
            </div>
        </div>
    </nav>
</template>