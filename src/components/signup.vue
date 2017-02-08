<template>
    <form>
        <div class="form-group">
            <label for="username">Username</label>
            <input
                    type="text"
                    id="username"
                    name="username"
                    class="form-control"
                    v-model="username">
        </div>
        <div class="form-group">
            <label for="email">Mail</label>
            <input
                    type="email"
                    id="email"
                    name="email"
                    class="form-control"
                    v-model="email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input
                    type="password"
                    id="password"
                    name="password"
                    class="form-control"
                    v-model="password">
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="signup">Signup</button>
    </form>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                username: '',
                email: '',
                password: ''
            }
        },
        methods: {
            signup() {
                axios.post('http://laravel-ng2-vue.dev/api/user',
                    {name: this.username, email: this.email, password: this.password},
                    {headers: {'X-Requested-With': 'XMLHttpRequest'}})
                    .then(
                        (response) => console.log(response)
                    )
                    .catch(
                        (error) => console.log(error)
                    );
            }
        }
    }
</script>