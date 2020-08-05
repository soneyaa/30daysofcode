//createPost({ title: 'Post Three', body: 'This is the post three'})

// .then(getPost)
// .catch(err => console.log(err));

//Async / Await
//async function init(){
 //   await createPost({ title: 'Post Three', body: 'This is the post three'});
    
//    getPosts();
//}

//init();


//Async / Await / fetch
async function fetchUsers(){
    const res = await fetch
    ('https://jsonplaceholder.typicode.com/users');

    const data = await res,json();
}

fetchUsers();
//Promise.all
//const promise1= Promise.resolve('Hello World');
//const promise2= 10;
//const promise3= new Promise((resolve, reject)=>
//setTimeout(resolve, 2000, 'Goodbye')
//);
//const promise4 = fetch
//('https://jsonplaceholder.typicode.com/users').then(res
//=>
//res.json()
//);

//Promise.all([promise1, promise2, promise3, promise4])
//.then(values =>
//  console.log(values)
//    );