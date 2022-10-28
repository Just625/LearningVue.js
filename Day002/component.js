Vue.component('blog-post', {
    props: ['post'],
    template: `<div class="blog-post">
                    <h3>{{ post.title }}</h3>
                    <button @click="$emit('enlarge-text', 0.1)">Zoom in</button>
                    <div v-html="post.content"></div>
               </div>`
})

new Vue({
    el: '#blog-post-demo',
    data: {
        posts: [
            {id: 1, title: 'Giới thiệu về Vue', content: 'Noi dung'},
            {id: 2, title: 'Các khái niệm trong Vue', content: 'Noi dung'},
            {id: 3, title: 'Vue căn bản và vô cùng nâng cao', content: 'Noi dung'}
        ],
        postFontSize: 1
    },
    methods: {
        onEnlargeText: function (enlargeAmount) {
            this.postFontSize += enlargeAmount
        }
    }
})
Vue.component('custom-input', {
    props: ['value'],
    template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)
    >
  `
})
// new Vue({
//     el: '#test',
//     data:
//         {
//             searchText:''
//         }
// })
Vue.component('alert-box', {
    template: `
    <div class="demo-alert-box">
      <strong>Lỗi!</strong>
      <slot></slot>
    </div>
  `
})
Vue.component('currentTabComponent', {
    template: `<div>Test component dong voi thuoc tinh is</div>`
})
new Vue({
    el: '#is-property',
    computed: {
        currentTabComponent: function () {
            return 'currentTabComponent'
        }
    }
})
Vue.compo
Vue.component('blog-post-row', {
    template: `<div>Testing parse Dom</div>`
})
new Vue({
    el: '#test-parse-dom'
})

Vue.component('home-component', {
    template: `<div>Home component</div>`
})
Vue.component('post-component', {
    template: `<div>Post Component</div>`
})
Vue.component('archive-component', {
    template: `<div>Archive Component</div>`
})
new Vue({
    el: '#is-property-bind',
    data: {
        currentTabKey: 'home',
        tabs: [
            {key: 'home', label: 'Home'},
            {key: 'post', label: 'Post'},
            {key: 'archive', label: 'Archive'}
        ]
    },
    computed: {
        currentTabComponent: function () {
            return this.currentTabKey + '-component'
        }
    }
})

let ComponentA = {
    template: `<div>Test component cuc bo</div>`
}
let ComponentB = {
    components: {
        'component-a': ComponentA
    }
}
new Vue({
    el: '#root',
    components: {
        'component-a': ComponentA
    }
})
new Vue({
    el: '#root2',
    components: {
        'component-a2': ComponentA
    }
})


