<template>
    <!-- Start Projects-h -->
    <section class="projects-h">
        <div class="container-fluid">
            <div class="row">
                <!-- Col -->
                <div class="col-md-12">
                    <div class="title title-center">
                        <h3>Our Projects</h3>
                    </div>
                    <div ref="swiper" class="swiper projects-slider">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="project in projects" :key="project.id">
                                <a href="#" class="pro-block" rel="#">
                                    <div class="img-block">
                                        <img :src="project.imageUrl" :alt="project.small_description" loading="lazy" />
                                        <span class="showNow">Show Project</span>
                                    </div>
                                    <div class="details">
                                        <span>{{ project.position }}</span>
                                        <h3 class="name">{{ project.title }}</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- /Col -->
            </div>
        </div>
    </section>
    <!-- End Projects-h -->
</template>

<script>
import { ApolloQuery } from 'vue-apollo';
import gql from 'graphql-tag';
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
    components: {
        ApolloQuery,
        Swiper,
    },
    mounted() {
        new Swiper(this.$refs.swiper, {
            loop: true,
            speed: 1000,
            slidesPerView: 1.6,
            spaceBetween: 10,
            modules: [Navigation, Pagination],
            pagination: {
                el: '.swiper-pagination.projects-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            breakpoints: {
                480: {
                    slidesPerView: 1.2,
                    spaceBetween: 10
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                1180: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                }
            },
        })
    },
    data() {
        return {
            projects: [],
        };
    },
    created() {
        this.$apollo
            .query({
                query: gql`
                    query GetProjects {
                        projects{
                            data{
                                id
      title
      description
      small_description
      position
      imageUrl
                            }
                        }
                    }
                `,
            })
            .then(response => {
                this.projects = response.data.projects.data;
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
            });
    },
};
</script>