import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarList from "./NavbarList";
import Offcanvas from "react-bootstrap/Offcanvas";

const Header: React.FC = (): JSX.Element => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div>
      <div className="headerContainer">
        <div className="flex items-center gap-3">
          <img className="school-logo" src="/logo.jpeg" alt="logo" />
          <div className="flex flex-col pt-2">
            <h1 className="text-orange-600 headerTitle">SRI SANGAMESWARA</h1>
            <h1 className="text-green-600 headerTitle">SCHOOL</h1>
          </div>
        </div>
        <div className="navbarList">
          <NavbarList />
        </div>
        <div className="navbarMenu" onClick={handleShow}>
          <MenuIcon fontSize="large" color={"info"} />
        </div>
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          style={{ width: "50%" }}
          closeButton
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <div className="mobile-navbar">
              <NavbarList />
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};

export default Header;
