<template>
  <div>
    <!-- Start Counter-h -->
    <section class="counter counter-h">
      <div class="container">
        <div class="row">
          <!-- Col -->
          <div v-for="counter in counters" :key="counter.id" class="col-md-3">
            <div class="count-block">
              <h3 class="counter-item">
                <span>
                  {{ counter.position }}
                </span>
                <!-- <vue-countup :start-val="0" :end-val="" :duration="1" :autoplay="true" :options="countupOptions"></vue-countup> -->
              </h3>
              <h4>{{ counter.title }}</h4>
            </div>
          </div>
          <!-- /Col -->
        </div>
      </div>
    </section>
    <!-- End Counter-h -->
  </div>
</template>

<script>
import { ApolloQuery } from 'vue-apollo';
import gql from 'graphql-tag';
import VueCountUp from 'vue-countup-v2';

export default {
  components: {
    ApolloQuery,
    VueCountUp,
  },
  data() {
    return {
      counters: [],
      countupOptions: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
      },
    };
  },
  created() {
    this.$apollo
      .query({
        query: gql`
          query GetCounters {
            counters {
              data {
                id
                title
                position
              }
            }
          }
        `,
      })
      .then((response) => {
        this.counters = response.data.counters.data;
      })
      .catch((error) => {
        console.error('Error fetching counters:', error);
      });
  },
};
</script>
