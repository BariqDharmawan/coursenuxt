<template>
    <div>
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
        <nuxt-link to="/posts">Back to all post</nuxt-link>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            post: ''
        }
    },
    async asyncData({params}) {
        let {data} = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${params.id}`
        )
        return {post: data}
    },
    head() {
        return {
            title: this.post.title
        }
    }
}
</script>