// components/Books.tsx
type Book = {
    id: string;
    title: string;
    author: string;
    image_url?: string;
    journal_name?: string;
    volume?: string;
    issue?: string;
    pages?: string;
    publisher?: string;
    published_date?: string;
  };
  
  type BooksProps = {
    books: Book[];
  };
  
  export default function Books({ books }: BooksProps) {
    return (
      <div className="books-list overflow-y-auto max-h-screen p-4 border-l border-gray-600 pb-[150px]">
        {/* Heading with the total number of books/articles */}
        <h2 className="text-white text-xl mb-4">
          Books & Articles ({books.length})
        </h2>
  
        <div className="flex flex-col gap-4 justify-start">
          {books.map((book) => (
            <div key={book.id} className="mb-4 flex gap-3">
              {/* Image or placeholder */}
              {book.image_url ? (
                <img src={book.image_url} alt={book.title} className="w-[80px] h-[120px] object-cover mb-2" />
              ) : (
                <div className="w-[80px] h-[120px] bg-gray-500 mb-2 flex items-center justify-center text-white">
                  <span>No Image</span>
                </div>
              )}
  
              {/* Book/Article Details */}
              <div>
                <h3 className="text-white">{book.title}</h3>
                <p className="text-gray-400">{book.author}</p>
  
                {/* Conditional rendering for article-specific information */}
                {book.journal_name && (
                  <p className="text-gray-400">
                    <span className="text-gray-500">Journal:</span> {book.journal_name}
                  </p>
                )}
                <div className="flex gap-4">
                  {(book.volume || book.issue) && (
                    <p className="text-gray-400">
                      <span className="text-gray-500">Vol:</span> {book.volume} 
                      {book.issue ? `, No. ${book.issue}` : ""}
                    </p>
                  )}
                  {book.volume && <span className="text-gray-500">|</span>}
                  {book.pages && (
                    <p className="text-gray-400">
                      <span className="text-gray-500">Pages:</span> {book.pages}
                    </p>
                  )}
                </div>
                {book.publisher && (
                  <p className="text-gray-400">
                    <span className="text-gray-500">Publisher:</span> {book.publisher}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  