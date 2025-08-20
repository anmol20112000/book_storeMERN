// import {
//     Box,
//     Button,
//     Checkbox,
//     FormControlLabel,
//     FormLabel,
//     TextField,
//   } from "@mui/material";
//   import axios from "axios";
//   import React, { useEffect, useState } from "react";
//   import { useNavigate, useParams } from "react-router-dom";
  
//   const BookDetail = () => {
//     const [inputs, setInputs] = useState();
//     const id = useParams().id;
//     const [checked, setChecked] = useState(false);
//     const history = useNavigate();
//     useEffect(() => {
//       const fetchHandler = async () => {
//         await axios
//           .get(`http://localhost:5000/books/${id}`)
//           .then((res) => res.data)
//           .then((data) => setInputs(data.book));
//       };
//       fetchHandler();
//     }, [id]);
  
//     const sendRequest = async () => {
//       await axios
//         .put(`http://localhost:5000/books/${id}`, {
//           name: String(inputs.name),
//           author: String(inputs.author),
//           description: String(inputs.description),
//           price: Number(inputs.price),
//           image: String(inputs.image),
//           available: Boolean(checked),
//         })
//         .then((res) => res.data);
//     };
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       sendRequest().then(() => history("/books"));
//     };
//     const handleChange = (e) => {
//       setInputs((prevState) => ({
//         ...prevState,
//         [e.target.name]: e.target.value,
//       }));
//     };
  
//     return (
//       <div>
//         {inputs && (
//           <form onSubmit={handleSubmit}>
//             <Box
//               display="flex"
//               flexDirection="column"
//               justifyContent={"center"}
//               maxWidth={700}
//               alignContent={"center"}
//               alignSelf="center"
//               marginLeft={"auto"}
//               marginRight="auto"
//               marginTop={10}
//             >
//               <FormLabel>Name</FormLabel>
//               <TextField
//                 value={inputs.name}
//                 onChange={handleChange}
//                 margin="normal"
//                 fullWidth
//                 variant="outlined"
//                 name="name"
//               />
//               <FormLabel>Author</FormLabel>
//               <TextField
//                 value={inputs.author}
//                 onChange={handleChange}
//                 margin="normal"
//                 fullWidth
//                 variant="outlined"
//                 name="author"
//               />
//               <FormLabel>Description</FormLabel>
//               <TextField
//                 value={inputs.description}
//                 onChange={handleChange}
//                 margin="normal"
//                 fullWidth
//                 variant="outlined"
//                 name="description"
//               />
//               <FormLabel>Price</FormLabel>
//               <TextField
//                 value={inputs.price}
//                 onChange={handleChange}
//                 type="number"
//                 margin="normal"
//                 fullWidth
//                 variant="outlined"
//                 name="price"
//               />
//               <FormLabel>Image</FormLabel>
//               <TextField
//                 value={inputs.image}
//                 onChange={handleChange}
//                 margin="normal"
//                 fullWidth
//                 variant="outlined"
//                 name="image"
//               />
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     checked={checked}
//                     onChange={() => setChecked(!checked)}
//                   />
//                 }
//                 label="Available"
//               />
  
//               <Button variant="contained" type="submit">
//                 Update Book
//               </Button>
//             </Box>
//           </form>
//         )}
//       </div>
//     );
//   };
  
//   export default BookDetail;


import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookDetail = () => {
  const [inputs, setInputs] = useState();
  const id = useParams().id;
  const [checked, setChecked] = useState(false);
  const history = useNavigate();

  // Fetches book data and sets the state
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/books/${id}`)
        .then((res) => res.data)
        .then((data) => {
          setInputs(data.book);
          setChecked(data.book.available); // 👈 Fix: Correctly set the checkbox state
        });
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/books/${id}`, {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/books"));
  };
  
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      {inputs && (
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            maxWidth={600}
            margin={"60px auto"}
            padding={"20px"}
            borderRadius={5}
            boxShadow={"0 4px 12px rgba(0, 0, 0, 0.4)"}
            sx={{
              backgroundColor: "#2A2A2A",
              "& .MuiFormLabel-root": {
                color: "#E0E0E0",
                mt: 2,
              },
              "& .MuiInputBase-input": {
                color: "#E0E0E0",
                backgroundColor: "#3A3A3A",
              },
              "& .MuiButton-contained": {
                backgroundColor: "#BB86FC",
              },
            }}
          >
            <FormLabel>Name</FormLabel>
            <TextField
              value={inputs.name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
            />
            <FormLabel>Author</FormLabel>
            <TextField
              value={inputs.author}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="author"
            />
            <FormLabel>Description</FormLabel>
            <TextField
              value={inputs.description}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="description"
            />
            <FormLabel>Price</FormLabel>
            <TextField
              value={inputs.price}
              onChange={handleChange}
              type="number"
              margin="normal"
              fullWidth
              variant="outlined"
              name="price"
            />
            <FormLabel>Image</FormLabel>
            <TextField
              value={inputs.image}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="image"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
              }
              label="Available"
              sx={{ color: "#E0E0E0" }} // 👈 Added color for label
            />

            <Button variant="contained" type="submit" sx={{ mt: 2 }}>
              Update Book
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default BookDetail;
  