import { PostList } from '../pages/post/PostList';
import { Home } from '../pages/home';
import { Item, Category } from '../pages/product';

import { UserOutlined } from '@ant-design/icons';

export const menuRouter = [
  {
    title: 'home',
    path: '/home',
    component: Home,
    Icon: UserOutlined,
  },
  {
    title: 'product',
    Icon: UserOutlined,
    children: [
      {
        title: 'Category',
        path: '/product/category',
        component: Category,
        Icon: UserOutlined,
      },
      {
        title: 'Item',
        path: '/product/item',
        component: Item,
        Icon: UserOutlined,
      },
    ]
  },
  {
    title: 'board',
    Icon: UserOutlined,
    children: [
      {
        title: 'postList',
        path: '/board/postList',
        component: PostList,
        Icon: UserOutlined,
      },
    ]
  },
];