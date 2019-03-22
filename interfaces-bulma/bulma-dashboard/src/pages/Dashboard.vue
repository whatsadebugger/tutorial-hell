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
      <div class="column is-12-tablet is-6-desktop is 3-widescreen">
        <div class="notification is-link has-text">
          <p class="title is-1">{{ selectedStats.orders }}</p>
          <p class="subtitle is-4">Orders</p>
        </div>
      </div>
      <div class="column is-12-tablet is-6-desktop is 3-widescreen">
        <div class="notification is-link has-text">
          <p class="title is-1">${{ selectedStats.revenue }}</p>
          <p class="subtitle is-4">Revenue</p>
        </div>
      </div>
      <div class="column is-12-tablet is-6-desktop is 3-widescreen">
        <div class="notification is-link has-text">
          <p class="title is-1">{{ selectedStats.visitors }}</p>
          <p class="subtitle is-4">Visitors</p>
        </div>
      </div>
      <div class="column is-12-tablet is-6-desktop is 3-widescreen">
        <div class="notification is-link has-text">
          <p class="title is-1">{{ selectedStats.pageviews }}</p>
          <p class="subtitle is-4">Pageviews</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard"
};
</script>

<style>
</style>

