<template>
    <!-- Start Services-h -->
    <section class="services-h">
        <div class="container">
            <div class="row">

                <!-- Col -->
                <div class="col-md-12">
                    <div class="text-serv">
                        <div class="title title-center">
                            <h4 class="sub-title">What we can do for you?</h4>
                            <h3>Service we can help you with</h3>
                        </div>
                    </div>
                </div>
                <!-- /Col -->

                <!-- Col -->
                <div class="col-md-12">
                    <div class="services-inner">
                        <div ref="swiper" class="swiper services-slider">
                            <div class="swiper-wrapper">
                                <div  class="swiper-slide" v-for="service in services" :key="service.id">
                                    <div class="serv-block">
                                        <div class="block-inner">
                                            <div class="head-block">
                                                <div class="title-bock">
                                                    <h3>
                                                        {{ service.title }}
                                                    </h3>
                                                </div>
                                                <div class="icon">
                                                    <img :src="service.iconUrl" alt="#" loading="lazy" />
                                                </div>
                                            </div>

                                            <a href="#" class="more-btn">
                                                <div class="icon-btn">
                                                    <img src="@/assets/images/arrow.svg" alt="#" loading="lazy" />
                                                </div>
                                                <span>Read More</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Col -->
            </div>
        </div>
    </section>
    <!-- End Services-h -->
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
                el: '.swiper-pagination.services-pagination',
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
            services: [],
        };
    },
    created() {
        this.$apollo
            .query({
                query: gql`
                    query GetServices {
                        services{
                            data{
                                id
                                title
                                active
                                iconUrl
                            }
                        }
                    }
                `,
            })
            .then(response => {
                this.services = response.data.services.data;
            })
            .catch(error => {
                console.error('Error fetching services:', error);
            });
    },
};
</script>