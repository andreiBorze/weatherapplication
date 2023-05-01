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
} from "./styled";

interface Props {
  subject?: string;
  sortBy?: string;
}

const CurrentNews: React.FC<Props> = () => {
  const {
    news,
    isInitial,
    subject,
    country,
    sortBy,
    selectedMethod,
    pageSize,
  } = useSelector((state: AppStore) => ({
    isInitial: state.app.isInitial,
    news: state.news,
    subject: state.news.subject,
    country: state.news.country,
    sortBy: state.news.sortBy,
    pageSize: state.news.pageSize,
    selectedMethod: state.news.selectedMethod,
  }));
  const [currentPage, setCurrentPage] = useState<number>(1);
  const dispatch = useDispatch();

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
  }, [currentPage, subject, sortBy]);

  return (
    <NewsContainer>
      <SectionTitle>Total results: {news.newsData?.totalResults}</SectionTitle>
      <NewsItems>
        {news.newsData?.articles.map((item, i) => {
          return <Article key={i} value={item} />;
        })}
      </NewsItems>
    </NewsContainer>
  );
};

export default CurrentNews;
