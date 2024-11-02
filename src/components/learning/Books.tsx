// components/Books.tsx
type Book = {
    id: string;
    title: string;
    author: string;
    image_url?: string;
};

type BooksProps = {
    books: Book[];
};

export default function Books({ books }: BooksProps) {
    return (
        <div className="books-list overflow-y-auto max-h-screen p-4 border-l border-gray-600 pb-[150px]">
            <h2 className="text-white text-xl mb-4">Books & Articles</h2>
            <div className="flex flex-col gap-4">
                {books.map((book) => (
                    <div key={book.id} className="mb-4 flex gap-3">
                        {/* {book.image_url ? (
                            <img src={book.image_url} alt={book.title} className="w-full h-32 object-cover mb-2" />
                        ) : ( */}
                            <div className="w-[80px] h-[120px] bg-gray-500 mb-2 flex items-center justify-center text-white">
                                <span>No Image</span>
                            </div>
                            <div>
                                <h3 className="text-white">{book.title}</h3>
                                <p className="text-gray-400">{book.author}</p>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
