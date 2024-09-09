import React, { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import Sidebar from '../../component/Sidebar'
import Navbar from '../../component/Navbar'
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from "../../actions/authActions";

const Layout = () => {
  const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const authenticated = useSelector(state => state.auth.authenticated)

  const [user, setUser] = useState({});
  const fUser = useSelector(state => state.auth.user)
  useEffect(() => {
    setUser(fUser)
  }, [user]);



  useEffect(() => {
    if (!authenticated) {
      dispatch(isLoggedIn());
    }
  }, []);


  if (!authenticated) {
    return <Navigate to='/login' />
  };

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%" marginBottom='3rem'>
      <Sidebar
        user={user || {}}
        isNonMobile={isNonMobile}
        drawerWidth="300px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          user={user || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;