var notesApplication= require('../mynotepadapp');    //using AS5  //mynotepadapp js file
var expect =require('chai').expect;  //to use the assertion library from chai. Is a dependency
var notes = new notesApplication("Nelson");
 		
	describe ("A note taking application" ,function(){
		
	 
	   it("The strings are valid", function(){
	   		
	   		expect(notes.create("james")).to.equal("input are valid strings");
	   });

	   it("It should have strings input only", function(){
	   		
	   		expect(notes.create(5)).to.equal("note not saved bcos input wasnt a string");
	   });

});