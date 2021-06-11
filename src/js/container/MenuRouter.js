import { PostList } from '../pages/Post/PostList';

import { UserOutlined } from '@ant-design/icons';

export const menuRouter = [
  {
    title: 'postList',
    path: '/board/postList',
    component: PostList,
  },
];

export const testRouter = [
  {
    subMenuName: 'Board',
    icon: UserOutlined,
    items: [
      {
        title: 'postList',
        path: '/board/postList',
        component: PostList,
      },
    ]
  },
  // {
  //   SubMenu: 'Board',
  //   icon: 'UserOutlined',
  //   items: [
  //     {
  //       title: 'postList',
  //       path: '/board/postList',
  //       component: PostList,
  //     },
  //   ]
  // }
];