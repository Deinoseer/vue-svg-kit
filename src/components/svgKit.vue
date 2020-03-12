<template>
  <div class="icons">
    <div
      class="svg_icon icons__item"
      :key="index"
      v-for="(icon, index) in iconsSvg"
    >
      <v-popover placement="top-center" trigger="hover">
        <component :is="icon.svg" />
        <template #popover>
          <div class="svg-icon__name">{{ icon.name }}</div>
        </template>
      </v-popover>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    iconsSvg() {
      let result = [];
      let requireComponent = require.context(
        "@/assets/svg?inline",
        true,
        /\.svg$/
      );
      requireComponent.keys().forEach(path => {
        const fileName = this.getFilename(path);
        const componentConfig = requireComponent(path);
        result.push({
          svg: componentConfig.default || componentConfig,
          name: fileName
        });
      });
      return result;
    }
  },
  methods: {
    getFilename(path) {
      return path.split("/").pop();
    }
  }
};
</script>

<style scoped lang="scss">
.icons {
  $icon-width: 32px;
  $icon-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 768px;
  margin: auto;

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: $icon-width;
    height: $icon-height;
    margin: 12px;

    svg {
      width: $icon-width;
      height: $icon-height;
    }
  }
}
</style>
