/*let arr=[12,34,45,56,67,4,34,22]
for(let a in arr)
    console.log(arr[a])
console.log("im outside")*/


/* let arr=[12,34,45,564,67,67,4,34,22]
for (let a of arr)
console.log(a)
console.log("im outside")*/

/* display()
{
    console.log("hello")
}
display()
console.log("see u")*/

/*function add(a,b)
{
    let c=a+b;
    console.log("hello")
    return c;
}
let ans=add(10,45)
console.log("anu",ans)*/
/*function add(a,b)
{
  let c=a+b;
  console.log("hello")
   
}
 add(10,23)
console.log("see u")*/
/*cons add=0=>{console.log("hello")}
add()
console.log('see u')*/
/*const add=(a,b)=>{
  c=a+b;
  return c;
 }
 let res=add(12,4)
 console.log('see u',res)*/

  /*const add=(a,b)=>{
   
  return a+b;
 }
 let res=add(12,4)
 console.log('see u',res)*/

 /*const add=(a,b)=>   a+b;
 let res=add(12,4)
 console.log('see u',res)*/


/*a=[3,5,6]
const b=a.map((d)=>{return d*2})
console.log(b)
//arr=[];
// for (vari=0;i<a.length;i++){
//      arr.push(a[i]*2)
//}
//console.log(arr)*/

/*let nums = [10,1,2,4,5,12, 20, 30, 40];
 
const a=[]
for(let d of nums)
{
   if(d>=20)
   {
    a.push(d)
   }
}
console.log(a)*/

/*let nums=[10,20,30,35,40,50]
const a=[]
for(let d of nums)
{
    if(d%2==0)
    {
        a.push(d)
    }
}
console.log(a)*/


       /* let nums = [10,1,2,4,5,12, 20, 30, 40];
 const a=nums.filter((d)=>{ return d%2==0})
// const a=[]
// for(let d of nums)
// {
//    if(d%2==0)
//    {
//     a.push(d)
//    }
// }
  console.log(a)*/
let nums =[10,20,39];
//var s=0
//for(let i of nums)
//s=s+i
//console.log(s)
/*let ans=nums.reduce((a,b)=>{
    return a+b;
})
console.log(ans)*/

/*let num = [10, 2, 30, 900];
 
 let ans=num.find((a)=>{
return a>20;
 })
 console.log(ans)*/

/*let person={
    name:"demo",
    dep:"IT"
}
console.log(person)
console.log(person.name)*/
/*let person= new Object()
person.name="demo"
person.gender="male"
console.log(person)
console.log(person.name)*/

/*console.log("hai1")
setTimeout(()=>{
    console.log("hello")
    },2000)
    console.log("hai3")*/

 /*function display(){
    console.log("im inside the method")
    setTimeout(()=>{
        console.log("im inside the timer")
    },3000)
}
display();
console.log("everyone")*/

/*function add(show){
    istrue=true
    if(istrue)
    {
        show()

    }
}
console.log("welcome")
add(display)
function display(){
    console.log("its nice")*/

/*function add(display){
    istrue=true
    if(istrue)
    {
        display("nandhini")
    }
}
console.log("thankyou")
add(display)
function display(name){
    console.log("thankyou",name)
}*/
/*let myPromise= new Promise((resolve,reject)=>{
    let isTrue=false
    if(isTrue)
    {
      resolve()
    }
    else 
      reject()
  })

  myPromise.then(success)
  .catch(fail)

  function success(){
    console.log("done!....................")
  }
  function fail()
  {
    console.log("not done")
  }*/



/*function display(){
return new Promise((resolve,reject)=>{
    let isTrue=true
    if(isTrue)
    {
        resolve(1000)
    }
    else
        reject()
})
}

display().then((data)=>{ console.log("done!....................",data)})
  .catch(()=>{console.log("not done")} )*/

  /*function display(){
return new Promise((resolve,reject)=>{
    let isTrue=true
    if(isTrue)
    {
      resolve(2000)
    }
    else 
      reject("mine")
  })
  }
   

//  display().then((data)=>{ console.log("done!....................",data)})
//   .catch(()=>{console.log("not done")} )
 
  async function show(){
     try{
      var res= await  display()
      console.log(res)
     }
     catch(Exception){
      console.log("the pb",Exception)
     }
     
  }

  show()*/

 /*async function createData(){
    try{
        var res=await fetch("https://jsonplaceholder.typicode.com/users",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            name:"shalini",
           gender:"female"
        })
        });
        var data=await res.json()
        console.log(data)
    }
    catch(a)
    {
        console.log("failed")
    }
}
createData()*/

/*async function updateData(){
    try{
        var res=await fetch("https://jsonplaceholder.typicode.com/users/1",{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            name:"inba",
           gender:"female"
        })
        });
        var data=await res.json()
        console.log("updated",data)
    }
    catch(a)
    {
        console.log("failed")
    }
}
updateData()*/
async function deleteData(){
    try{
        var res= await fetch("https://jsonplaceholder.typicode.com/users/1",{
        method:"DELETE",
        
        });
        
        console.log("deleted........",res)
    }
    catch(a)
    {
        console.log("failed")
    }
}
deleteData()




   












