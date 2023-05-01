import React from "react";

interface Props {
  currentPage: number;
  totalPages: number;
  goToPage: (page: number) => void;
}

const PaginationButton: React.FC<Props> = ({
  currentPage,
  totalPages,
  goToPage,
}) => {
  const renderButton = (page: number, label: string) => {
    const isActive = currentPage === page;
    return (
      <button
        onClick={() => goToPage(page)}
        className={`pagination-button ${isActive ? "active" : ""}`}
      >
        {label}
      </button>
    );
  };

  const renderPrevButton = () => {
    const isDisabled = currentPage === 1;
    return (
      <button
        onClick={() => goToPage(currentPage - 1)}
        className={`pagination-button ${isDisabled ? "disabled" : ""}`}
        disabled={isDisabled}
      >
        Prev
      </button>
    );
  };

  const renderNextButton = () => {
    const isDisabled = currentPage === totalPages;
    return (
      <button
        onClick={() => goToPage(currentPage + 1)}
        className={`pagination-button ${isDisabled ? "disabled" : ""}`}
        disabled={isDisabled}
      >
        Next
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      const isCurrentPage = currentPage === i;
      pageButtons.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`pagination-button ${isCurrentPage ? "active" : ""}`}
        >
          {i}
        </button>
      );
    }
    return pageButtons;
  };

  return (
    <div className="pagination-buttons">
      {renderPrevButton()}
      {renderPageButtons()}
      {renderNextButton()}
    </div>
  );
};

export default PaginationButton;