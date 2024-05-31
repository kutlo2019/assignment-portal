<template>
<div class="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
  <div class="offcanvas-md offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
      <ul class="nav flex-column">
        <li class="nav-item" v-for="item in navItems">
          <router-link
            :to="item.link"
            :aria-current="item.current"
            class="nav-link d-flex align-items-center gap-2 active"
          >
            <svg class="bi"><use :xlink:href="item.svg"/></svg>
            {{ item.name }}
          </router-link>
        </li>
      </ul>

      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
        <span>Saved reports</span>
        <a class="link-secondary" href="#" aria-label="Add a new report">
          <svg class="bi"><use xlink:href="#plus-circle"/></svg>
        </a>
      </h6>

      <hr class="my-3">

      <ul class="nav flex-column mb-auto">
        <li class="nav-item">
          <a class="nav-link d-flex align-items-center gap-2" href="#">
            <svg class="bi"><use :xlink:href="settingsObj.svg"/></svg>
            {{ settingsObj.name }}
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link d-flex align-items-center gap-2" href="#">
            <svg class="bi"><use xlink:href="#door-closed"/></svg>
            Sign out
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
const navItems = [
  {
    name: "Dashboard",
    link: {name: "StudentDashboard"},
    svg: "#house-fill",
    current: true,
  },
  {
    name: "Assignments",
    link: {name: "StudentAssignments"},
    svg: "#file-earmark",
    current: false,
  },
  {
    name: "Grades",
    link: {name: "StudentGrades"},
    svg: "#graph-up",
    current: false,
  }
];

const settingsObj = {
  name: "Profile",
  link: {name: "StudentProfile"},
  svg: "#gear-wide-connected"
}
</script>

<style>
/*
 * Sidebar
 */

 @media (min-width: 768px) {
  .sidebar .offcanvas-lg {
    position: -webkit-sticky;
    position: sticky;
    top: 48px;
  }
  .navbar-search {
    display: block;
  }
}

.sidebar .nav-link {
  font-size: .875rem;
  font-weight: 500;
}

.sidebar .nav-link.active {
  color: #2470dc;
}

.sidebar-heading {
  font-size: .75rem;
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: .75rem;
  padding-bottom: .75rem;
  background-color: rgba(0, 0, 0, .25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar .form-control {
  padding: .75rem 1rem;
}

.bi {
  display: inline-block;
  width: 1rem;
  height: 1rem;
}
</style>