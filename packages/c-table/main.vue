<template>
  <div class="cyber-table">
    <vxe-table :data="data" v-bind="$attrs" :loading="state.loading">
      <vxe-column v-bind="getColumnProps(column)" v-for="(column, $ind) in columns" :key="'column' + $ind"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'
import {props} from './options'
import {Column} from './types'

export default defineComponent({
  props,
  setup(props) {
    const state = reactive({loading: false});
    function getColumnProps(column: Column) {
      return {
        field: column.field,
        title: column.title,
        width: column.width,
        type: column.type,
      };
    }
    return {
      state, getColumnProps
    }
  }
})
</script>


