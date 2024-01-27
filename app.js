const user = 
    {
        name: 'Tatsat',
        userName: 'sharmatatsat',
        pass: 'bankist23',
        pin: 1234,
        InitialAmount: 10000,
        Nationality: 'Indian'
    }
    


const redirect = () =>{

    const enteredUsername = document.querySelector('#userName').value;
    const enteredPassword = document.querySelector('#pass').value;
    
   

        if( enteredUsername === user.userName &&  enteredPassword=== user.pass){
            window.location.href = "http://127.0.0.1:5500/bankPage.html";
            
        }
    
        console.log("redirect fnction called")
    
}

