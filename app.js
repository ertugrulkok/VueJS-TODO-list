const app = Vue.createApp({
  data() {
    return {
   
      todos : [],
      enteredTodo: ""
    };
  },
  methods: {
    addTodo() {
       this.todos.push(this.enteredTodo)
       this.enteredTodo=""
       console.log(this.todos)
    }
  },
});

app.mount("#todos");

