<template>
    <div>
        <h1>Manage users</h1>
        <input v-model="id" type="text" required/>
        <button @click="loadUser">load user</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: ''
        }
    },
    methods: {
        loadUser() {
            this.$router.push(`/users/${this.id}`)
        }
    }
}

</script>
