<template>
    <div class="box">
        <div class="title">
            <h1 class="vue">Laravel8 + Vue 3</h1>
        </div>
        <div class="logos">
            <img src="/assets/images/mr_cat.jpg" width="240" alt="" />
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

