/* A program to implement a note taking application
**
**
*/


module.exports= function NotesApplication (author){
	/** constructor
	**@param: authorList,notesList
	*/
		this.author = author;
		this.notes = []; 
		
	/** create note
	**@param: note_content
	*/
	
	this.create=function (note_content) {
		if (typeof notes_content === "string"){
			this.notes.push(note_content);
			return "input are valid strings";

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
		for (var note_id=0; note_id<noteslength;note_id++) {
				console.log("NOTE ID: "+note_id+"\n"); 			//prints out the note id
				console.log(this.notes[note_id]+"\n"); 				//prints out the note content
				console.log("By Author "+this.author[note_id]+"\n"); //prints out the author
		}	
	}
	
	/** get note
	**@param: note_id
	* return notesList
	*/
	
	this.get =function(note_id) {
		var currentNote=this.notes[note_id].toString();
		return currentNote; 							//returns note content as String
	}
	
	/** search note
	**@param: search_text
	* return search results
	*/
	
	this.search=function(search_text) {
		var searchresult = this.notes.search(search_text); 	//searches the text
		return "showing search results for " +search_text+ "\n NOTE ID :"+ this.note_id+"\n"+ this.notes+"\n"+"By Author"+this.author;
	}
	
	
	/** delete note
	**@param: note_id
	*
	*/
	
	this.delete =function(note_id) {
		this.notes.splice(note_id, 1);	
	}
	
	/** edit note
	**@param: note_id, new_content
	*
	*/
	
	this.edit=function(note_id,new_content) {
		var old_content=this.notes[note_id];
		this.notes.replace(old_content, new_content);		//replaces the old content with the new content
		}
	
	}
	


