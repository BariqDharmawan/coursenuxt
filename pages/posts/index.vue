<template>
    <div>
        <h1>Indext post page</h1>
        <hr>
        <div class="container">
            <div class="row">
                <div class="col-lg-4" v-for="post in posts" :key="post.id">
                    <Card :post="post" />
                </div>
            </div>
        </div>
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
            posts: []
        }
    },
    async asyncData() {
        let {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return {posts: data}
    }
}
</script>