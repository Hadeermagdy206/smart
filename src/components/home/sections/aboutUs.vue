<template>
    <!-- Start About-h -->
    <section class="about-h">
        <div class="container">
            <div class="row justify-content-between align-items-center">

                <!-- Col -->
                <div class="col-md-5">
                    <div class="mil-collage-3 mil-appearance">
                        <div class="mil-image-1 mil-appearance">
                            <div class="mil-just-image mil-image-square">
                                <img src="assets/images/20.jpg" alt="img" class="mil-scale-img" data-value-1="1"
                                    data-value-2="1.2" style="object-position: top left">
                            </div>
                        </div>
                        <div class="mil-image-2 mil-appearance">
                            <div class="mil-just-image mil-image-square">
                                <img src="assets/images/6.jpg" alt="img">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Col -->

                <!-- Col -->
                <div class="col-md-6">
                    <div class="text-about">
                        <div class="title">
                            <h4 class="sub-title">Who we are?</h4>
                            <h3>Digital Marketing Agency</h3>
                        </div>
                        <p>
                            We are more than a marketing and sales agency. We are a strategic partner that works with you to
                            develop a plan. We take the time to get to know you, your business, and the market in which you
                            operate. Ultimately, we want to drive growth for your organization by providing top-tier
                            services and expertise at every stage of the relationship.
                        </p>
                        <a href="#" class="btn">
                            <span>See More</span>
                        </a>
                    </div>
                </div>
                <!-- /Col -->
            </div>
        </div>
    </section>
    <!-- End About-h -->
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