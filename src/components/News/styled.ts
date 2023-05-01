import styled from "styled-components";
import { ReactComponent as PersonIcon } from '../../assets/person-244.svg';
import { ReactComponent as DateIcon } from '../../assets/calendar-check.svg';



export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.CurrentNewsContainer.containerBgColor};
  backdrop-filter: blur(5px);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  padding: 1.5rem 2rem;
`;
export const SectionTitle = styled.h3`
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.CurrentWeather.textColor};
`;
export const NewsItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  overflow-x: auto;

  > :last-child {
    margin-right: 2;
  }
`;

export const EachNewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border: 3px solid #ddd;
  border-radius: 7px;
  padding: 10px;
`;

export const TitleContainer = styled.div`
  margin: 1rem 1rem 1rem 0.2rem;

  h3 {
    font-size: 1.7rem;
  }

  &:hover {
    color: #a14e0e;
    cursor: pointer;

  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DescriptionContainer = styled.div`
display: flex;
flex-direction: column; 
flex: 2;

  p {
    margin: 0.5rem 1rem 0.5rem 1rem;
    font-family: Arial, sans-serif;
    font-size: 1.1rem;
    line-height: 1.5;
    color: #333;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  margin-left: 10px;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }
`;

export const NewDetailsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  background-color: ${({ theme }) => theme.ArticleNewContainer.containerBgColor};
`;

export const NewDetailsPageTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  padding: 0.4rem;
`;

export const NewDetailsPageInfo = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  padding: 1rem 1.7rem 1rem 1.7rem;
`;

export const NewDetailsPageImage = styled.img`
  max-width: 90%;
  height: auto;
  margin-bottom: 20px;
`;

export const NewDetailsPageReadMore = styled.a`
  font-size: 1.2rem;
  text-decoration: none;
  color: #0077cc;
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: #f1f1f1;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #0077cc;
    color: #fff;
  }
`;
export const NewDetailsPageAuthor = styled.p`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font-size: 1.2rem;
  text-decoration: none;
  color: black;
  margin-bottom: 10px;
  padding: 0.4rem;
  background-Color: rgba(18,79,115,0.05);
`;

export const UserIcon = styled(PersonIcon)`
  height: 1.2rem;
  width: 1.2rem;
  margin-right: 0.5rem;
  fill: #0077cc;
`;

export const NewDetailsPagePublishDate = styled.p`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font-size: 1.2rem;
  text-decoration: none;
  color: black;
  margin-bottom: 10px;
  padding: 0.4rem;
  background-Color: rgba(18,79,115,0.05);
`;

export const PublishIcon = styled(DateIcon)`
  height: 1.2rem;
  width: 1.2rem;
  margin-right: 0.5rem;
  fill: #0077cc;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 2em;
  justify-content: center;
  margin-top: 20px;
`;

export const NextButton = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0069d9;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const BackButtonContainer = styled.div`
  align-self: start;
  margin-top: 20px;
  border: 1px solid;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: white;

  &:hover {
    cursor: pointer;
    background-color: rgb(143, 141, 131);
  }

  &:focus {
    outline: none;
  }
`;



export const PaginationContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 1rem;

ul {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  margin: 0 0.25rem;
}

a {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s ease;
}

a:hover {
  background-color: #f5f5f5;
}

.active a {
  background-color: #333;
  color: #fff;
}
`;
