<template>
    <main class="main-content">
        <BannerTop></BannerTop>

        <AboutUs></AboutUs>

        <Vision></Vision>

        <Services></Services>

        <WhyChoose></WhyChoose>

        <Partners />

        <Projects />

        <Counter />

        <NewProjects />
        
        <Testimonial />
        
    </main>
</template>


<script>
import BannerTop from "./sections/banner-top"
import AboutUs from "./sections/aboutUs"
import Vision from "./sections/vision"
import Services from "./sections/services"
import WhyChoose from "./sections/why-choose"
import Partners from "./sections/partners"
import Projects from "./sections/projects"
import Counter from "./sections/counter"
import NewProjects from "./sections/newProjects"
import Testimonial from "./sections/testimonial"

export default {
    name: 'App',
    components: {
        BannerTop,
        AboutUs,
        Vision,
        Services,
        WhyChoose,
        Partners,
        Projects,
        Counter,
        NewProjects,
        Testimonial,
    }
}
</script>