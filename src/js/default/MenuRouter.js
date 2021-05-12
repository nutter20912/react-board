import PostList from '../Post/PostList';
import NewPost from '../Post/PostForm';

const MenuRouter = [
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

export default MenuRouter;