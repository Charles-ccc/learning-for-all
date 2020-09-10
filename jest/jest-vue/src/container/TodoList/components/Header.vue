<template>
  <div>
    <input
      data-test='input'
      v-model="inputValue"
      @keyup.enter="addTodoItem"
    />
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      inputValue: ''
    }
  },
  props: {},
  methods: {
    addTodoItem () {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.inputValue = ''
      }
    }
  }
}
</script>
