import React from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../styles';
import { Link } from 'react-router-dom';

const CardsContainer = styled.div`
  @media ${breakpoints('sm')} {
    display: flex;
  }
  > div {
    margin: 10px auto;
    padding: 10px;
    width: 95%;
    background-color: rgba(${colors.lightgrey1}, 0.25);
    backdrop-filter: blur(3px);
    box-shadow: 0 0 8px -5px rgba(${colors.darkgrey4});

    @media ${breakpoints('sm')} {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 200px;
  min-width: 200px;
  width: 100%;
  position: relative;
  border: 3px solid rgba(${colors.darkgrey4});

  /* flex-grow: 1;
  flex-basis: 200px; */
`;

const ContentContainer = styled.div``;

const H4 = styled.h4`
  font-size: 16px;
  margin-top: 5px;
`;

const Span = styled.span`
  display: inline-block;
  padding: 3px;
  margin: 5px 0;
  font-size: 14px;
  background-color: rgba(${colors.yellow});
`;

const Content = styled.p`
  line-height: 1.4;
  font-size: 14px;
`;

const Button = styled.div`
  width: max-content;
  height: max-content;
  padding: 5px 10px;
  margin: 5px 0;
  background-color: rgba(${colors.yellow});

  a {
    text-decoration: none;
  }
`;

function BlogPostCardMedium({ data }) {
  return (
    <CardsContainer>
      {data.map((data) => {
        const title = data.title.toLowerCase().split(' ').join('-');
        return (
          <div key={data.id}>
            <Image img={data.url}></Image>
            <ContentContainer>
              <H4>{data.title}</H4>
              <Span>{data.date}</Span>
              <Content>{data.content.slice(0, 300)}...</Content>
            </ContentContainer>
            <Button>
              <Link to={`/blog/${title}`}>więcej</Link>
            </Button>
          </div>
        );
      })}
    </CardsContainer>
  );
}

export default BlogPostCardMedium;
