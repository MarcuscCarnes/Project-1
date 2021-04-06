/* 
    Author:         Jan Veintidos
    Date:           4/3/2020
    Summary:        Functions for Handling showing prices for customers
                    also a funtion for clearing the choices that were set
*/

/*handling how rooms get choosen and priceing towards the end */
function roomPrices(){
    var guestName = document.getElementById('guestName').value;
    var numOfRooms = document.getElementById('amountRoom').value;
    var phoneNum = document.getElementById('contactInfo').value;
    
    if(document.getElementById('SingleLuxBedChoice').checked)
    {
        
        if(document.getElementById('booking1').checked)
        {
            var totalPrice = numOfRooms * 400.00;
        }
        else if(document.getElementById('booking2').checked)
        {
            var totalPrice = numOfRooms * 500.00;
        }
        else if(document.getElementById('booking3').checked)
        {
            var totalPrice = numOfRooms * 1300.00;
        }
        else if(document.getElementById('booking4').checked)
        {
            var totalPrice = numOfRooms * 1400.00;
        }
    }

    else if(document.getElementById('SingleModBedChoice').checked)
    {
        if(document.getElementById('booking1').checked)
        {
            var totalPrice = numOfRooms * 150.00;
        }
        else if(document.getElementById('booking2').checked)
        {
            var totalPrice = numOfRooms * 250.00;
        }
        else if(document.getElementById('booking3').checked)
        {
            var totalPrice = numOfRooms * 600.00;
        }
        else if(document.getElementById('booking4').checked)
        {
            var totalPrice = numOfRooms * 700.00;
        }
    }

    else if(document.getElementById('DoubleLuxChoice').checked)
    {
        if(document.getElementById('booking1').checked)
        {
            var totalPrice = numOfRooms * 200.00;
        }
        else if(document.getElementById('booking2').checked)
        {
            var totalPrice = numOfRooms * 250.00;
        }
        else if(document.getElementById('booking3').checked)
        {
            var totalPrice = numOfRooms * 800.00;
        }
        else if(document.getElementById('booking4').checked)
        {
            var totalPrice = numOfRooms * 900.00;
        }
    }

    else if(document.getElementById('DoubleModChoice').checked)
    {
        if(document.getElementById('booking1').checked)
        {
            var totalPrice = numOfRooms * 20.00;
        }
        else if(document.getElementById('booking2').checked)
        {
            var totalPrice = numOfRooms * 30.00;
        }
        else if(document.getElementById('booking3').checked)
        {
            var totalPrice = numOfRooms * 200.00;
        }
        else if(document.getElementById('booking4').checked)
        {
            var totalPrice = numOfRooms * 250.00;
        }
    }

    alert('Your    Receipt    Information  '      + '\n' +
          '=====================================' + '\n' + 
          'Name:\t\t\t\t\t' +  guestName + '\n' +
          'Amount of Rooms:\t\t' + numOfRooms + '\n' +
          'Phone Number:\t\t\t'+ phoneNum + '\n' +  
          'Total Price: \t\t\t\t' + totalPrice  + '\n'   
          
          );
}

/*clear the page of all choices*/
function clearPage(){
    document.getElementById("CalculationsArea").reset();
}
