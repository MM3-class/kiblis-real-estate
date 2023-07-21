import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import SingleProperty from "../singleProperty/SingleProperty";
import Loader from "../loader/Loader";
import "./pagination.css";

const Pagination = ({ data }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.listings?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.listings?.length / itemsPerPage));
    window.scrollTo({ top: "60px" });
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.listings.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <section className="for-rent">
      <div className="property">
        {currentItems ? (
          currentItems.map((property) => {
            return (
              <SingleProperty property={property} key={property.property_id} />
            );
          })
        ) : (
          <Loader />
        )}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="prev"
        nextLinkClassName="next"
        activeLinkClassName="page-active"
      />
    </section>
  );
};

export default Pagination;
