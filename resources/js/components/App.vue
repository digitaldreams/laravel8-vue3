<template>
    <div class="box">
        <div class="title">
            <h1 class="vue">Laravel8 + Vue 3</h1>
        </div>
        <div class="logos">
            <img src="/assets/images/mr_cat.jpg" width="240" alt="" />
        </div>
        <div class="user-list">
            <p v-for="user in users" :key="user.id">{{user.id}}. {{user.name}}</p>
        </div>
    </div>
</template>

<script>
import {getUsers} from "../services/UserService";

export default {
    data: () => ({
        users: []
    }),
    async mounted() {
        this.users = await getUsers()
    },
};
</script>
<style >
.box {
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 100vh;
    justify-content: center;
    align-content: center;
}
</style>

