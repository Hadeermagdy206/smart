<template>
    <main class="main-content">
        <breadCrumb />

        <!-- Start Services-page -->
        <section class="services-page body-inner">
            <div class="container">
                <div class="row">
                    <!-- Col -->
                    <div class="col-md-4" v-for="service in services" :key="service.id">
                        <div class="service-item-three text-center">
                            <div class="service-item-three__img">
                                <img :src="service.imageUrl" alt="service.description" />
                            </div>

                            <div class="service-item-three__content">
                                <h4 class="tp-service-sm-title">
                                    <a href="#">
                                        {{ service.title }}
                                    </a>
                                </h4>
                                <div class="des">
                                    <p>
                                        {{ service.description }}
                                    </p>
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
                    <!-- /Col -->

                    <!-- Col -->
                    <div class="col-md-12">
                        <!-- Pagination -->
                        <paginate
                            :page-count="totalPages"
                            :click-handler="onPageChange"
                            :prev-text="'Previous'"
                            :next-text="'Next'" 
                            class="paginate-pages-h">
                        </paginate>
                    </div>
                    <!-- /Col -->
                </div>
            </div>
        </section>
        <!-- End Services-page -->

    </main>
</template>


<script>
import breadCrumb from "../breadcrumb/index"
import { ApolloQuery } from 'vue-apollo';
import gql from 'graphql-tag';
import Paginate from 'vuejs-paginate';

export default {
  components: {
    breadCrumb,
    ApolloQuery,
    Paginate,
  },
  data() {
    return {
      services: [],
      currentPage: 1,
      pageSize: 4, // Number of services per page
    };
  },
  computed: {
    totalServices() {
      return this.services.length;
    },
    totalPages() {
      return Math.ceil(this.totalServices / this.pageSize);
    },
    displayedServices() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.services.slice(startIndex, endIndex);
    },
  },
  created() {
    this.fetchServices();
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page;
      this.fetchServices();
    },
    fetchServices() {
      this.$apollo
        .query({
          query: gql`
            query GetServices($page: Int!) {
              services(page: $page) {
                paginatorInfo {
                  count
                  currentPage
                  firstItem
                  hasMorePages
                  lastItem
                  lastPage
                  perPage
                  total
                }
                data {
                  id
                  position
                  title
                  description
                  imageUrl
                }
              }
            }
          `,
          variables: {
            page: this.currentPage,
          },
        })
        .then(response => {
          this.services = response.data.services.data;
        })
        .catch(error => {
          console.error('Error fetching services:', error);
        });
    },
  },
};
</script>