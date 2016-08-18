module.exports = function sum(x,y){
	if(typeof x === 'string' || typeof y === 'string') return "Strings are not valid input";
	
	return x +y;
}
//exports.sum=sum;  //exports sum fn this line not needed