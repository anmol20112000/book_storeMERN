// import React, { useEffect, useState } from "react";
// import "./Book.css";
// import axios from "axios";
// import Book from "./Book";
// const URL = "http://localhost:5000/books";
// const fetchHandler = async () => {
//   return await axios.get(URL).then((res) => res.data);
// };
// const Books = () => {
//   const [books, setBooks] = useState();
//   useEffect(() => {
//     fetchHandler().then((data) => setBooks(data.books));
//   }, []);
//   console.log(books);
//   return (
//     <div>
//       <ul>
//         {books &&
//           books.map((book, i) => (
//             <li key={i}>
//               <Book book={book} />
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default Books;


// import { Button } from "@mui/material";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import "./Book.css";

// const Book = (props) => {
//   const history = useNavigate();
//   const { _id, name, author, description, price, image } = props.book;

//   const deleteHandler = async () => {
//     await axios
//       .delete(`http://localhost:5000/books/${_id}`)
//       .then((res) => res.data)
//       .then(() => history("/"))
//       .then(() => history("/books"));
//   };

//   return (
//     <div className="card">
//       <img src={image} alt={name} />
//       <article>By {author}</article>
//       <h3>{name}</h3>
//       <p>{description}</p>
//       <h3>Rs {price}</h3>
//       <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto", backgroundColor: "#BB86FC" }}>
//         Update
//       </Button>
//       <Button color="error" onClick={deleteHandler} sx={{ mt: "auto", color: "#CF6679" }}>
//         Delete
//       </Button>
//     </div>
//   );
// };

// export default Book;

import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import Book from "./Book";

const URL = "http://localhost:5000/books";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      const endpoint = searchTerm ? `${URL}?search=${searchTerm}` : URL;
      try {
        const res = await axios.get(endpoint);
        setBooks(res.data.books);
      } catch (err) {
        console.error("Error fetching books:", err);
        setBooks([]); // Set books to an empty array on error
      } finally {
        setLoading(false);
      }
    };
    const delay = setTimeout(() => {
      fetchBooks();
    }, 300);
    return () => clearTimeout(delay);
  }, [searchTerm]);

  if (loading) {
    return <div style={{ textAlign: "center", marginTop: "50px", color: "white" }}>Loading books...</div>;
  }

  if (books.length === 0 && searchTerm) {
    return <div style={{ textAlign: "center", marginTop: "50px", color: "white" }}>No books found for "{searchTerm}".</div>;
  }

  if (books.length === 0 && !searchTerm) {
    return <div style={{ textAlign: "center", marginTop: "50px", color: "white" }}>No books found.</div>;
  }

  return (
    <div>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <input
          type="text"
          placeholder="Search books by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            width: "50%",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
            backgroundColor: "#3A3A3A",
            color: "#E0E0E0"
          }}
        />
      </div>
      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {books.map((book) => (
          <li key={book._id}>
            <Book book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;