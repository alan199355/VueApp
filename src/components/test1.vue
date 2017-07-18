<template>
  <div  class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ msg2 }}</h2>
    <slot>
      if no solt
    </slot>
    <p @click="sayReady()" v-demo:foo.a.b="msg"></p>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data() {
    return {
      msg: 'test1.vue',
    };
  },
  props: {
    msg2: String,
  },
  ready() {
    this.sayReady();
    console.log('emit');
  },
  methods: {
    sayReady() {
      this.$emit('child-ready', 'Hello');
      this.msg="yeqiang111";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
