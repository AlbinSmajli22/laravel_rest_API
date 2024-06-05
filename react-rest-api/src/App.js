import { Route, Routes, Link } from "react-router-dom";
import {BookProvider} from "./Context/BookContext";

import {Home} from './components/Home';
import {Bookcreat} from './components/books/Bookcreat';
import {Bookedit} from './components/books/Bookedit';
import {Bookindex} from './components/books/Bookindex';



function App() {
  return (
    <BookProvider>
    <div className="bg-[url('./img/book_shelf.jpeg')]">
     <div className="max-w-8xl max-auto min-h-screen ">
      <nav>
        <ul className="flex">
          <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
            <Link to='/'>Home</Link>
          </li>
          <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
            <Link to='/books'>Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={< Home />}> </Route>
        <Route path="/books" element={< Bookindex />}> </Route>
        <Route path="/books/create" element={< Bookcreat />}> </Route>
        <Route path="/books/:id/edit" element={<  Bookedit />}> </Route>
      </Routes>
     </div>
    </div>
    </BookProvider>
  );
}

export default App;
