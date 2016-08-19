/* A program to implement a note taking application using javascript ES5 standard
**
**
*/


module.exports= function NotesApplication (author){
	/** constructor
	**@param: author
	*/
		this.author = author;
		this.notes = []; 
		
	/** create note
	**@param: note_content
	*/
	
	this.create=function (note_content) {
		if (typeof notes_content === "string"){
			this.notes.push(note_content);
			//return "input are valid strings";
		}
		else{
			return "note not saved bcos input wasnt a string";
		}		
	}
		
	
	/**
	**lists out each of the Notes
	*/
	this.listNotes= function () {
		var noteslength =this.notes.length;
		if (noteslength >= 0){
				for (var note_id=0; note_id<noteslength;note_id++) {
					console.log("NOTE ID: "+note_id+"\n"); 			//prints out the note id
					console.log(this.notes[note_id]+"\n"); 				//prints out the note content
					console.log("By Author "+this.author[note_id]+"\n"); //prints out the author
				}
		}
		else {
			return "listNotes array must not be empty";
		}	
	}
	
	/** get note
	**@param: note_id
	* return notesList
	*/
	
	this.get =function(note_id) {
		if (typeof note_id ==="number" ){
			var currentNote=this.notes[note_id].toString();
			return currentNote; 							//returns note content as String
		}
		else {
			return "string parameter are not allowed for note_id";
		}
	}
	
	/** search note
	**@param: search_text
	* return search results
	*/
	
	this.search=function(search_text) {
		if (typeof search_text === "string"){
			var searchresult = this.notes.indexOf(search_text); 	//searches the text
			return "showing search results for " +search_text+ "\n NOTE ID :"+ this.note_id+"\n"+ this.notes+"\n"+"By Author"+this.author;
		}
		else{
			return "No result(s) found";
		}
	}
	
	
	/** delete note
	**@param: note_id
	*
	*/
	
	this.delete =function(note_id) {
		if (typeof note_id ==="number" ){
			this.notes.splice(note_id, 1);	
		}
		else{
			return "string parameter are not valid to delete note";
		}
	}
	
	/** edit note
	**@param: note_id, new_content
	*
	*/
	
	this.edit=function(note_id,new_content) {
		if (typeof note_id === "number" && typeof new_content === "string") {
			var old_content=this.notes[note_id];		
			this.notes[note_id]=this.notes[new_content];   //replaces the old content with the new content
		}
		else {
			return "first parameter must be number and second paramter must be a string";
		}
	}
}