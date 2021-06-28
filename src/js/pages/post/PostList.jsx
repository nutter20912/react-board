import { Button,Card } from 'antd';
import { useEffect, useState } from 'react';
import * as Api from '../../api';
import { NewPost } from '../../components/post/NewPost';
import { Posts } from '../../components/post/Posts';

/**
 * 留言板文章列表
 */
export const PostList = () => {
  const [showNewPost, setShowNewPost] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);

  const unshiftPosts = (res) => {
    setData((data) => [res, ...data]);
  }

  const getPosts = async () => {
    const result = await Api.getPosts();
    setData(result.reverse());
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getPosts();
  }, []);

  return (
    <Card
      title='post list'
      extra={<Button type="primary" onClick={()=> setShowNewPost(true)} >新增</Button>}
      loading={loading}
    >
      <Posts data={data}/>
      <NewPost
        selfVisible={showNewPost}
        setSelfVisible={setShowNewPost}
        unshiftPosts={unshiftPosts}
      />
    </Card>
  );
}
