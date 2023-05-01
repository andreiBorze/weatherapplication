import React from "react";
import { NewsData } from "../../api/types";
import { useNavigate } from "react-router-dom";
import {
  ContentContainer,
  ImageContainer,
  NewsContainer,
  TitleContainer,
  EachNewsContainer,
  DescriptionContainer,
  PublishIcon,
} from "./styled";

interface ArticleProps {
  key: number;
  value: {
    source: {
      id: string;
      name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  };
}

export const formatDate = (dateString: string | number | Date) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};


const Article: React.FC<ArticleProps> = (props) => {
  const data = props.value;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/news/${data.source.name}/${encodeURIComponent(data.title)}`, {
      state: { data },
    });
  };

  return (
    <EachNewsContainer onClick={handleClick}>
      <TitleContainer>
        <h3>{data.title}</h3>
      </TitleContainer>
      <ContentContainer>
        <DescriptionContainer>
          <p> <PublishIcon />{`${formatDate(data.publishedAt)}`}</p>
          <p>{`${data.description}`}</p>
        </DescriptionContainer>
        <ImageContainer>
          {data.urlToImage && <img src={data.urlToImage} alt={data.title} />}
        </ImageContainer>
      </ContentContainer>
    </EachNewsContainer>
  );
};

export default Article;
