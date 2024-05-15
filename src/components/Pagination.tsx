import { useContext, useEffect, useState } from "react";
import ProductsContext from "../context/ProductsContext";
import '../App.css'


export default function Pagination() {
  const { page, setPage } = useContext(ProductsContext);
  const [currentPage, setCurrentPage] = useState(1);

  function incrementPage() {
    console.log("Se hizo clic en incrementPage");
    setPage(page + 1);
  }
  function decrementPage() {
    console.log("Se hizo clic en decrementPage");
    setPage(page - 1);
  }

  function setPageNumber(pageNumber: number) {
    setPage(pageNumber);
  }
  useEffect(() => {
    setCurrentPage(page);
  }, [page]);
  return (
    <nav className="pagination">
      <ul className="pagination__list">
        <li>
          <a
            onClick={decrementPage}
            href="#"
            className="pagination__link"
          >
            Previous
          </a>
        </li>

        {Array.from({ length: 5 }, (_, index) => index + 1).map(
          (pageNumber) => (
            <li key={pageNumber}>
              <a
                onClick={() => setPageNumber(pageNumber)}
                href="#"
                className={`pagination__link ${
                  currentPage === pageNumber ? "pagination__link--active" : ""
                }`}
              >
                {pageNumber}
              </a>
            </li>
          )
        )}

        <li>
          <a
            onClick={incrementPage}
            href="#"
            className="pagination__link"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}