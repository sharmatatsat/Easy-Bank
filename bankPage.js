// const user = 
//     {
//         name: 'Tatsat',
//         userName: 'sharmatatsat',
//         pass: 'bankist23',
//         pin: 1234,
//         InitialAmount: 10000,
//         Nationality: 'Indian'
//     }
    

  

// const currentDate = new Date();
// const hours = currentDate.getHours();
// let minutes = currentDate.getMinutes();
// let newBalance,amountList, balance, amountBalance , inAmount = 0,outAmount =0;
// const date = currentDate.getDate();
// const month = currentDate.getMonth()+1;
// const year = currentDate.getFullYear();
// const fullDay = `${date}/${month}/${year}`;

// if(minutes <=9){
//     minutes = `0${minutes}`;

// }

// let time = `${hours}:${minutes}`
// console.log(fullDay);
// console.log(time);

// const AccountInfo = () => {
//     const availableAmount = document.querySelector("#amount");
    
//     if(user.Nationality === 'Indian'){
//         availableAmount.innerHTML = `INR ${user.InitialAmount}`
//     }

//     timeOfTransaction();
// } 


//     const greet = () => {

//         let greetings = document.createElement('h1');
//         greetings.classList.add('greeting');
     
//         const mainGreet = document.querySelector('.greet');
//         mainGreet.appendChild(greetings);
        
//         const typeGreet = document.querySelector('.greeting'); 
             
//         let time;
         
//         if(hours<12 && hours > 0){
//              time = "Morning";
//          }
     
//          else if(hours >=12 && hours <=16){
//              time = "Afternoon";
//          }
     
//          else{
//              time = "Evening";
//          }
       
                 
//         typeGreet.innerHTML = `Good ${time}, ${user.name}`;
//         console.log("working greetFunc");
             
//      }

    


// const bankStatementTransfer = () => {
    
    
        
       
//             let list = document.createElement("li");
//             const amountList = document.querySelector(".record-list");
//             amountList.appendChild(list);
//             list.classList.add("innerList");
//             list.classList.add("bgColorRed");
//             let transaction = "Debited";
//             list.innerHTML = transaction; 
        
//             AmountTransact();   


        
// }
// const bankStatementLoan = () => {
    
//     let list = document.createElement("li");
//     const amountList = document.querySelector(".record-list");
//     amountList.appendChild(list);
//     list.classList.add("innerList");
//     list.classList.add("bgColorGreen");
//     let transaction = "Credited";
//     list.innerHTML = transaction;
//     AmountLoan();
// }


// const AmountTransact = () => {
//     amountList = document.createElement("li");
//     balance = parseFloat(document.querySelector("#transferAmount").value);
//     amountBalance = document.querySelector(".amount-transaction");
//     amountList.classList.add("balanceList");
//     amountBalance.appendChild(amountList);

//     newBalance = user.InitialAmount - balance;
    
//     if(newBalance < 0){
//         alert("Insufficient Balance");
//     }
    
//     amountList.innerHTML = `INR ${balance}`;

//     user.InitialAmount = newBalance;
//     console.log("Amount Transaction");
//     AccountInfo(); 
// }

// const AmountLoan = () => {
//     amountList = document.createElement("li");
//     balance = parseFloat(document.querySelector("#loanAmount").value);
//     amountBalance = document.querySelector(".amount-transaction");
//     amountList.classList.add("balanceList");
//     amountBalance.appendChild(amountList);
    
    
//     if (isNaN(balance) || balance <= 0) {
//         alert("Invalid loan amount");
//         return;
//     }
    
//     newBalance = user.InitialAmount + balance;
    
//     amountList.innerHTML = `INR ${balance}`;
    
//     user.InitialAmount = newBalance;
    
//     // document.querySelector(".innerList").style.background = 'green';
//     console.log("Amount Transaction");
//     AccountInfo(); 
// }


// const incomeInfo = () => {
//     const intake = document.querySelector('#IN');
    
//     let income = parseFloat(document.querySelector('#loanAmount').value);
//     inAmount = parseFloat(inAmount);

//     inAmount += income;
//     interest();
//     intake.innerHTML = `IN : ${inAmount}INR`
// }
// const expenseInfo = () => {
//     const outtake = document.querySelector('#OUT');

    
//     let expense = parseFloat(document.querySelector('#transferAmount').value);
//     outAmount = parseFloat(outAmount);
   

//     outAmount += expense;
//     outtake.innerHTML = `OUT : ${outAmount}INR`
// }

// const clearInput = () => {
//     document.querySelector("#transferAmount").value = "";
// }

// const timeOfTransaction = () => {
//     const timeToday = document.querySelector('#time');
//     timeToday.innerHTML = `As of ${fullDay}, ${time}`;
// }
// const interest = () => {
//     const Interest = (inAmount/100) * 8;    
//     return Interest;
// }

// const DisplayInterest = () => {
//     const interstDis = document.querySelector('#Interest');
//     let interestCal = interest();

//     interstDis.innerHTML= `INTEREST : ${interestCal}INR`;

// }

// const logOut = () => {
//     let minutes = 9;
//     let seconds = 59;

//     const updateTimer = () => {
//         console.log(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
//     };

//     const timerId = setInterval(() => {
//         updateTimer();

//         if (seconds === 0 && minutes === 0) {
//             clearInterval(timerId);
//             window.location.href = "http://127.0.0.1:5500/Applications/Bankist/#";
//         } else if (seconds === 0) {
//             minutes--;
//             seconds = 59;
//         } else {
//             seconds--;
//         }
//     }, 1000);

//     const timerDisplay = document.querySelector('#loggedOut');
    
//     const updateTimerDisplay = () => {
//         timerDisplay.innerHTML = `You will be logged out in ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//     };

//     const displayTimerId = setInterval(updateTimerDisplay, 1000);

//     const clearDisplayTimer = () => {
//         clearInterval(displayTimerId);
//     };

//     // Clear the display timer when the user logs out
//     document.querySelector('#logoutButton').addEventListener('click', clearDisplayTimer);
// };



// const TransferTo = () => {
//     const transferRec = document.querySelector('#transferRecipient').value;

   
// }

// greet();
// AccountInfo();
// logOut();

