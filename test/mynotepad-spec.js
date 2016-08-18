var notesApplication= require('../mynotepadapp');    //using AS5  //mynotepadapp js file
var expect =require('chai').expect;  //to use the assertion library from chai. Is a dependency
var notes = new notesApplication("Nelson");
 		
	describe ("A note taking application" ,function(){
		
	   it("CREATE FUNCTION: string input is valid for create function", function(){
	   		
	   		expect(notes.create("james")).to.equal("input are valid strings");
	   });

	   it("CREATE FUNCTION:Strings are only expected for create function", function(){
	   		
	   		expect(notes.create(5)).to.equal("note not saved bcos input wasnt a string");
	   });

	   it("GET FUNCTION:Get function should only have integer as parameter", function(){
	   		
	   		expect(notes.get("noteid")).to.equal("string parameter are not allowed for note_id");
	   });

	    it("SEARCH FUNCTION:The parameter expected to search must be string", function(){
	   		
	   		expect(notes.search("love")).to.be.string;
	   });

	    it("DELETE FUNCTION: function expects only integer as parameter", function(){
	   		
	   		expect(notes.delete("noteid")).to.equal("string parameter are not valid to delete note");
	   });
	   
	    it("EDIT FUNCTION: function expects only integer as parameter", function(){
	   		
	   		expect(notes.edit("this is an edited text",5)).to.equal("first parameter must be number and second paramter must be a string");
	   });
});