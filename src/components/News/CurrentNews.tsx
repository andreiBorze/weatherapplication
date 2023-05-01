import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../store/store";
import { fetchNews } from "../../store/fetchNews";
import { PayloadAction } from "@reduxjs/toolkit";
import Article from "./Article";
import {
  NewsContainer,
  NewsItems,
  SectionTitle,
  ButtonContainer,
  NextButton,
  PaginationContainer,
} from "./styled";
import ReactPaginate from "react-paginate";

const CurrentNews: React.FC = () => {
  const { news, isInitial, subject, country, sortBy, selectedMethod, pageSize } = useSelector((store: AppStore) => ({
    isInitial: store.app.isInitial,
    news: store.news,
    subject: store.news.subject,
    country: store.news.country,
    sortBy: store.news.sortBy,
    pageSize: store.news.pageSize,
    selectedMethod: store.news.selectedMethod,
  }));

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    dispatch(
      fetchNews({
        page: currentPage,
        country,
        pageSize,
        subject,
        sortBy,
        selectedMethod,
      }) as unknown as PayloadAction<string | [any, any]>
    );
  }, [currentPage, sortBy]);

  if (isInitial) return <></>;
  return (
    <NewsContainer>
      <SectionTitle>Total results: {news.newsData?.totalResults}</SectionTitle>
      <NewsItems>
        {news.newsData?.articles.map((item, i) => {
          return <Article key={i} value={item} />;
        })}
      </NewsItems>
      <PaginationContainer>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={(selected) => setCurrentPage(selected.selected + 1)}
          pageRangeDisplayed={5}
          pageCount={Math.ceil((news.newsData?.totalResults ?? 0) / pageSize)}
          previousLabel="Previous"
          containerClassName="pagination"
          activeClassName="active"
        />
      </PaginationContainer>
    </NewsContainer>
  );
};

export default CurrentNews;