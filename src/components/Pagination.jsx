import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  // const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  //   loop through pageNumbers 1..10
  // for (let i = 1; i <= totalPages; i++) {
  //   pageNumbers.push(i);
  // }

  return (
    <nav>
      <ul className="pagination flex items-center justify-center gap-2 mx-5 my-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          className={`cursor-pointer ${
            currentPage === 1 ? "pagination_disabled" : " "
          }`}
        >
          prev
        </button>
        {/* first way of mapping pagenumbers */}
        {/* {pageNumbers.map((number) => {
          return (
            <li
              key={number}
              className={`flex items-center p-2 gap-2 ${
                number === currentPage ? "selected_page" : ""
              }`}
            >
              <a
                href="!#"
                className="page_link text-[14px]"
                onClick={() => paginate(number)}
              >
                {number}
              </a>
            </li>
          );
        })} */}
        {/* second way of mapping page numbers */}
        {/* {[...Array(totalPages)].map((_, number) => (
          <li
            key={number + 1}
            className={`flex items-center p-2 gap-2 ${
              number + 1 === currentPage ? "selected_page" : ""
            }`}
          >
            <a
              href="!#"
              className="page_link text-[14px]"
              onClick={() => paginate(number + 1)}
            >
              {number + 1}
            </a>
          </li>
        ))} */}
        {/* third way of mapping the page numbers and apply corresponding pagination */}
        {Array.from({ length: totalPages }, (_, number) => (
          <li
            key={number + 1}
            className={`flex items-center p-2 gap-2 ${
              number + 1 === currentPage ? "selected_page" : ""
            }`}
          >
            <a
              href="!#"
              className="page_link text-[14px]"
              onClick={() => paginate(number + 1)}
            >
              {number + 1}
            </a>
          </li>
        ))}

        <button
          onClick={() => paginate(currentPage + 1)}
          className={`cursor-pointer ${
            currentPage >= totalPages ? "pagination_disabled " : " "
          }`}
        >
          next
        </button>
      </ul>
    </nav>
  );
};

export default Pagination;
