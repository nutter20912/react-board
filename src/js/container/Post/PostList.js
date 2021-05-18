import { Button, PageHeader, Descriptions } from 'antd';
import { NewPost } from './NewPost';
import { Posts } from './Posts';
import { useState, useEffect } from 'react';
import { fakeApi } from '../../utils';

export const PostList = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);

  const onClick = () => {
    setVisible(true);
  }

  const pushPosts = (res) => {
    data.push(res);

    setData(data);
  }


  useEffect(() => {
    const getPosts = async () => {
      const res = await fakeApi(5000, [
        {
          post_id: 1,
          name: 'paul',
          title: 'asd',
          context: 'aaaaaa',
          comments: [
            {
              comment_id: 1,
              name: 'other',
              context: 'comment 1',
            }
          ]
        }
      ]);

      setData(res);
    };

    getPosts();
  }, []);

  return (
    <PageHeader
      ghost={false}
      title='post list'
      extra={
        <Button type="primary" onClick={onClick} >
          新增 post
        </Button>
      }
    >
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="Created">
          <Posts data={data} />
        </Descriptions.Item>
      </Descriptions>
      <NewPost
        visible={visible}
        setVisible={setVisible}
        pushPosts={pushPosts}
      />
    </PageHeader>
  );
}
