import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import ArrowLeft from '../../assets/arrow-left.svg?react';
import ArrowRight from '../../assets/arrow-right.svg?react';
import cn from "classnames";

import s from './Pagination.module.scss';
import { useEffect, useState } from "react";

export const Pagination = () => {
    const pathname = useLocation().pathname;
    const [pagePagination, setPagePagination] = useState('');
    const { page, pages } = useSelector(state => state.goods);

    useEffect(() => {
        setPagePagination(page)
    }, [page])

    const handlePageChange = newPage => {
        setPagePagination(newPage);
    }

    const handlePrevPage = () => {
        if (pagePagination > 1) {
            handlePageChange(pagePagination - 1)
        }
    }

    const handleNextPage = () => {
        if (pagePagination < pages) {
            handlePageChange(pagePagination + 1)
        }
    }

    const renderPaginationItems = () => {
        const paginationItems = [];

        let startPage = Math.max(1, pagePagination == pages ? pagePagination - 2 : pagePagination - 1);
        let endPage = Math.min(startPage + 2, pages);

        for (let i = startPage; i <= endPage; i++) {
            paginationItems.push(
                <li key={i}>
                    <NavLink
                        className={cn(s.link, i == pagePagination ? s.linkActive : '')}
                        to={`${pathname}?page=${i}`}
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </NavLink>
                </li>
            )
        }
        return paginationItems;
    }

    return (
        pages > 1 &&
        <div className={s.pagination}>
            <button className={s.arrow}
            onClick={handlePrevPage}
            disabled={pagePagination <=2 || pages <= 3}>
            <ArrowLeft />
            </button>
                <ul className={s.list}>{renderPaginationItems()}</ul> 
            <button className={s.arrow}
            onClick={handleNextPage}
            disabled={pagePagination >= pages - 1 || pages <= 3}>
            <ArrowRight />
            </button>
        </div>
    )
}