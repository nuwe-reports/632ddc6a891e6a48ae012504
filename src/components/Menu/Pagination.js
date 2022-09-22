import React from "react";

function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div id="nex">
      {gotoPrevPage && (
        <button className="btn btn-warning" onClick={gotoPrevPage}>
          Previous
        </button>
      )}
      {gotoNextPage && (
        <button className="btn btn-warning" onClick={gotoNextPage}>
          Next
        </button>
      )}
    </div>
  );
}
export default Pagination;