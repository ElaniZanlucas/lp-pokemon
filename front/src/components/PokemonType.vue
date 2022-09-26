<template>
  <v-chip :color="color" label class="mr-2 white--text rounded-xl chip-types"> {{ name }}</v-chip>
</template>

<script>
export default {
  props: {
    type: String,
  },
  computed: {
    name() {
      return this.type.charAt(0).toUpperCase() + this.type.slice(1);
    },
    color() {
      switch (this.type) {
        case "electric":
          return "#EED535";
        case "grass":
          return "#9BCC50";
        case "water":
          return "#4592C4";
        case "poison":
          return "#B97FC9";
        case "psychic":
          return "#F366B9";
        case "ground":
          return "lime darken-3";
        case "fire":
          return "#FD7D24";
        case "ghost":
          return "#7B62A3";
        case "rock":
          return "#A38C21";
        case "bug":
          return "#729F3F";
        case "fairy":
          return "#FDB9E9";
        case "flying":
          return "teal";
        case "normal":
          return "#A4ACAF";
        case "fighting":
          return "#D56723";
        case "ice":
          return "#51C4E7";
        case "steel":
          return "#9EB7B8";
        case "dark":
          return "#707070";
        case "dragon":
          return "purple";
        default:
          return "grey";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .chip-types {
    width: 5.6em;
    display: flex;
    justify-content: center;
    margin-bottom: 0.4em;
  }
</style>