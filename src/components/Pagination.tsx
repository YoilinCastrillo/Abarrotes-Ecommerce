import { useContext, useEffect, useState } from "react";
import ProductsContext from "../context/ProductsContext";

export default function Pagination() {
    const { page, SetPage } = useContext(ProductsContext);
    const [currentPage, setCurrentPage] = useState(1);

    function incrementPage() {
  SetPage(page + 1);
    }

    function decrementPage() {
  SetPage(page - 1);
    }

    function setPageNumber(pageNumber: number) {
 SetPage(pageNumber);
    }

    useEffect(() => {
        setCurrentPage(page);
    }, [page]);

    return (
        <>
            <nav className="pagination">
                <ul className="pagination-list">
                    <li>
                        <button
                            onClick={decrementPage}
                            className="pagination-button"
                        >
                            Anterior
                        </button>
                    </li>

                    {Array.from({ length: 5 }, (_, index) => index + 1).map(
                        (pageNumber) => (
                            <li key={pageNumber}>
                                <button
                                    onClick={() => setPageNumber(pageNumber)}
                                    className={`pagination-button ${
                                        currentPage === pageNumber
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    {pageNumber}
                                </button>
                            </li>
                        )
                    )}

                    <li>
                        <button
                            onClick={incrementPage}
                            className="pagination-button"
                        >
                            Siguiente
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    );
}