import React from 'react';
import LightBgc from '../components/LightBgc';
import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import { breakpoints, colors } from '../components/styles';

const PostContainer = styled.div`
  padding: 10px;
  /* width: 100%; */
  /* border: 1px solid #ddd; */
`;

const Image = styled.div`
  position: relative;
  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 200px;
`;

const H4 = styled.h4`
  position: relative;
  /* bottom: 0; */
  /* transform: translateY(-50%); */
  width: 100%;
  padding: 10px 0;
  font-size: 24px;
  text-align: center;
  /* background-color: rgba(${colors.yellow}, 0.25); */

  background-color: rgba(${colors.yellow});

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -100;
  }
`;

const Paragraph = styled.p`
  padding: 20px 10px 10px;
  width: 85%;
  margin: 0 auto;
  text-align: center;
  line-height: 2;
`;

const Span = styled.span`
  display: block;
  width: 50%;
  max-width: 250px;
  text-align: center;
  padding: 10px;
  margin: 15px auto;
  background-color: rgba(${colors.yellow});
  /* font-weight: 700; */
  /* transform: translateX(50%); */
`;

const MoreArticles = styled.div``;

const MoreProducts = styled.div``;

const Products = styled.div``;

const BlogCardsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  padding: 10px 0;

  display: flex;
  justify-content: start;

  @media ${breakpoints('md')} {
    width: 80%;
  }
`;

const BlogCard = styled.div`
  min-width: 95%;
  width: 50%;
  height: 200px;
  margin: 0 10px;
  overflow: hidden;
  box-shadow: 0 0 10px -5px rgba(${colors.darkgrey4});

  @media ${breakpoints('xsm')} {
    min-width: calc(100% / 2 - 20px);
    /* min-width: unset; */
  }

  @media ${breakpoints('sm')} {
    min-width: calc(100% / 2 - 40px);
    margin: 0 20px;
  }

  @media ${breakpoints('md')} {
    min-width: calc(100% / 3 - 40px);
    margin: 0 20px;
  }
`;

const BlogCardImage = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: cover;
  height: 60%;
  width: 100%;
`;
const BlogCardContent = styled.div`
  text-align: center;
  padding: 5px;
`;

function SingleBlogPost() {
  const params = useParams();
  const loc = useLocation();

  return (
    <LightBgc>
      <PostContainer>
        <Image img={loc.state.data.url}></Image>
        <H4>ciekawy i długi tytuł ciekawego artykułu o czymkolwiek</H4>
        <Paragraph>{loc.state.data.content}</Paragraph>
        <Paragraph>{loc.state.data.content}</Paragraph>
        <Paragraph>{loc.state.data.content}</Paragraph>
      </PostContainer>
      <Span>pozostałe artykuły</Span>
      <div className="arrows">
        <i className="fa fa-chevron-left"></i>
        <i className="fa fa-chevron-right"></i>
      </div>
      <BlogCardsContainer>
        {loc.state.more.map((el) => (
          <BlogCard key={el.id}>
            <BlogCardImage img={el.url}></BlogCardImage>
            <BlogCardContent>{el.title}</BlogCardContent>
          </BlogCard>
        ))}
      </BlogCardsContainer>
    </LightBgc>
  );
}

export default SingleBlogPost;
