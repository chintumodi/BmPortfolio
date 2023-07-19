const navMenu = document.querySelector('.nav_menu');
const menuBar = document.querySelector('.icon .menu');
const closeMenu = document.querySelector('.close-menu');
const navLink = document.querySelectorAll('.nav-link')
console.log(navLink)

menuBar.onclick = function(ele){
    console.log("clicked",navMenu)
    if(navMenu){
        navMenu.classList.add('active');
    }
}
closeMenu.onclick = function(){
    navMenu.classList.remove('active');
    
}
navLink.forEach((nav)=>{
    nav.addEventListener('click',()=>{
        console.log("clicked")
        navMenu.classList.remove('active');
    });
});


// form validation

function validation(){
    const fistName = document.querySelector('#fistname').value;
    const lastName = document.querySelector('#lastname').value;
    const email = document.querySelector('#email').value;
    const number = document.querySelector('#number').value;
    const msg = document.querySelector('#textarea').value;
    const submit = document.querySelector('#submit');
    // const form = document.getElementById('form')
    
        // console.log(fistName,lastName,email,number,msg)
    
        const fistN = fistName.trim()
        const lastN = lastName.trim()
        const emails =  email.trim()
        const num =  number.trim()
        const massage = msg.trim()

        if(fistN == ''){
            alert('plz enter your name')
            return false;
        }
        if(lastN ==''){
            alert('plz enter your last name')
            return false;
        }
        if(emails ==''){
            alert('plz enter your email')
            return false;
        }
        if(num ==''){
            alert('plz enter your mobile Number')
            return false;
        }
        if(massage ==''){
            alert('plz enter your msg here')
            return false;
        }
        
    }
    // submit.addEventListener('submit', validation);
    submit.addEventListener('submit', validation);
