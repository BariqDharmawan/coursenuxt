<template>
    <div>
        <h1>Indext post page</h1>
        <hr>
        <div class="container">
            <div class="row">
                <div class="col-lg-4" v-for="post in allPosts" :key="post.id">
                    <Card :post="post" />
                </div>
            </div>
        </div>
        <a href="javascript:void(0);" class="btn btn-link" v-scroll-to="{
            el: 'body',
            lazy: true,
            duration: 150,
            easing: 'ease-in'
        }">back to top</a>
    </div>
</template>

<script>
import axios from 'axios'
import Card from '@/components/Card'

export default {
    components: {
        Card
    },
    data() {
        return {
            posts: ''
        }
    },
    computed: {
        allPosts() {
            return this.$store.getters.posts
        }
    },
    async fetch({store}) {
        let {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
        store.dispatch('setPosts', data)
    },
    head: {
        title: 'List of Posts'
    }
}
</script>