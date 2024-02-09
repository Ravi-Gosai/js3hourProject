let form = document.querySelector('form');

let ul1 = document.getElementById('ul1');
let ul2 = document.getElementById('ul2');

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    let obj = {
        item : event.target.item.value,
        description : event.target.description.value
    }
    // console.log(obj)

    axios.post('https://crudcrud.com/api/48710b8b48504151bb9be5081508628a/p14', obj)
    .then(res=>{
            console.log(res.data)
            let li = document.createElement('li');
            
            li.innerHTML = `Item : ${res.data.item}  Descripton : ${res.data.description} <button onclick="add(event)">✔</button><button data-id="${res.data['_id']}"  onclick="remove(event)">X</button> <br>`
        
            ul1.appendChild(li)
            console.log(document.q)
    })




})

window.addEventListener('DOMContentLoaded',async()=>{

    let res = await axios.get('https://crudcrud.com/api/48710b8b48504151bb9be5081508628a/p14')
  

        for(let i = 0; i<res.data.length; i++){

            let li = document.createElement('li');
              
            li.innerHTML = `Item : ${res.data[i].item}  Descripton : ${res.data[i].description} <button onclick="add(event)">✔</button><button data-id="${res.data[i]['_id']}" onclick="remove(event)">X</button><br>`
        
            ul1.appendChild(li)
            
        }
   

    let res2 = await axios.get('https://crudcrud.com/api/48710b8b48504151bb9be5081508628a/p15')


        for(let i = 0; i<res2.data.length; i++){

            let li = document.createElement('li');
              
            li.innerHTML = `Item : ${res2.data[i].item}  Descripton : ${res2.data[i].description}`
        
            ul2.appendChild(li)
            
        }
   


})

async function remove(event){

    let id = event.target.getAttribute("data-id")
    console.log(id)

     await axios.delete(`https://crudcrud.com/api/48710b8b48504151bb9be5081508628a/p14/${id}`)
        
        ul1.removeChild(event.target.parentElement)
   
}

async function add(event){
    let id = event.target.nextSibling.getAttribute("data-id")
    // console.log(id)
        
       let res = await axios.get(`https://crudcrud.com/api/48710b8b48504151bb9be5081508628a/p14/${id}`)
        
       console.log(res.data)
    let TempData = res.data 

    let tempObj = {
        item : TempData.item,
        description : TempData.description
    }

      await axios.post('https://crudcrud.com/api/48710b8b48504151bb9be5081508628a/p15',tempObj)

     await axios.delete(`https://crudcrud.com/api/48710b8b48504151bb9be5081508628a/p14/${id}`)

     ul1.removeChild(event.target.parentElement);

     let li = document.createElement('li');
              
            li.innerHTML = `Item : ${res.data.item}  Descripton : ${res.data.description}`
        
            ul2.appendChild(li)

          


}





