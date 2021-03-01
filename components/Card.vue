<template>
    <div class="card text-white bg-primary mb-3 w-100">
        <div class="card-header">
            {{ post.title }}
        </div>
        <div class="card-body">
            <p class="card-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente libero id nobis molestias praesentium minus, pariatur dolores reprehenderit voluptatibus debitis mollitia obcaecati quo? Neque ipsa non dolorum voluptate unde tempora.
            </p>
        </div>
        <div class="card-footer">
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