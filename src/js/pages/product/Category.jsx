import { Button,Card, Table, Modal } from 'antd';
import { useEffect, useState, useReducer } from 'react';
import * as Api from '../../api';
import { RollbackOutlined } from '@ant-design/icons';

export const Category = () => {
  const [loading, setLoading] = useState(false);
  const [showStatus, setShowStatus] = useState('');

  const reducer = (state, { type, payload }) => {
    if (type === 'MAIN_CATEGORY') {
      return Object.assign(state, {
        main: true,
        dataSource: payload.res,
        title: '主要類別',
      });
    }

    if (type === 'SUB_CATEGORY') {
      return Object.assign(state, {
        main: false,
        dataSource: payload.res,
        title: '主要類別 - 子類別',
      });
    }
  };

  const [variables, dispatch] = useReducer(reducer, {
    main: true,
    title: '主要類別',
    dataSource: [],
  });

  const renderCategorys = () => {
    setLoading(true);

    Api.getCategorys().then(({ res }) => {
      dispatch({ type: 'MAIN_CATEGORY', payload: { res }});
      setLoading(false);
    });
  }

  const onClick = (id) => {
    setLoading(true);

    Api.getCategory(id).then(({ res }) => {
      dispatch({ type: 'SUB_CATEGORY', payload: { res }});
      setLoading(false);
    });

  }

  const columns = [
    {
      title: '分類名稱',
      dataIndex: 'name',
    },
    {
      title: '操作',
      width: 200,
      render: ({ id }) => <>
        <Button type="link" size='small' onClick={showUpdate}>修改</Button>
          {(variables.main)
            ? <Button type="link" size='small' onClick={() => onClick(id)}>查看子分類</Button>
            : null
          }
        </>
    }
  ];

  const handleCancel = () => setShowStatus('');
  const showAdd = () => setShowStatus('add');
  const showUpdate = () => setShowStatus('update');

  useEffect(() => {
    renderCategorys();
  }, []);

  return (
    <Card
      title={
        <>
          <span>{variables.title}</span>
          {(variables.main)
            ? null
            : <Button icon={<RollbackOutlined />} type="link" onClick={() => renderCategorys()} />
          }
        </>
      }
      extra={<Button type="primary" onClick={showAdd}>新增</Button>}
    >
      <Table
        dataSource={variables.dataSource}
        columns={columns}
        bordered
        rowKey='id'
        loading={loading}
      />
      <Modal
        title='新增'
        visible={showStatus === 'add'}
        onOk={()=> setShowStatus('')}
        onCancel={handleCancel}
      />

      <Modal
        title='修改'
        visible={showStatus === 'update'}
        onCancel={handleCancel}
      />
    </Card>
  );
}
