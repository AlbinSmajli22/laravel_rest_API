import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:8000/api/v1/";

const BookContext = createContext();

const initialForm ={
  title: "",
  author: "",
  publication_year: "",
  ISBN: "",
  no_in_stock: "",
}

export const BookProvider = ({ children }) => {
  const [formValues, setFormValues] = useState(initialForm);
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const getBooks = async () => {
    const apiBooks = await axios.get("books");
    setBooks(apiBooks.data.data);
  };
  const getBook = async (id) => {
    const response = await axios.get("books/" + id);
    const apiBook = response.data.data;
    setBook(apiBook);
    setFormValues({
      title: apiBook.title,
      author: apiBook.author,
      publication_year: apiBook.publication_year,
      ISBN: apiBook.ISBN,
      no_in_stock: apiBook.no_in_stock,
    });
  };

  const storeBook = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/v1/books", formValues);
      setFormValues(initialForm);
      navigate("/books");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const updateBook = async (e) => {
    e.preventDefault();
    try {
      await axios.put("books/" + book.id, formValues);
      setFormValues(initialForm);
      navigate("/books");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const deleteBook = async (id) =>{
    await axios.delete("books/"+id);
    getBooks();
  }

  return (
    <BookContext.Provider
      value={{
        book,
        books,
        getBooks,
        getBook,
        onChange,
        formValues,
        storeBook,
        errors,
        setErrors,
        updateBook,
        deleteBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
