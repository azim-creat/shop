<template>
  <div class="view-toggle">
    <div
      class="view-toggle-item"
      @click="setViewMode('grid')"
      :class="{ active:( view_mode === 'grid') }"
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="3.94737" height="3.94737" fill="white" />
        <rect y="5.52637" width="3.94737" height="3.94737" fill="white" />
        <rect y="11.0527" width="3.94737" height="3.94737" fill="white" />
        <rect x="5.52637" width="3.94737" height="3.94737" fill="white" />
        <rect x="5.52637" y="5.52637" width="3.94737" height="3.94737" fill="white" />
        <rect x="5.52637" y="11.0527" width="3.94737" height="3.94737" fill="white" />
        <rect x="11.0527" width="3.94737" height="3.94737" fill="white" />
        <rect x="11.0527" y="5.52637" width="3.94737" height="3.94737" fill="white" />
        <rect x="11.0527" y="11.0527" width="3.94737" height="3.94737" fill="white" />
      </svg>
    </div>
    <div
      class="view-toggle-item"
      @click="setViewMode('single')"
      :class="{ active:( view_mode === 'single') }"
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.85" y="0.85" width="15.3" height="15.3" stroke="black" stroke-width="1.7" />
      </svg>
    </div>
    <div
      class="view-toggle-item"
      @click="setViewMode('list')"
      :class="{ active:( view_mode === 'list')}"
    >
      <svg
        width="21"
        height="15"
        viewBox="0 0 21 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.631592" width="3.94737" height="3.94737" rx="1.57895" fill="black" />
        <rect x="0.631592" y="5.52637" width="3.94737" height="3.94737" rx="1.57895" fill="black" />
        <rect x="0.631592" y="11.0527" width="3.94737" height="3.94737" rx="1.57895" fill="black" />
        <rect x="6.15796" y="0.789551" width="14.2105" height="2.36842" rx="0.789474" fill="black" />
        <rect x="6.15796" y="6.31592" width="14.2105" height="2.36842" rx="0.789474" fill="black" />
        <rect x="6.15796" y="11.8423" width="14.2105" height="2.36842" rx="0.789474" fill="black" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewToggle",
  props: {
    setViewMode: Function,
    view_mode: String
  },
  data() {
   return{
    //  "view_mode": this.view_mode,
   } 
  },
  mounted() {
    // this.view_mode
  },
};
</script>

<style  scoped>
/* переключатель вида */
.view-toggle {
  margin: 14px auto;
  border: 2px black solid;
  border-radius: 5px;
  display: flex;
}

/* иконка переключателя*/
.view-toggle-item {
  width: 33.3%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
}
.view-toggle-item * {
  color: black;
  fill: black;
}
.view-toggle-item.active * {
  color: white;
  fill: white;
}
.view-toggle-item.active {
  background-color: black;
}
</style>