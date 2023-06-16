import './src/index.css';
import './node_modules/flowbite/dist/flowbite.min.js';


const burger=document.querySelector(".burger");
const dropdown = document.querySelector(".dropdown");
const closeIcon = document.querySelector(".close");

burger.addEventListener("click",()=>{
    if(dropdown.classList.contains('hidden')){
        dropdown.classList.remove('hidden');
          burger.classList.add('hidden');
          closeIcon.classList.remove('hidden');


    }else{
        dropdown.classList.add('hidden');
       
    }
})

closeIcon.addEventListener("click",()=>{
         closeIcon.classList.add("hidden");
         burger.classList.remove("hidden");
         dropdown.classList.add('hidden');

})