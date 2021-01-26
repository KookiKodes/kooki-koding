// Packages
import React from "react";

// Components
import Navbar from "./Navbar";

//* Styles
import navigation from "../styles/Navigation.module.sass";

export default function Navigation() {
  return (
    <nav className={navigation.container}>
      <Navbar />
    </nav>
  );
}
