<template>
  <v-row>
    <v-col cols="12" v-for="stat in pokemon.stats" :key="stat.stat.name">
      <v-col class="col-stats">
        <div class="div-stats">
          <p class="p-stats">
            {{ transform_name(stat.stat.name) }}
          </p>
          <p>
            {{ stat.base_stat }}
          </p>
        </div>
        <v-progress-linear
          :value="stat.base_stat"
          :color="stat.base_stat >= 50 ? '#4BC07A' : '#FB6C6C'"
          background-color="#CBE4EA"
        ></v-progress-linear>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'stats',
  props: {
    pokemon: Object,
    doubleColor: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    transform_name(name) {
      if (name.includes('-')) {
        let parts = name.split('-')
        return `${parts[0].charAt(0).toUpperCase()} ${parts[1]
          .charAt(0)
          .toUpperCase()}${parts[1].slice(1)}`
      }

      return name.charAt(0).toUpperCase() + name.slice(1)
    }
  }
}
</script>

<style>
.col-stats {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 1.6em;
}

.div-stats {
  display: flex;
  align-items: flex-start;
  height: 2em;
  width: 11.2em;
  justify-content: space-between;
  margin-right: 1em;
  color: #58585a;
}

.p-stats {
  font-family: 'PixAntiqua', sans-serif;
}
</style>
