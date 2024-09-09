import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleNotch,
  faHome,
  faUserCircle,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import HandshakeIcon from '@mui/icons-material/Handshake';


export default function Header() {
  const [showBasic, setShowBasic] = useState(true);
  const { id } = useParams();

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        style={{ marginLeft: "30px" }}
        src="https://th.bing.com/th/id/R.7ec8db4c8cd5e24316aa7df8e861ab17?rik=NzmVFzZV%2fqRVhA&pid=ImgRaw&r=0"
        width={"10%"}
      />
      <h3
        style={{
          fontFamily: "Rockwell",
          marginTop: "-5px",
          marginLeft: "20px",
        }}
      >
        Ceylon Travel <br />
        <h6
          style={{
            fontFamily: "Brush Script MT",
            marginLeft: "10px",
            fontSize: "18px",
          }}
        >
          When You Need To Be Sure
        </h6>
      </h3>
      <MDBNavbar
        expand="lg"
        style={{
          backgroundColor: "#333",
          marginTop: "-30px",
          paddingTop: "20px",
          paddingBottom: "16px",
          marginLeft: "220px",
        }}
      >
        <style>
          {`
    .navbar-angle::before {
      content: "";
      position: absolute;
      top: 0;
      left: -20px;
      width: 0;
      height: 0;
      border-top: 59px solid transparent;
      border-right: 20px solid #333;
    }
    `}
        </style>
        <div className="navbar-angle"></div>
        <MDBContainer fluid>
          <MDBNavbarToggler
            onClick={() => setShowBasic(!showBasic)}
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showBasic} navbar>
            <MDBNavbarNav right className="mb-2 mb-lg-0">
              <MDBNavbarItem active>
                <Link to={`/user/post/add/${id}`}>
                  <MDBNavbarLink
                    aria-current="page"
                    href="#"
                    style={{
                      color: "white",
                      marginLeft: "60px",
                      fontSize: "20px",
                      fontFamily: "Trebuchet MS",
                    }}
                  >
                    <FontAwesomeIcon icon={faHome} /> Home
                  </MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to={`/home`}>
                  <MDBNavbarLink
                    href="#"
                    style={{
                      color: "white",
                      marginLeft: "60px",
                      fontSize: "17px",
                      fontFamily: "Trebuchet MS",
                    }}
                  >
                    <FontAwesomeIcon icon={faCircleNotch} /> Trip Plans
                  </MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to={`/signup`}>
                  <MDBNavbarLink
                    href="#"
                    style={{
                      color: "white",
                      marginLeft: "60px",
                      fontSize: "17px",
                      fontFamily: "Trebuchet MS",
                    }}
                  >
                    <HandshakeIcon /> Partner with US
                  </MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to={`/user/profile/${id}`}>
                  <MDBNavbarLink
                    href="#"
                    style={{
                      color: "white",
                      marginLeft: "60px",
                      fontSize: "17px",
                      fontFamily: "Trebuchet MS",
                    }}
                  >
                    <FontAwesomeIcon icon={faUserFriends} /> My Profile
                  </MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to={`/AllBlogs/${id}`}>
                  <MDBNavbarLink
                    href="#"
                    style={{
                      color: "white",
                      marginLeft: "60px",
                      fontSize: "17px",
                      fontFamily: "Trebuchet MS",
                    }}
                  >
                    <FontAwesomeIcon icon={faUserFriends} />
                    View Blogs
                  </MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to={`/`}>
                  <MDBNavbarLink
                    href="#"
                    style={{
                      color: "white",
                      marginLeft: "60px",
                      fontSize: "17px",
                      fontFamily: "Trebuchet MS",
                    }}
                  >
                    <FontAwesomeIcon icon={faUserFriends} />
                    Log out
                  </MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
