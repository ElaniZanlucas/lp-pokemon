<template>
  <v-row>
    <v-col
      cols="12"
      v-for="(stat, index) in pokemon.stats"
      :key="stat.stat.name"
    >
      <v-col
        cols="3"
      >
        {{ transform_name(stat.stat.name) }} {{ stat.base_stat }}
      </v-col>

      <v-chip
        :color="color[index]"
        label
        class="d-flex justify-center text-center white--text"
      >
        {{ transform_name(stat.stat.name) }} {{ stat.base_stat }}
      </v-chip>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      color: [
        "red",
        "orange darken-1",
        "yellow darken-2",
        "blue",
        "green",
        "pink",
      ],
    };
  },
  props: {
    pokemon: Object,
  },
  methods: {
    transform_name(name) {
      if (name.includes("-")) {
        let parts = name.split("-");
        return `${parts[0].charAt(0).toUpperCase()} ${parts[1]
          .charAt(0)
          .toUpperCase()}${parts[1].slice(1)}`;
      }

      return name.charAt(0).toUpperCase() + name.slice(1);
    },
  },
};
</script>

<style></style>