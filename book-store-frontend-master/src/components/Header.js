// import React, { useState } from "react";
// import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
// import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
// import { NavLink } from "react-router-dom";
// const Header = () => {
//   const [value, setValue] = useState();
//   return (
//     <div>
//       <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
//         <Toolbar>
//           <NavLink to="/" style={{ color: "white" }}>
//             <Typography>
//               <LibraryBooksOutlinedIcon />
//             </Typography>
//           </NavLink>
//           <Tabs
//             sx={{ ml: "auto" }}
//             textColor="inherit"
//             indicatorColor="primary"
//             value={value}
//             onChange={(e, val) => setValue(val)}
//           >
//             <Tab LinkComponent={NavLink} to="/add" label="Add product" />
//             <Tab LinkComponent={NavLink} to="/books" label="Books" />
//             <Tab LinkComponent={NavLink} to="/about" label="About Us" />
//           </Tabs>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{
        backgroundColor: "#2A2A2A",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)"
      }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "#BB86FC", textDecoration: "none" }}>
            <Typography variant="h6">
              <LibraryBooksOutlinedIcon sx={{ mr: 1 }} /> BookStore
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add product" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/about" label="About Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;