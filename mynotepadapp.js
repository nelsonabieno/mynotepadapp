/* A program to implement a note taking application
**
**
*/

class NotesApplication {

	/** constructor
	**@param: authorList,notesList
	*/

	constructor (author) {
		this.author = author;
		this.notes = []; 
	}
	
	/** create note
	**@param: note_content
	*/
	
	create (note_content) {
		this.notes.push(note_content);
	}
	
	/**
	**lists out each of the Notes
	*/
	listNotes () {
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
	
	get (note_id) {
		var currentNote=this.notes[note_id].toString();
		return currentNote; 							//returns note content as String
	}
	
	/** search note
	**@param: search_text
	* return search results
	*/
	
	search (search_text) {
		var searchresult = this.notes.search(search_text); 	//searches the text
		return "showing search results for " +search_text+ "\n NOTE ID :"+ this.note_id+"\n"+ this.notes+"\n"+"By Author"+this.author;
	}
	
	
	/** delete note
	**@param: note_id
	*
	*/
	
	delete (note_id) {
		this.notes.splice(note_id, 1);	
	}
	
	/** edit note
	**@param: note_id, new_content
	*
	*/
	
	edit(note_id,new_content) {
		var old_content=this.notes[note_id];
		this.notes.replace(old_content, new_content);		//replaces the old content with the new content
		}
	}

}
