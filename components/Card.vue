<template>
    <div class="card text-white bg-primary mb-3 w-100">
        <div class="card-header">
            {{ post.title }}
        </div>
        <div class="card-body">
            {{ post.body }}
        </div>
        <div class="card-footer card-footer--between">
            <nuxt-link to="" class="btn btn-link text-white">
                User id: {{ post.userId }}
            </nuxt-link>
            <nuxt-link class="btn btn-primary" 
            :to="{name: 'posts-id', params: {id: post.id}}">
                See post
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: Object
    }
}
</script>