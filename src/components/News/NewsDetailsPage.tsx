import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../assets/arrow-back-7.svg";

import {
  NewDetailsPageContainer,
  NewDetailsPageTitle,
  NewDetailsPageInfo,
  NewDetailsPageReadMore,
  NewDetailsPageImage,
  NewDetailsPageAuthor,
  UserIcon,
  NewDetailsPagePublishDate,
  PublishIcon,
  BackButtonContainer,
} from "./styled";

const NewDetailsPage = () => {
  const location = useLocation();
  const article = location.state?.data;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <NewDetailsPageContainer>
      <BackButtonContainer onClick={handleGoBack}><BackIcon/></BackButtonContainer>
      <NewDetailsPageTitle>{article?.title}</NewDetailsPageTitle>
      <NewDetailsPageAuthor>
        {" "}
        <UserIcon />
        {article?.author}
      </NewDetailsPageAuthor>
      <NewDetailsPagePublishDate>
        {" "}
        <PublishIcon /> Publicat: {formatDateV2(article.publishedAt)}
      </NewDetailsPagePublishDate>
      <NewDetailsPageInfo>{article?.description}</NewDetailsPageInfo>
      {article?.urlToImage && (
        <NewDetailsPageImage src={article.urlToImage} alt={article.title} />
      )}
      <NewDetailsPageAuthor>
        {" "}
        <UserIcon /> Sursa: {article?.source.name}
      </NewDetailsPageAuthor>
      <NewDetailsPageReadMore
        href={article?.url}
        target="_blank"
        rel="noreferrer"
      >
        Citește mai mult...
      </NewDetailsPageReadMore>
    </NewDetailsPageContainer>
  );
};

export const formatDateV2 = (dateString: string | number | Date) => {
  const date = new Date(dateString);
  return date
    .toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    .replace(",", " ");
};

export default NewDetailsPage;
