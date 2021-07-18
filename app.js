//1. Dom Selection

const calculate = document.querySelector('.btn');
const result = document.querySelector('#result');

calculate.addEventListener('click', function (e) {
    const yourName = document.querySelector('#your-name').value;
    const partnerName = document.querySelector('#partner-name').value;
    e.preventDefault();

    if (yourName === "" && partnerName === "") {
        alert("Enter your name and your partner name");
    }

    else if (yourName.length <= 2) {
        alert('Enter Valid Name');
    }
    else if (partnerName.length <= 2) {
        alert('Enter Valid Name');
    }


    else {

        const random = Math.floor(Math.random() * 100 + 1);
        result.innerHTML = yourName + " and " + partnerName + "'s Love Percentage is " + random + " %";

    }






})
