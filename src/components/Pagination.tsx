import { SetStateAction, useState } from "react";
export default function Pagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 6;

    function handlePageChange(pageNumber: SetStateAction<number>) {
        setCurrentPage(pageNumber);
        // Aquí podrías hacer una llamada a una API o actualizar los datos de acuerdo a la página seleccionada
    }

    return (
        <nav className="flex items-center justify-center my-7">
            <ul className="flex items-center -space-x-px h-10 text-base">
                <li>
                    <button
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                        Anterior
                    </button>
                </li>

                {[...Array(totalPages).keys()].map((pageNumber) => (
                    <li key={pageNumber + 1}>
                        <button
                            onClick={() => handlePageChange(pageNumber + 1)}
                            className={`${
                                currentPage === pageNumber + 1 ? "text-white bg-gray-700" : "text-gray-500 bg-white hover:bg-gray-100"
                            } flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 rounded-lg`}
                        >
                            {pageNumber + 1}
                        </button>
                    </li>
                ))}

                <li>
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                        Siguiente
                    </button>
                </li>
            </ul>
        </nav>
    );
}