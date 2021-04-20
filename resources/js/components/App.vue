<template>
    <div class="flex flex--column flex--align-center flex--justify-center">
        <div class="logos">
            <img src="../../static/img/laravel.png" width="240" alt="" />
            <img src="../../static/img/vue.png" width="240" alt="" />
        </div>

        <div class="title">
            <h1 class="vue">Vue 3</h1>

            <h1 class="plus">+</h1>
            <h1 class="laravel">Laravel 8</h1>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("Component mounted.");
    },
};
</script>

