<template>
    <div>
        <div class="container pt-4">
            <div class="mb-4">
                <no-ssr>
                    <label for="category-post" class="mb-2">
                        Choose category to see
                    </label>
                    <v-select v-model="selected" id="category-post" 
                    placeholder="Select category"
                    :options="['foo', 'bar']"></v-select>
                </no-ssr>
            </div>
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
import Card from '@/components/Card'

export default {
    components: {
        Card
    },
    data() {
        return {
            posts: '',
            selected: ''
        }
    },
    computed: {
        allPosts() {
            return this.$store.getters.posts
        }
    },
    head: {
        title: 'List of Posts'
    }
}
</script>