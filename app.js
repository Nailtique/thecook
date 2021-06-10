'use strict'

function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let globalVar = document.getElementById('cookies');


let tableOne = document.createElement('table')
globalVar.appendChild(tableOne)



let arrOfObject = [];
let hours = ['6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7']





function Header (){}

Header.prototype.renderH = function(){


        

    let initialRow = document.createElement('tr')
    tableOne.appendChild(initialRow);
    let thI = document.createElement('th');
    initialRow.appendChild(thI);
    thI.textContent = 'Hours';

    for(let i = 0; i < hours.length; i++){
        let th111 = document.createElement('th');
        initialRow.appendChild(th111);
        th111.textContent = hours[i]
    }
    let tdaily1 = document.createElement('th');
    initialRow.appendChild(tdaily1);
    tdaily1.textContent = "Daily Total"
}



function Location (branchname,maxNo, minNo,avgNo){
    this.branchname = branchname;
    this.maxNo = maxNo;
    this.minNo = minNo;
    this.avgNo = avgNo;
    this.numberOfCustomersPerHour = [];
    this.numberOfCookiesPerHour = [];
    this.total = 0;
    this.updateHours = [];
    
    arrOfObject.push(this)
    
}







    Location.prototype.updateNumberOfCustomersPerHour = function(){
    for(let i = 0; i< hours.length;i++){
   
            this.numberOfCustomersPerHour.push(randomValue(this.minNo,this.maxNo));
            // console.log(this.numberOfCustomersPerHour)
}
    }
    Location.prototype.updateNumberOfCookiesPerHour = function(){
        for(let i = 0 ; i < hours.length; i++){
             this.numberOfCookiesPerHour.push(this.numberOfCustomersPerHour[i] * Math.ceil(this.avgNo));
            //  console.log(this.numberOfCookiesPerHour)
            this.total = this.total + this.numberOfCookiesPerHour[i];
            // console.log(numberOfCookiesPerHour)
                }
                
                console.log(this.numberOfCookiesPerHour)
    }


    
    
    




    Location.prototype.render = function(){


        

            let firstRow = document.createElement('tr')
            tableOne.appendChild(firstRow);
            let thF = document.createElement('td');
            firstRow.appendChild(thF);
            thF.textContent = this.branchname

            for(let i = 0; i < hours.length; i++){
                let th1 = document.createElement('td');
                firstRow.appendChild(th1);
                th1.textContent = `${this.numberOfCookiesPerHour[i]}`;
            }
              let tdaily2 = document.createElement('td');
              firstRow.appendChild(tdaily2);
              tdaily2.textContent = this.total
    }



function footer(){
    let lastRow = document.createElement('tr')
                tableOne.appendChild(lastRow);
                let dLast = document.createElement('td');
                lastRow.appendChild(dLast);
                dLast.textContent = 'Totals';
                let finalTotal = 0;
            
                for(let i = 0; i < hours.length; i++){
                    let d2 = document.createElement('td');
                        lastRow.appendChild(d2);
                    let sumA = 0;
                    for(let j =0; j < arrOfObject.length ; j++){
                        
                      sumA += arrOfObject[j].numberOfCookiesPerHour[i]
                      console.log('SUM',sumA,arrOfObject[j].numberOfCookiesPerHour[i]);

                     
                    }
                    finalTotal += sumA;
                    d2.textContent = sumA
                    // console.log(finalTotal)
                }

                let d3 = document.createElement('th');
                lastRow.appendChild(d3);
                d3.textContent = finalTotal;
    
}
     









    let seattle = new Location('seattle',65,23,6.3);
    let tokyo = new Location('tokyo',24,3,1.2);
    let dubai = new Location('dubai',38,11,1.2);
    let paris = new Location('paris',38,20,2.3);
    let lima = new Location('lima',16,2,4.6);









    

   







let time = new Header();

   
    seattle.updateNumberOfCustomersPerHour();
    seattle.updateNumberOfCookiesPerHour();
    tokyo.updateNumberOfCustomersPerHour();
    tokyo.updateNumberOfCookiesPerHour();
    dubai.updateNumberOfCustomersPerHour();
    dubai.updateNumberOfCookiesPerHour();
    paris.updateNumberOfCustomersPerHour();
    paris.updateNumberOfCookiesPerHour();
    lima.updateNumberOfCustomersPerHour()
    lima.updateNumberOfCookiesPerHour();
    
    

    time.renderH();
    seattle.render();
    tokyo.render();
    dubai.render();
    paris.render();
    lima.render();

    //   seattle.renderFooter();
   
    


// console.log(arrOfObject);
footer();

const citiesForm = document.getElementById('LocationsForm');
citiesForm.addEventListener('submit', inputFunction);

function inputFunction(event){

event.preventDefault();


let citiesName = event.target.branchName.value;
let maxValue = event.target.maxNumber.value;
let minValue = event.target.minNumber.value;
let avgValue = event.target.avgNumber.value;


let newLocation = new Location(citiesName,maxValue,minValue,avgValue);

newLocation.updateNumberOfCustomersPerHour();
newLocation.updateNumberOfCookiesPerHour();
newLocation.render();






}