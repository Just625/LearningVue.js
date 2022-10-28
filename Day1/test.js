let app = new Vue({
    el: '#app',
    data: {
        message: 'World?'
    }
})
let app2 = new Vue({
    el: '#app-2',
    data: {
        message: "Bạn đã mở trang này vào " + new Date().toLocaleString()
    }
})
let app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})
let app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {text: 'Học JS'},
            {text: 'Hoc Vue'},
            {text: 'Xay dung cai gi do hay ho'}
        ]
    }
})
let app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'find match'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split(' ').reverse().join(' ')
        }
    }
})
let app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Fix this message'
    }
})
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})
let app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            {id: 0, text: 'Ca phao'},
            {id: 1, text: 'Mam tom'},
            {id: 2, text: 'Edible'},{
            id: 3,text: 'Fish'
            }
        ]
    }
})
let data = {a: 1};
let data2 = {b: 2};
let vm = new Vue({
    data:{data, data2}
});
let obj = {
    foo: 'bar'
}
Object.freeze(obj);
new Vue({
    el: '#app-8',
    data: obj
})
new Vue({
    el: "#app-9",
    data: {
        activeColor: 'red',
        fontSize: 30
    }
})
new Vue({
    el: "#app-10",
    data:{
        styleObject:{
            color: 'green',
            fontSize: '50px'
        }
    }
})
let example1 = new Vue({
    el:"#example-1",
    data:{
        parentMessage: 'Parent' ,
        items:[
            {name: "coffee"},
            {name: "dense tea"},
            {name: "red bull"}
        ]
    }
})
new Vue({
    el: "#v-for-object",
    data: {
        objects12:{
            'ho': "Mr",
            "ten": "SleepyHead",
            "age": 800
        }
    }
})
var vm123 = new Vue({
    data: {
        items: ['a', 'b', 'c']
    }
})
var vm45 = new Vue({
    data: {
        a: 1
    }
})
var ex2 = new Vue({
    el: '#ex-2',
    data:{
        name: 'Vue js'
    },
    methods:{
        greet: function(event){
            alert('Hi '+ this.name +"!")
            if(event){
                alert(event.target.tagName)
            }
        }
    }
})
new Vue({
    el: "#ex-3",
    data: {
        checkedNames: []
    }
})
new Vue({
    el: "#ex-4",
    data:{
        picked:''
    }
})
new Vue({
    el: "#ex-5",
    data:{
        selected:''
    }
})
new Vue({
    el: "#ex-6",
    data:{
        selected: []
    }
})
new Vue({
    el:"#ex-7",
    data:{
        selected:"50k",
        options:[
            {text: "Bi", value: "50k"},
            {text: "Bong", value: "30k"},
            {text: "Lau", value: "45k"}
        ]
    }
})
Vue.component('button-counter',{
    data: function(){
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">Pressed {{count}} times</button>'
})
new Vue({
    el: '#component-demo'
})
Vue.component('blog-post',{
    props: ['title'],
    template: `<div>
<h3>{{title}}</h3>
<button>Zoom in</button>
<!--<div v-html="title.content"></div>-->
</div>`
})
new Vue({
    el: '#blog-post-demo',
    data: {
        posts:[
            {id: 1, title: 'Vue introduction'},
            {id: 2, title: 'Vue concepts'},
            {id: 3,title: 'Advanced Vue concepts'}
        ]
    }
})
// new Vue({
//     el: '#blog-post-events-demo',
//     data: {
//         posts:[
//             {id: 1, title: 'Vue introduction'},
//             {id: 2, title: 'Vue concepts'},
//             {id: 3,title: 'Advanced Vue concepts'}
//         ],
//         postFontSize: 30
//     }
// })
