const screen = document.querySelector('.screen');

const buttoner = document.querySelectorAll('.buttoner');
const bigImage = document.querySelector('.big-image');

const closer = document.querySelector('.closer');
const abscreen = document.querySelector('.abs-screen');
const bscreen = document.querySelector('.bscreen');
const rip = document.querySelector('.rip');
let checker = Array.from(buttoner);

const buttonee = document.querySelectorAll('.buttonee');
let checkee = Array.from(buttonee);


const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const changer = document.querySelector('.changer');


let value = changer.textContent;

const logoscan = document.querySelector('.logoscan');

const cartbox = document.querySelector('.cartbox');
const cartAdder = document.getElementsByTagName('button')[0];


const lotus = document.querySelector('.corp');


const chunk = document.querySelector('.showcase');

const empt = document.querySelector('.empt');

const deleter = document.querySelector('.delete');
const checkButton = document.querySelector('.checkout');

const panel = document.querySelector('.popo');
const menu = document.querySelector('.menu');

const anotherCloser = document.querySelector('.panelcloser');

const indicator = document.querySelector('.indicator');

const next = document.querySelector('.circlenext');
const previous = document.querySelector('.circleprev');

const next1 = document.querySelector('.circlenext2');
const previous1 = document.querySelector('.circleprev2');

logoscan.addEventListener('click', ()=>{


    if(cartbox.style.display == 'none'){


        cartbox.style.display = 'block';
    }
    else{


        cartbox.style.display = 'none';
    }
})



cartAdder.addEventListener('click', ()=>{

    
    let entry = changer.textContent;
    if(entry > 0){
       

       chunk.style.display = 'flex';
       checkButton.style.display = 'block';
       empt.style.display = 'none';
       lotus.textContent = '$125.00 X ' + entry + ' $' + `${entry*125}`;
       indicator.textContent = entry;

      
       
        


    }

    else{
        chunk.style.display = 'none';
        checkButton.style.display = 'none';
        empt.style.display = 'block';
        indicator.textContent = "";
    }

    
})

deleter.addEventListener('click', ()=>{

    changer.textContent = 0;

    empt.style.display = "block";
    chunk.style.display = "none";
    checkButton.style.display = 'none';
    indicator.textContent = "";



})



plus.addEventListener('click', () => {


    
    let newValue = Number(value);
    newValue += 1;
    value = String(newValue);
    changer.textContent = value;
});
minus.addEventListener('click', () => {

    let newValue = Number(value);
    if(newValue > 0){

        newValue -= 1;

    }

    else{

        newValue = 0;
    }
    
    value = String(newValue);
    changer.textContent = value;

});



for(let i = 0; i < checker.length; i++){

   buttoner[i].addEventListener('click', ()=>{
   
   
   screen.childNodes[1].setAttribute('src', `images/image-product-${i+1}.jpg`)

   

   

   

   });



}

for(let i = 0; i < checkee.length; i++){

    buttonee[i].addEventListener('click', ()=>{
    
    
    bscreen.childNodes[1].setAttribute('src', `images/image-product-${i+1}.jpg`)
 
    
 
    
   
    
 
    });
 
 
 
}

closer.addEventListener('click', () => {

    abscreen.style.display = 'none';
    rip.style.display = 'none';
    
})

screen.addEventListener('click', ()=>{

   if(document.body.clientWidth > 700){

    abscreen.style.display = 'flex';
    rip.style.display = 'block';
   }
    
})


bigImage.addEventListener('click', ()=>{




})

menu.addEventListener('click', ()=>{


    


       panel.classList.toggle('sider');
        

   
})

//console.log(anotherCloser);
anotherCloser.addEventListener('click', ()=>{

    panel.classList.remove('sider');
})


let countree = 1;

next.addEventListener("click", ()=>{


   

   if(countree < 4){

       countree++;

   }
   
   else{

    countree = countree;
   }
   bscreen.childNodes[1].setAttribute('src', `images/image-product-${0+countree}.jpg`)

    
})

previous.addEventListener("click", ()=>{


   

    if(countree > 1){
 
        countree--;
 
    }
    
    else{
 
     countree = 1;
    }
    bscreen.childNodes[1].setAttribute('src', `images/image-product-${0+countree}.jpg`)
 
     
 })


 let countree1 = 1;

next1.addEventListener("click", ()=>{


   

   if(countree1 < 4){

       countree1++;

   }
   
   else{

    countree1 = countree1;
   }
   screen.childNodes[1].setAttribute('src', `images/image-product-${0+countree1}.jpg`)

    
})

previous1.addEventListener("click", ()=>{


   

    if(countree1 > 1){
 
        countree1--;
 
    }
    
    else{
 
     countree1 = 1;
    }
    screen.childNodes[1].setAttribute('src', `images/image-product-${0+countree1}.jpg`)
 
     
 })





