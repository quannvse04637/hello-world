<template>
    <div id="elements">
        <app-header></app-header>
        <app-wrapper></app-wrapper>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from "./header/Header.vue";
import Wrapper from "./wrapper/WrapperElements.vue";
import Footer from "./footer/Footer.vue";

export default {
    name: "elements",
    components: {
        appHeader: Header,
        appWrapper: Wrapper,
        appFooter: Footer,
    }
}
</script>

<style scoped>

</style>
