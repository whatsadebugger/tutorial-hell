<template>
  <div>
    <div class="level">
      <div class="level-left">
        <h1 class="subtitile is-3">
          <span class="has-text-grey-light">Hello</span>
          <strong>John Doe</strong>
        </h1>
      </div>
      <div class="level-right">
        <div class="select">
          <select @change="changeStats">
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
            <option value="alltime">All time</option>
          </select>
        </div>
      </div>
    </div>

    <div class="columns is-multiline">
      <div class="column is-12-tablet is-6-desktop is-3-widescreen">
        <div class="notification is-link has-text">
          <p class="title is-1">{{ selectedStats.orders }}</p>
          <p class="subtitle is-4">Orders</p>
        </div>
      </div>

      <div class="column is-12-tablet is-6-desktop is-3-widescreen">
        <div class="notification is-link has-text">
          <p class="title is-1">${{ selectedStats.revenue }}</p>
          <p class="subtitle is-4">Revenue</p>
        </div>
      </div>

      <div class="column is-12-tablet is-6-desktop is-3-widescreen">
        <div class="notification is-link has-text">
          <p class="title is-1">{{ selectedStats.visitors }}</p>
          <p class="subtitle is-4">Visitors</p>
        </div>
      </div>

      <div class="column is-12-tablet is-6-desktop is-3-widescreen">
        <div class="notification is-link has-text">
          <p class="title is-1">{{ selectedStats.pageviews }}</p>
          <p class="subtitle is-4">Pageviews</p>
        </div>
      </div>

      <div class="column is-12-tablet is-6-desktop is-4-fullhd">
        <div class="card">
          <div class="card-content">
            <h2 class="title is-4">Latest orders</h2>

            <template v-for="(order, key) in orders">
              <div class="level" :key="order.id">
                <div class="level-left">
                  <div>
                    <p class="title is-5 is-marginless">
                      <router-link to="/edit-order">{{ order.id }}</router-link>
                    </p>
                    <small>
                      {{ order.date }} by
                      <router-link to="/edit-customer">{{ order.purchasedBy }}</router-link>
                    </small>
                  </div>
                </div>
                <div class="level-right">
                  <div class="has-text-right">
                    <p class="title is-5 is-marginless">${{ order.price }}</p>
                    <span class="tag" :class="order.status.class">{{ order.status.label }}</span>
                  </div>
                </div>
              </div>
            </template>

            <router-link class="button is-link is-outlined" to="/orders">View all orderrs</router-link>
          </div>
        </div>
      </div>

      <div class="column is-12-tablet is-6-desktop is-4-fullhd">
        <div class="card">
          <div class="card-content">
            <h2 class="title is-4">Most populer books</h2>

            <template v-for="(book, key) in books">
              <div class="media" :key="book.id">
                <div class="media-left is-marginless">
                  <p class="number">{{ key + 1 }}</p>
                </div>
                <div class="media-left">
                  <img :src="book.image" width="40">
                </div>
                <div class="media-content">
                  <p class="title is-5 is-spaced is-marginless">
                    <router-link to="/edit-book">{{ book.name }}</router-link>
                  </p>
                </div>
                <div class="media-right">{{ book.copiesSold }} sold</div>
              </div>
            </template>
            <router-link class="button is-link is-outlined" to="/books">View all books</router-link>
          </div>
        </div>
      </div>

      <div class="column is-12-tablet is-6-desktop is-4-fullhd">
        <div class="card">
          <div class="card-content">
            <h2 class="title is-4">Most loyal customers</h2>
            <template v-for="(customer, key) in customers">
              <div class="media" :key="customer.id">
                <div class="media-left is-marginless">
                  <p class="number">{{ key +1 }}</p>
                </div>
                <div class="media-content">
                  <p class="title is-5 is-spaced is-marginless">
                    <router-link to="/edit-customer">{{ customer.name}}</router-link>
                  </p>
                  <p class="subtitle is-6">{{ customer.country }}</p>
                </div>
                <div class="media-right">{{ customer.orderCount }} orders</div>
              </div>
            </template>

            <router-link class="button is-link is-outlined" to="/customers">View all customers</router-link>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      customers: [
        {
          id: 1,
          name: "John Miller",
          country: "United States",
          orderCount: 7
        },
        {
          id: 2,
          name: "Samantha Rogers",
          country: "United Kingdom",
          orderCount: 5
        },
        {
          id: 3,
          name: "Mikko Mikkonen",
          country: "Finland",
          orderCount: 2
        }
      ],
      books: [
        {
          id: 1,
          name: "Learning Swift",
          copiesSold: 146,
          image: "src/assets/images/swift.jpg"
        },
        {
          id: 2,
          name: "TensorFlow for Machine Intelligence",
          copiesSold: 56,
          image: "src/assets/images/tensorflow.jpg"
        },
        {
          id: 3,
          name: "Choosing a Javascript Framework",
          copiesSold: 47,
          image: "src/assets/images/js-framework.jpg"
        }
      ],
      orders: [
        {
          id: 787352,
          date: "Nov 18, 17:38",
          purchasedBy: "John Miller",
          price: "56.98",
          status: {
            label: "In Progress",
            class: "is-warning"
          }
        },
        {
          id: 289050,
          date: "Nov 16, 11:45",
          purchasedBy: "Samantha Rogers",
          price: "22.99",
          status: {
            label: "Successful",
            class: "is-success"
          }
        },
        {
          id: 918478,
          date: "Nov 12, 21:57",
          purchasedBy: "Mikko Mikkonen",
          price: "22.99",
          status: {
            label: "failed",
            class: "is-danger"
          }
        }
      ],
      stats: {
        today: {
          orders: "232",
          revenue: "7,648",
          visitors: "1,678",
          pageviews: "20,756"
        },
        yesterday: {
          orders: "200",
          revenue: "5,465",
          visitors: "1,400",
          pageviews: "18,556"
        },
        week: {
          orders: "200",
          revenue: "5,465",
          visitors: "1,400",
          pageviews: "18,556"
        },
        month: {
          orders: "200",
          revenue: "5,465",
          visitors: "1,400",
          pageviews: "18,556"
        },
        alltime: {
          orders: "1000",
          revenue: "55,465",
          visitors: "10,400",
          pageviews: "87,999"
        }
      },
      selectedStats: {}
    };
  },
  mounted: function() {
    this.selectedStats = this.stats.today;
  },
  methods: {
    changeStats(event) {
      this.selectedStats = this.stats[event.target.value];
    }
  }
};
</script>

<style>
</style>

