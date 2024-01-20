const user = {

   userName : sharmatatsat,
   pass : bankist23 ,

};

const redirect = () =>{

    if(document.querySelector('#userName').value === user.userName && document.querySelector('#pass').value === user.pass){
    window.location.href('bankPage.html')

    }
}
const currentDate = new Date();
const hours = currentDate.getHours();

const greet = () => {
   let greetings = document.createElement('h1');
   greetings.classList.add('greeting');

   const mainGreet = document.querySelector('.greet');
   mainGreet.appendChild(greetings);

    
    if(hours<12){
         
    }
}