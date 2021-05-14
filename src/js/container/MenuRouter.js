import PostList from '../components/post/PostList';
import NewPost from '../components/post/PostForm';

const menuRouter = [
  {
    title: 'postList',
    path: '/board/postList',
    component: PostList,
  },
  {
    title: 'new post',
    path: '/board/newPost',
    component: NewPost,
  },
];

export default menuRouter;