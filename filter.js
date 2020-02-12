const list = [ 1,2,3,'a',4,5]

let filtered= list.filter(function(arrayElement){
	if(typeof arrayElement === 'number'){
      return arrayElement
    }
});
console.log(filtered);