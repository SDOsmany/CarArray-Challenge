//first car analysis
let hondaArr = [
    {make:'honda', model: 'civic', engine:'i4'},
];
    //use map to go through the beofore array items and return a new array with the car info
  let carInfo = hondaArr.map(info=(car , index)=>{
    //checks if the car is a honda and the engine is i4 
    if(car.make === "honda" && car.engine === "i4"){
    //if true then the car is light weight and gas sipper
      return {weight:'light', gas:'sippers'};
      }
    //else the car is heavy and gas guzzlers
    else{ 
      return {wight:'heavy', gas:'guzzlers'}; 
      }
    })
  
//Results of the car info printed
  console.log(carInfo)
 //second car analysis
let fordArr = [
    {make:'ford', model: 'mustang', engine:'v8'}
];
carInfo = fordArr.map(info=(car , index)=>{
    //checks if the car is a honda and the engine is i4 
    if(car.make === "honda" && car.engine === "i4"){
    //if true then the car is light weight and gas sipper
      return {weight:'light', gas:'sippers'};
      }
    //else the car is heavy and gas guzzlers
    else{ 
      return {wight:'heavy', gas:'guzzlers'}; 
      }
    })
//Results of the car info printed
console.log(carInfo)