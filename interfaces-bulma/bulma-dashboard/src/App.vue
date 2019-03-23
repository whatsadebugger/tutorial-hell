<template>
  <div id="app">
    <template v-if="$route.name !== 'login'">
      <nav class="navbar has-shadow">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="images/logo.png">
          </a>
          <div class="navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item">
              <small>Publishing at the speed of technology</small>
            </div>
          </div>
          <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
              <div class="navbar-link">John Doe</div>
              <div class="navbar-dropdown">
                <a class="navbar-item">
                  <div>
                    <span class="icon is-small">
                      <i class="fa fa-user-circle-o"></i>
                    </span>
                    Profile
                  </div>
                </a>
                <a class="navbar-item">
                  <div>
                    <span class="icon is-small">
                      <i class="fa fa-bug"></i>
                    </span>
                    Report bug
                  </div>
                </a>
                <a class="navbar-item">
                  <div>
                    <span class="icon is-small">
                      <i class="fa fa-sign-out"></i>
                    </span>
                    Sign Out
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section class="section">
        <div class="columns">
          <div class="column is-4-tablet is-3-desktop is-2-widescreen">
            <aside class="menu">
              <p class="menu-label">Menu</p>
              <ul class="menu-list">
                <li>
                  <router-link to="/dashboard">
                    <span class="icon">
                      <i class="fa fa-tachometer"></i>
                    </span>
                    Dashboard
                  </router-link>
                </li>
                <li>
                  <router-link to="/books">
                    <span class="icon">
                      <i class="fa fa-book"></i>
                    </span>
                    Books
                  </router-link>
                </li>
                <li>
                  <router-link to="/customers">
                    <span class="icon">
                      <i class="fa fa-address-book"></i>
                    </span>
                    Customers
                  </router-link>
                </li>
                <li>
                  <router-link to="/orders">
                    <span class="icon">
                      <i class="fa fa-file-text-o"></i>
                    </span>
                    Orders
                  </router-link>
                </li>
              </ul>
            </aside>
          </div>

          <main class="column">
            <router-view></router-view>
          </main>
        </div>
      </section>

    </template>
    <div v-else><router-view/></div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
  .is-rounded img {
      border-radius: 300000px;
  }
  figure {
      margin-right: 0.5rem;
  }
  .is-leveled {
      justify-content: space-between;
  }
</style>
