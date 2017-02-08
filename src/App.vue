<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <router-link to="/">Quotes</router-link> |
                    <router-link to="/new-quote">New Quote</router-link> |
                    <router-link to="/signup">Signup</router-link>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        }
    }
</script>

<style>
    #app {
        margin: 30px;
    }
</style>
