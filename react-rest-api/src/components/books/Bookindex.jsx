import {useEffect, useContext} from "react";
import BookContext from "../../Context/BookContext";
import { Link } from "react-router-dom";


export const Bookindex = () => {
  const {books, getBooks, deleteBook} = useContext(BookContext);
  useEffect(() => {
  getBooks();
  }, []);
 
  return (
    <div className="mt-12">
    <div className="flex justify-end m-2 p-2">
      <Link to={"/books/create"} className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
        New Book
      </Link>
    </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-5 py-2">
                Title
              </th>
              <th scope="col" className="px-5 py-2">
                Author
              </th>
              <th scope="col" className="px-5 py-2">
                Publication Year
              </th>
              <th scope="col" className="px-5 py-2">
                ISBN
              </th>
              <th scope="col" className="px-5 py-2">
                Nr. in Stock
              </th>
              <th scope="col" className="px-5 py-2">
               Edit | Delete
              </th>
            </tr>
          </thead>
          <tbody>
           {books.map((book)=>{
            return(
            <tr key={book.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-3 py-2">{book.title}</td>
              <td className="px-3 py-2">{book.author}</td>
              <td className="px-3 py-2">{book.publication_year}</td>
              <td className="px-3 py-2">{book.ISBN}</td>
              <td className="px-3 py-2">{book.no_in_stock}</td>
              <td className="px-3 py-2 space-x-2">
              <Link to={`/books/${book.id}/edit`} className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded-md">Edit</Link>
              <button onClick={() => deleteBook(book.id)} className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md">Delete</button>
              </td>
            </tr>
            );
           })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
