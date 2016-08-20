/* A program to implement a note taking application
**
**
*/

class Library {

	constructor (booktitle,isbn,author,qty) {
		
		this.bookobj= new Book();
		this.booktitle=booktitle;
		this.isbn=isbn;
		this.author=author;
		this.qty=qty;
		
	}
	

	
	create() {
		this.bookobj.createBook(this.booktitle,this.isbn,this.author,this.qty);
	}
	

	borrow() {
		bookobj.borrowBook(this.isbn);
	}
	
	returnBook(){
		bookobj.borrowBook(this.isbn)
	}
}


class Book{
	constructor(){
		this.books = {};
	}
	
	createBook(booktitle,isbn,author,qty){
			this.books["booktitle"] =booktitle;
			this.books["isbn"] =isbn;
			this.books["Author"] =author;
			this.books["qty"] =qty;
		}
		
	borrowBook (isbn) {
		for (var i in this.books){
			if (this.books["isbn"]===isbn){
				this.books["qty"]--;
				return true;
			}
			else{
				return false;
			}
		}
	}
	
	returnBook (isbn){
		for (var i in this.books){
			if (this.books["isbn"]===isbn){
				this.books["qty"]++;
				return true;
			}
			else{
				return false;
			}
		}
		
	}

}


var objectlib = new Library("Engineering","John","ISBN908",7);
objectlib.create();



