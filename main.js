const { createApp, ref } = Vue
createApp({
    data() {
        return {
            editPost: null,
            posts: [],
            firstName: 'Jul',
            lastName: 'Punding'
        }
    },
    computed: {
        fullName() {
            return `${this.firstName} ${this.lastName}`
        }
    },
    methods: {
        deletePost(id, i) {
            fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
                method: 'DELETE'
            })
            .then(() => {
                //do something...
                this.posts.splice(i, 1)
                console.log('DELETED!!!')
            })
        },
        updatePost(post) {
            fetch("https://jsonplaceholder.typicode.com/posts/" + post.id, {
                body: JSON.stringify(post),
                method: 'PUT',
                headers: { "Content-Type": "application/json" }
            })
            .then(() => {
                //do something...
                this.editPost = null
            })
        }
    },
    mounted() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then((data) => {
                //do something...
                this.posts = data
                console.log(data)
            })
    },
    template: `
    <div>
        <li v-for="post, i in posts">
        <div v-if="editPost === post.id"><input v-on:keyup.enter="updatePost(post)" v-model="post.title"/> <button @click="updatePost(post)">save</button></div>

        <div v-else>
        {{ post.title }} 
        <button v-on:click="editPost = post.id">Edit</button>
        <button @click="deletePost(post.id, i)">Delete</button>
        </div>
        </li>
        <h2>Fullname: {{ firstName }} {{ lastName }}</h2>
        <h2>Computed Fullname: {{ fullName }}</h2>
    </div>
    `
  }).mount('#app')