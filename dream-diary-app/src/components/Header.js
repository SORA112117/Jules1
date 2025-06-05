import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">夢日記</Link>
        <Link to="/new">新しい夢を記録</Link>
      </nav>
    </header>
  );
}

export default Header;
