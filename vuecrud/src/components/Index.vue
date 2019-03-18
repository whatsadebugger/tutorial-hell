<template>
  <div>
    <table class="table is-striped is-hoverable">
      <tbody>
        <tr>
          <th>IMEI</th>
          <th>Item Name</th>
          <th>Item Price</th>
          <th>Actions</th>
        </tr>
        <tr v-for="(item, index) in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <router-link :to="{name: 'Edit', params: { id: item.id }}" class="button is-primary is-small">Edit</router-link>
          </td>
          <td>
            <button class="button is-danger is-small" @click="deleteItem(item.id, index)">Delete</button>
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
    deleteItem: function (imei, index) {
      console.log(index)
      let uri = 'http://localhost:3000/phones/' + imei
      this.axios.delete(uri).then(() => {
        console.log(this.items.splice(index, 1))
      })
    }
  }
}
</script>
