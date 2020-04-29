import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  let navList = [
    { to: "/", link: "HomePage" },
    { to: "/hepl", link: "Hepl Numbers" },
    { to: "/counts", link: "Counts" },
  ];
  return (
    <nav>
      <div className="logo">Covit_news</div>
      <div className="nav-items">
        {navList.map((list, key) => (
          <div className="nav-item" key={key}>
            <Link to={list.to}>{list.link}</Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
