const user = {
   name : 'Tatsat',
   userName : 'sharmatatsat',
   pass : 'bankist23' ,
   pin : '1234',

};

const redirect = () =>{

    const enteredUsername = document.querySelector('#userName').value;
    const enteredPassword = document.querySelector('#pass').value
    
    if( enteredUsername === user.userName &&  enteredPassword=== user.pass){
        window.location.href = "http://127.0.0.1:5500/Applications/Bankist/bankPage.html";

    }

    else{
        console.log("Incorrect credentials !")
    }

    console.log("redirect fnction called")
}
const currentDate = new Date();
const hours = currentDate.getHours();


const greet = () => {
   let greetings = document.createElement('h1');
   greetings.classList.add('greeting');

   const mainGreet = document.querySelector('.greet');
   mainGreet.appendChild(greetings);
   
   const typeGreet = document.querySelector('.greeting'); 
        
   let time;
    
   if(hours<12 && hours > 0){
        time = "Morning";
    }

    else if(hours >=12 && hours <=16){
        time = "Afternoon";
    }

    else{
        time = "Evening";
    }

    typeGreet.innerHTML = `Good ${time}, ${user.name}`;
}

greet();


const bankStatement = () => {

    let list = document.createElement("li");
    const amountList = document.querySelector(".record-list");
    amountList.appendChild(list);
    list.classList.add("innerList");
    let transaction = "withdrawal";
    list.innerHTML = transaction;

    // console.log("its working");
}