<template>
    <div class="bg-banner-top">
        <section class="banner-h" v-for="slider in sliders" :key="slider.id">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="text-banner">
                            <h4 class="sub-title">Welcome</h4>
                            <h1>
                                {{ slider.title }}
                            </h1>
                            <p>
                                {{ slider.description }}
                            </p>
                            <a href="#" class="btn">
                                <span>Contact Today</span>
                            </a>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="img-banner">
                            <div class="mil-hero-illustration">
                                <div class="mil-gradient"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="958" height="959" viewBox="0 0 958 959">
                                    <defs>
                                        <clipPath id="clip-path">
                                            <rect id="Rectangle_3720" data-name="Rectangle 3720" width="958" height="959"
                                                transform="translate(2284 123)" fill="#fffefe"></rect>
                                        </clipPath>
                                    </defs>
                                    <g id="Mask_Group_25" data-name="Mask Group 25" transform="translate(-2284 -123)"
                                        clip-path="url(#clip-path)">
                                        <path id="Path_7024" data-name="Path 7024"
                                            d="M116.478,29.331C320.56,4.556,676.039-18.468,839.536,40.994,1043.9,115.322,141,298.727,132.336,325.755s690.746,90.258,707.2,161.208C852.7,543.722,62.831,616.3,42.841,632.241s734.1,132.716,717.025,199.334S132.109,899.146,135.5,956.582,514.8,1095.1,514.8,1095.1"
                                            transform="translate(2222.807 322.827) rotate(-20)" fill="none" stroke="#000"
                                            stroke-linecap="round" stroke-width="110"></path>
                                    </g>
                                </svg>
                                <div class="mil-bg"></div>
                                <img :src="slider.imageUrl" :alt="slider.description" class="mil-photo">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>
  
<script>
import { ApolloQuery } from 'vue-apollo';
import gql from 'graphql-tag';

export default {
    components: {
        ApolloQuery,
    },
    data() {
        return {
            sliders: [], // Initialize with an empty array
        };
    },
    created() {
        this.$apollo
            .query({
                query: gql`
          query GetSliders {
            sliders {
              data {
                id
                description
                imageUrl
                title
              }
            }
          }
        `,
            })
            .then(response => {
                this.sliders = response.data.sliders.data;
            })
            .catch(error => {
                console.error('Error fetching sliders:', error);
            });
    },
    // ... other component options
};
</script>