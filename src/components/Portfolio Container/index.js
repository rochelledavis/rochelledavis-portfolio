import React, { useState } from "react";
import Nav from "../Nav";
import Portfolio from "../Portfolio";
import About from "../About Me";
import Resume from "../Resume";
import Contact from "../Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}

      <footer>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="https://github.com/rochelledavis">GitHub</a>
          </li>
          <li className="mx-2">
            <a href="https://www.linkedin.com/in/rochelle-davis-79509290/">
              LinkedIn
            </a>
          </li>
          <li className="mx-2">
            <a href="https://twitter.com/rdavis221">Twitter</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
