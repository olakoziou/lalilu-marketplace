import React from 'react';
import styled from 'styled-components';
import BlogPostCardBig from '../components/blog/BlogPostCardBig';
import BlogPostCardMedium from '../components/blog/BlogPostCardMedium';
import BlogPostCardSmall from '../components/blog/BlogPostCardSmall';
import { colors } from '../components/styles';

const BlogContainer = styled.div``;

function Blog() {
  const posts = [
    {
      id: 1,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToE4dPyU3t5h0lkGhsiAQqN2V50zJ25C9o4w&usqp=CAU',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '5/8/2021',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel tortor lorem. Nullam mauris urna, scelerisque at gravida quis, ullamcorper et tortor. In ex sapien, dignissim id tristique vitae, tincidunt vitae leo. Duis aliquet nec purus sed rhoncus. Aenean aliquam neque at justo hendrerit, id tempus leo luctus. Donec ultricies fermentum nibh, vitae viverra ipsum aliquet sit amet. Proin cursus magna ultricies purus fringilla tincidunt.',
      link: '/1',
    },
    {
      id: 2,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToE4dPyU3t5h0lkGhsiAQqN2V50zJ25C9o4w&usqp=CAU',
      title: 'Title 2',
      date: '5/8/2021',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel tortor lorem. Nullam mauris urna, scelerisque at gravida quis, ullamcorper et tortor. In ex sapien, dignissim id tristique vitae, tincidunt vitae leo. Duis aliquet nec purus sed rhoncus. Aenean aliquam neque at justo hendrerit, id tempus leo luctus. Donec ultricies fermentum nibh, vitae viverra ipsum aliquet sit amet. Proin cursus magna ultricies purus fringilla tincidunt.',
      link: '/2',
    },
    {
      id: 3,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToE4dPyU3t5h0lkGhsiAQqN2V50zJ25C9o4w&usqp=CAU',
      title: 'Title 3',
      date: '5/8/2021',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel tortor lorem. Nullam mauris urna, scelerisque at gravida quis, ullamcorper et tortor. In ex sapien, dignissim id tristique vitae, tincidunt vitae leo. Duis aliquet nec purus sed rhoncus. Aenean aliquam neque at justo hendrerit, id tempus leo luctus. Donec ultricies fermentum nibh, vitae viverra ipsum aliquet sit amet. Proin cursus magna ultricies purus fringilla tincidunt.',
      link: '/3',
    },
    {
      id: 4,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToE4dPyU3t5h0lkGhsiAQqN2V50zJ25C9o4w&usqp=CAU',
      title: 'Title 4',
      date: '5/8/2021',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel tortor lorem. Nullam mauris urna, scelerisque at gravida quis, ullamcorper et tortor. In ex sapien, dignissim id tristique vitae, tincidunt vitae leo. Duis aliquet nec purus sed rhoncus. Aenean aliquam neque at justo hendrerit, id tempus leo luctus. Donec ultricies fermentum nibh, vitae viverra ipsum aliquet sit amet. Proin cursus magna ultricies purus fringilla tincidunt.',
      link: '/4',
    },
    {
      id: 5,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToE4dPyU3t5h0lkGhsiAQqN2V50zJ25C9o4w&usqp=CAU',
      title: 'Title 5',
      date: '5/8/2021',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel tortor lorem. Nullam mauris urna, scelerisque at gravida quis, ullamcorper et tortor. In ex sapien, dignissim id tristique vitae, tincidunt vitae leo. Duis aliquet nec purus sed rhoncus. Aenean aliquam neque at justo hendrerit, id tempus leo luctus. Donec ultricies fermentum nibh, vitae viverra ipsum aliquet sit amet. Proin cursus magna ultricies purus fringilla tincidunt.',
      link: '/5',
    },
  ];

  return (
    <BlogContainer>
      <BlogPostCardBig data={posts.slice(0, 1)[0]} more={posts} />
      <BlogPostCardMedium data={posts.slice(1, 3)} more={posts} />
      <BlogPostCardSmall data={posts.slice(2)} more={posts} />
    </BlogContainer>
  );
}

export default Blog;
