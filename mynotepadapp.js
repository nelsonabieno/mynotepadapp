/* A program to implement a note taking application
**
**
*/

class NotesApplication{
	/** initialising class members
	**
	*/
	let author=[];
	let notes =[];

	/** constructor
	**@param: authorList,notesList
	*/

	constructor (author) {
		this.author = itemList;
		this.notes = notesList; 
		
	}
	
	/** create note
	**@param: note_content
	*/
	
	function create (note_content) {
		notesList.push(note_content);	
	
	}
	
	/**
	**lists out each of the Notes
	*/
	function listNotes() {
		var noteslength =this.notes.length;
		for (var note_id=0; note_id<noteslength;note_id++) {
			console.log("NOTE ID: "+note_id+"\n"); 			//prints out the note id
			console.log(notes[note_id]+"\n"); 				//prints out the note content
			console.log("By Author "+author[note_id]+"\n"); //prints out the author
		}
		
	}
	
	/** get note
	**@param: note_id
	* return notesList
	*/
	
	function get(note_id) {
		var currentNote=notesList[note_id].toString();
		return currentNote; 							//returns note content as String
	}
	
	/** search note
	**@param: search_text
	* return notesList
	*/
	
	function get(search_text) {
		var searchresult = notesList.search(search_text); 	//searches the text
		return searchresult; 						
	}
	
	
	
	

}