
<template>
    <section class="breadcrumb">
        <div class="overlay-img">
            <img src="../../assets/images/breadcurmb.jpg" alt="#" />
        </div>
        <div class="container">
            <div class="row">
                <!-- Col -->
                <div class="col-md-12">
                    <div class="text-bread" v-for="(breadcrumb, index) in breadcrumbs" :key="index">
                        <h2>{{ breadcrumb }}</h2>
                        <ul>
                            <li>
                                <a href="/">{{ $t('home') }}</a>
                            </li>
                            <li>
                                <span>{{ breadcrumb }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- /Col -->
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    data() {
        return {
            breadcrumbs: [], // Array to store the breadcrumb titles
        };
    },
    mounted() {
        this.updateBreadcrumbs();
    },
    watch: {
        $route() {
            this.updateBreadcrumbs();
        },
    },
    methods: {
        updateBreadcrumbs() {
            this.breadcrumbs = [];
            const matchedRoutes = this.$route.matched;

            for (let i = 0; i < matchedRoutes.length; i++) {
                const route = matchedRoutes[i];
                if (route.meta && route.meta.breadcrumb) {
                    this.breadcrumbs.push(route.meta.breadcrumb);
                }
            }
        },
    },
};
</script>
  
<style scoped>
/* Add your breadcrumb styling here */
</style>
  

