import { useEffect, useState } from "react";
import LoadingMask from './components/LoadingMask';
import Books from './components/Books';

function App() {

  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    const response = await fetch("http://www.testdomain.com/v1/api/books");
    const responseJSON = await response.json();
    console.log(responseJSON);

    setBooks(responseJSON);
    setLoading(false)
  };

  useEffect(() => {
    setLoading(true)
    fetchBooks()
  }, []);

  return (
    <div className="App">
      {loading ? <LoadingMask /> : 
        books.map(book => <Books key={book.title} book={book} />)
      }
    </div>
  );
};

export default App;
