// Index.vue
<template>
  <div>
    <h1>Phones</h1>

    <table class="table table-hover">
      <thead>
        <tr>
          <td>IMEI</td>
          <td>Item Name</td>
          <td>Item Price</td>
          <td>Actions</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <router-link :to="{name: 'Edit', params: { id: item.id }}" class="btn btn-primary">Edit</router-link>
          </td>
          <td>
            <button class="btn btn-danger" @click="deleteItem(item.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: []
    }
  },
  created: function () {
    this.fetchItems()
  },
  methods: {
    fetchItems () {
      let uri = 'http://localhost:3000/phones'
      this.axios.get(uri).then(response => {
        this.items = response.data
      })
    },
    deleteItem (imei) {
      let uri = 'http://localhost:3000/phones' + imei
      this.axios.delete(uri)
    }
  }
}
</script>
