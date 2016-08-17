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
		this.notes.push(note_content);	
	
	}
	
	/**
	**lists out each of the notes list
	*/
	function listNotes() {
		var noteslength =this.notes.length;
		for (var note_id=0; note_id<=noteslength;i++) {
			console.log("NOTE ID: "+note_id);
			console.log(notes[note_id]);
			console.log("By Author"+Author[note_id])
		}
		
	}
	

}