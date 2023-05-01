import { createSlice } from "@reduxjs/toolkit";
import { NewsData } from "../../api/types";
import { fetchNews, transformNewsData } from "../fetchNews";

export type NewsState = {
  page: any;
  newsData: NewsData | null;
  isError: boolean;
  subject: string;
  country: string;
  sortBy: string;
  selectedMethod: string;
  pageSize: number;
};

const initialState: NewsState = {
  newsData: null,
  isError: false,
  page: 1,
  subject: "",
  country: "",
  sortBy: "",
  selectedMethod: "Global News",
  pageSize: 10,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isError = false;
        state.newsData = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        const {
          news,
          subject,
          country,
          sortBy,
          selectedMethod,
          page,
          pageSize,
        } = action.payload;
        const res = transformNewsData(news);
        state.newsData = res.news;
        state.country = country;
        state.page = page;
        state.subject = subject;
        state.sortBy = sortBy;
        state.selectedMethod = selectedMethod;
        state.pageSize = pageSize;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.isError = true;
        state.newsData = null;
      });
  },
});

export default newsSlice.reducer;
