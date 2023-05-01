import { createAsyncThunk } from "@reduxjs/toolkit";
import { NewsData } from "../api/types";
import { getNews } from "../api/getNews";
import { setIsInitial, setIsLoading } from "./reducers/appReducer";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (
    {
      subject,
      country,
      sortBy,
      selectedMethod,
      page,
      pageSize,
    }: {
      subject: string;
      country: string;
      sortBy: string;
      selectedMethod: string;
      page: number;
      pageSize: number;
    },
    { dispatch, rejectWithValue }
  ) => {
    dispatch(setIsLoading(true));

    try {
      const res = await getNews(
        subject,
        country,
        sortBy,
        selectedMethod,
        page,
        pageSize
      );
      setTimeout(() => dispatch(setIsLoading(false)), 0);
      const { news } = transformNewsData(res);
      dispatch(setIsInitial(false));
      return { news, subject, country, sortBy, selectedMethod, page, pageSize };
    } catch (error) {
      setTimeout(() => dispatch(setIsLoading(false)), 0);
      return rejectWithValue(
        (error as { response: { data: { message: string } } }).response.data
          .message
      );
    }
  }
);

export const transformNewsData = (res: any): { news: NewsData } => {
  const news: NewsData = {
    status: res.status,
    totalResults: res.totalResults,
    articles: res.articles.map((article: any) => ({
      source: {
        id: article.source.id,
        name: article.source.name,
      },
      author: article.author,
      title: article.title,
      description: article.description,
      url: article.url,
      urlToImage: article.urlToImage,
      publishedAt: article.publishedAt,
      content: article.content,
    })),
  };

  return {
    news,
  };
};
