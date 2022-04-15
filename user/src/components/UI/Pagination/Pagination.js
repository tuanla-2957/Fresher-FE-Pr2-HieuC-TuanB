import './Pagination.scss'
import React from 'react';
import PropTypes from 'prop-types'

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func
}

Pagination.defaultProps = {
    onPageChange: null
}

function Pagination(props) {
    const { pagination, onPageChange } = props;
    const { _page, _limit, _totalRows } = pagination;
    const totalPages = Math.ceil(_totalRows / _limit)

    function handlePageSize() {
        if (Number.isInteger(totalPages)) {
            if (Number(totalPages) > 7) {
                if (_page > 4) {
                    return [...Array(_page + 4).keys()].slice(_page - 3)
                }
                return [...Array(8).keys()].slice(1)
            }
            return [...Array(totalPages + 1).keys()].slice(1)
        }
        return []
    }

    function handlePageChange(newPage) {
        onPageChange && onPageChange(newPage)
    }

    return (
        <ul className="pagination">
            <li
                className={_page === 1 ? "pagination__link page--disable" : "pagination__link"}
                disabled={_page === 1}
                onClick={() => handlePageChange(_page - 1)}
            >
                <i className="fas fa-angle-left"></i>
            </li>
            {handlePageSize().map((pageNumber) => {
                return (
                    <li
                        className={_page === pageNumber ? "pagination__link page--active" : "pagination__link"}
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            <li
                className={_page === totalPages ? "pagination__link page--disable" : "pagination__link"}
                disabled={_page >= totalPages}
                onClick={() => handlePageChange(_page + 1)}
            >
                <i className="fas fa-angle-right"></i>
            </li>
        </ul>
    );
}

export default Pagination
