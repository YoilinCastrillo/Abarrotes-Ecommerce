import { SetStateAction, useState } from "react";
import '../App.css'

export default function Pagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 6;

    function handlePageChange(pageNumber: SetStateAction<number>) {
        setCurrentPage(pageNumber);
        // Aquí podrías hacer una llamada a una API o actualizar los datos de acuerdo a la página seleccionada
    }

    return (
        <nav className="PaginacionBarra">
            <ul className="PaginacionUl">
                <li>
                    <button
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        Anterior
                    </button>
                </li>

                {[...Array(totalPages).keys()].map((pageNumber) => (
                    <li key={pageNumber + 1}>
                        <button
                            onClick={() => handlePageChange(pageNumber + 1)}
                            className={`${currentPage === pageNumber + 1 ? "text-white bg-gray-700" : "text-gray-500 bg-white hover:bg-gray-100"}`}
                        >
                            {pageNumber + 1}
                        </button>
                    </li>
                ))}

                <li>
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        Siguiente
                    </button>
                </li>
            </ul>
        </nav>
    );
}
