const list ={ 
    "Tokyo"          :  "Japan" ,
    "Mexico-City"    :  "Mexico"  ,
    "New-York-City"  :    "USA",
    "Mumbai"         :   "India",
    "Seoul"          :    "Korea",
    "Shanghai"       :    "China",
    "Lagos"          :   "Nigeria" ,
    "Buenos-Aires"   :    "Argentina",
    "Cairo"          :    "Egypt",
    "London"         :    "UK" 
};


function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

let form = document.querySelector("body > div > div > div > form");
let btn = document.querySelector("body > div > div > div > form > button");
insertAfter(document.createElement('datalist'),form);

let datalist = document.querySelector("body > div > div > div > datalist");
datalist.setAttribute('id','city');
let input = document.querySelector("body > div > div > div > form > input");
input.setAttribute('list','city');
for (key in list){
   let child=document.createElement('option');
   datalist.appendChild(child);
   child.appendChild(document.createTextNode(key));
}
let res = document.querySelector("body > div > div > div > div");
btn.addEventListener('click',e=>{
    e.preventDefault();
    let val=input.value;
    if(val!==''){
        while (res.firstChild) {
            res.removeChild(res.firstChild);
        }
        res.classList.remove('res')
        for(key in list){
            if(val == key){
              res.classList.add('res')
              let span = document.createElement('span');
              span.appendChild(document.createTextNode(list[key]));
              res.appendChild(document.createTextNode(key + ' is in')); 
              res.appendChild(span);  
            }
        }  
    }
  input.value = '';
})


