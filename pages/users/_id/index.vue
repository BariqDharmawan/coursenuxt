<template>
    <div class="row justify-content-center py-5">
        <div class="col-md-8">
            <div class="card w-100 mb-3">
                <div class="card-body">
                    <h5 class="card-title">{{ user.name }}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{ user.username }}</h6>
                    <p class="card-text">
                        Street: {{ user.address.street }}
                    </p>
                    <p class="card-text">City: {{ user.address.city }}</p>
                </div>
                <div class="card-footer card-footer--between">
                    <a :href="'tel:' + user.phone" class="card-link">{{ user.phone }}</a>
                    <nuxt-link to="/users">Back to all user</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    validate({params}) {
        return /^\d+$/.test(params.id)
    },
    data() {
        return {
            user: ''
        }
    },
    async asyncData({params}) {
        let {data} = await axios.get(`http://jsonplaceholder.typicode.com/users/${params.id}`)
        return {user: data}
    },
    head() {
        return {
            title: this.user.name
        }
    }
}
</script>
