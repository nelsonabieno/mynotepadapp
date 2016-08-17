/* A program to implement a note taking application
**
**
*/

class NotesApplication {
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
		try{
			notesList.push(note_content);
		}
		catch(err){
			console.log(err.Message);
		}
		
	
	}
	
	/**
	**lists out each of the Notes
	*/
	function listNotes() {
		try{
				var noteslength =this.notes.length;
				for (var note_id=0; note_id<noteslength;note_id++) {
					console.log("NOTE ID: "+note_id+"\n"); 			//prints out the note id
					console.log(notes[note_id]+"\n"); 				//prints out the note content
					console.log("By Author "+author[note_id]+"\n"); //prints out the author
				}
			}
		catch(err){
			console.log(err.Message);
		}
		
	}
	
	/** get note
	**@param: note_id
	* return notesList
	*/
	
	function get(note_id) {
		try{
				var currentNote=notesList[note_id].toString();
				return currentNote; 							//returns note content as String
		}
		catch(err){
				console.log(err.Message);
		}
		
	}
	
	/** search note
	**@param: search_text
	* return search results
	*/
	
	function get(search_text) {
		try{
			var searchresult = notesList.search(search_text); 	//searches the text
			return "showing search results for " +search_text+ "\n NOTE ID :"+ this.note_id+"\n"+ this.notesList+"\n"+"By Author"+this.author;
		}	
		catch(err){
			console.log(err.Message);
		}
		
	}
	
	
	/** delete note
	**@param: note_id
	*
	*/
	
	function delete(note_id) {
		try{
			this.notes.splice(note_id, 1);	
		}
		catch(err){
			console.log(err.Message);
		}
		
	}
	
	/** edit note
	**@param: note_id, new_content
	*
	*/
	
	function edit(note_id,new_content) {
		try{
			var old_content=this.notes[note_id];
			this.notes.replace(old_content, new_content);		//replaces the old content with the new content
		}
		catch(err){
			console.log(err.Message);
		}
		
	}

}