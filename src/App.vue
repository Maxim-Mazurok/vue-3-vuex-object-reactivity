<template>
  <h1>object.initialProperty = "{{ object.initialProperty }}"</h1>
  <button @click="chageInitialProperty">change object.initialProperty</button>

  <h1>object.newProperty = "{{ object.newProperty }}"</h1>
  <button @click="chageNewProperty">change object.newProperty</button>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

export default {
  setup() {
    const store = useStore();

    return {
      object: computed(() => store.state.object),
      // this also works:
      // object: store.state.object,

      chageInitialProperty: () =>
        store.dispatch("onSetObjectProperty", {
          prop: "initialProperty",
          val: new Date().toISOString(),
        }),

      chageNewProperty: () =>
        store.dispatch("onSetObjectProperty", {
          prop: "newProperty",
          val: new Date().toISOString(),
        }),
    };
  },
};
</script>
