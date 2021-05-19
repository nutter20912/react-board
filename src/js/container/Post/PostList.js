import { Button, PageHeader, Descriptions } from 'antd';
import { NewPost } from './NewPost';
import { Posts } from './Posts';
import { Detail } from './Detail';
import { useState, useEffect } from 'react';
import { fakeApi } from '../../utils';

export const PostList = () => {
  const [showNewPost, setShowNewPost] = useState(false);
  const [showPostDetail, setShowPostDetail] = useState(false);
  const [data, setData] = useState([]);

  const onClick = () => {
    setShowNewPost(true);
  }

  const pushPosts = (res) => {
    data.push(res);

    setData(data);
  }

  useEffect(() => {
    const getPosts = async () => {
      const fakeResult = {
        post_id: 1,
        name: 'paul',
        title: 'asd',
        context: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        comments: [
          {
            comment_id: 1,
            name: 'other',
            context: 'comment 1',
          }
        ]
      }

      const res = await fakeApi(100, new Array(5).fill(fakeResult));

      setData(res);
    };

    getPosts();
  }, []);

  return (
    <>
      <PageHeader
        ghost={false}
        title='post list'
        extra={
          <Button type="primary" onClick={onClick} >
            新增 post
          </Button>
        }
      />
      <Posts
        data={data}
        setShowPostDetail={setShowPostDetail}
      />
      <NewPost
        visible={showNewPost}
        setVisible={setShowNewPost}
        pushPosts={pushPosts}
      />
      <Detail
        visible={showPostDetail}
        setShowPostDetail={setShowPostDetail}
      />
    </>
  );
}
