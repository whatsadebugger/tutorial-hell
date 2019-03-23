<template>
  <div class="column">
    <h1 class="title">Books</h1>
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <p class="subtitle is-5">
            <strong>6</strong> books
          </p>
        </div>
        <p class="level-item">
          <a class="button is-success" @click="showNewModal=true">New</a>
        </p>

        <div class="level-item is-hidden-tablet-only">
          <div class="field has-addons">
            <p class="control">
              <input
                type="text"
                class="input"
                placeholder="Book name, ISBN..."
                v-model="searchWord"
                @keyup="searchBooks"
              >
            </p>
            <p class="control" @click="searchBooks">
              <button class="button">Search</button>
            </p>
          </div>
        </div>
      </div>

      <div class="level-right">
        <div class="level-item">Order By</div>
        <div class="level-item">
          <div class="select">
            <select @change="sortBooks">
              <option value="publishDate">Publish Date</option>
              <option value="price">Price</option>
              <option value="pageCount">Page count</option>
            </select>
          </div>
        </div>
      </div>
    </nav>

    <div class="columns is-multiline">
      <template v-for="(book,index) in books">
        <div class="column is-12-tablet is-6-desktop is-4-widescreen" :key="book.ISBN">
          <article class="box">
            <div class="media">
              <aside class="media-left">
                <img :src="book.coverImage" width="80">
              </aside>

              <div class="media-content">
                <p class="title is-5 is-spaced is-marginless">
                  <a @click="showEditModal">{{ book.title }}</a>
                </p>
                <p class="subtitle is-marginless">{{ book.price }}</p>
                <div class="content is-small">
                  {{ book.pageCount }}
                  <br>
                  ISBN: {{ book.ISBN }}
                  <br>
                  <a @click="editBook(book)">Edit</a>
                  <span>.</span>
                  <a @click="removeBook(index)">Delete</a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </template>
    </div>

    <nav class="pagination">
      <a class="pagination-previous">Previous</a>
      <a class="pagination-next">Next page</a>
      <ul class="pagination-list">
        <li>
          <a class="pagination-link">1</a>
        </li>
        <li>
          <span class="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <a class="pagination-link">45</a>
        </li>
        <li>
          <a class="pagination-link is-current">46</a>
        </li>
        <li>
          <a class="pagination-link">47</a>
        </li>
        <li>
          <span class="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <a class="pagination-link">86</a>
        </li>
      </ul>
    </nav>

    <template>
      <div class="modal" :class="{'is-active': showNewModal}">
        <div class="modal-background" @click="resetNewBook"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title"> title</p>
            <button class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body">

          </section>
          <footer class="modal-card-foot">
            <button class="button is-success">Save changes</button>
            <button class="button is-danger">Cancel</button>
          </footer>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Collect from "collect.js";

export default {
  name: "Books",
  data() {
    return {
      books: [
        {
          title: "TensorFlow For Machine Intelligence",
          price: "$22.99",
          pageCount: 270,
          ISBN: "9781939902351",
          coverImage: "src/assets/images/tensorflow.jpg",
          publishDate: 2017
        },
        {
          title: "Docker in Production",
          price: "$22.99",
          pageCount: 156,
          ISBN: "9781939902184",
          coverImage: "src/assets/images/docker.jpg",
          publishDate: 2015
        },
        {
          title: "Learning Swift",
          price: "$24.99",
          pageCount: 342,
          ISBN: "9781939902115",
          coverImage: "src/assets/images/swift.jpg",
          publishDate: 2015
        },
        {
          title: "Choosing a JavaScript Framework",
          price: "$19.99",
          pageCount: 270,
          ISBN: "9781939902092",
          coverImage: "src/assets/images/js-framework.jpg",
          publishDate: 2015
        },
        {
          title: "Developing a Gulp.js Edge",
          price: "$15.99",
          pageCount: 134,
          ISBN: "9781939902146",
          coverImage: "src/assets/images/gulp.jpg",
          publishDate: 2014
        }
      ],
      allBooks: [
        {
          title: "TensorFlow For Machine Intelligence",
          price: "$22.99",
          pageCount: 270,
          ISBN: "9781939902351",
          coverImage: "src/assets/images/tensorflow.jpg",
          publishDate: 2017
        },
        {
          title: "Docker in Production",
          price: "$22.99",
          pageCount: 156,
          ISBN: "9781939902184",
          coverImage: "src/assets/images/docker.jpg",
          publishDate: 2015
        },
        {
          title: "Learning Swift",
          price: "$24.99",
          pageCount: 342,
          ISBN: "9781939902115",
          coverImage: "src/assets/images/swift.jpg",
          publishDate: 2015
        },
        {
          title: "Choosing a JavaScript Framework",
          price: "$19.99",
          pageCount: 270,
          ISBN: "9781939902092",
          coverImage: "src/assets/images/js-framework.jpg",
          publishDate: 2015
        },
        {
          title: "Developing a Gulp.js Edge",
          price: "$15.99",
          pageCount: 134,
          ISBN: "9781939902146",
          coverImage: "src/assets/images/gulp.jpg",
          publishDate: 2014
        }
      ],
      showEditModal: false,
      showNewModal: false,
      searchWord: ""
    };
  },
  methods: {
    editBook() {},
    removeBook(index) {
      this.books.splice(index, 1);
    },
    searchBooks() {
      if (!this.searchWord) {
        this.books = Object.assign([], this.allBooks);
      } else {
        this.books = this.books.filter(book => {
          return book.title
            .toLowerCase()
            .includes(this.searchWord.toLowerCase());
        });
      }
    },
    sortBooks(event) {
      let selectValue = String(event.target.value);
      let collection = Collect(this.books);
      let sortedBooks = collection.sortBy(selectValue);
      this.books = Object.assign([], sortedBooks.all());
    },
    resetNewBook() {
      this.showNewModal = false;
    }
  }
};
</script>

<style>
</style>

