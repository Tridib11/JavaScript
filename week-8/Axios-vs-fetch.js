//axios vs fetch

//fetch

// 1 - way of fetch

// function main(){
//   fetch("https://sum-server.100xdevs.com/todos")
//     .then( async response=>{
//       const json=await response.json()
//       console.log(json)
//     })
// }


// 2 - way of fetch

// async function main(){
//   const response=await fetch("https://sum-server.100xdevs.com/todos")
//       const json=await response.json()
//       console.log(json)
// }


//Axios (External library)

/*

- By default its get

POST - await axios.post("https://sum-server.100xdevs.com/todos")
PUT - await axios.put("https://sum-server.100xdevs.com/todos")
*/

const axios=require("axios")

// async function main(){
//   const response=await axios.get("https://sum-server.100xdevs.com/todos")
//       console.log(response.data)
// }

//Testing an HTTP dump

async function main(){
  const response=await axios.post("https://httpdump.app/dumps/bcdd6569-534d-4c7b-9819-8b15c5c0b715",{
    name:"tridib",
    email:"dumptesting@example.com"
  },{
    headers:{
      Authorization:"Bearer 123"
    }
  })
      
}

https://httpdump.app/dumps/bcdd6569-534d-4c7b-9819-8b15c5c0b715
main()