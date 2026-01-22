import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
const props = {
//   action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
//   defaultFileList: [
//     {
//       uid: '1',
//       name: 'xxx.png',
//       status: 'uploading',
//       url: 'http://www.baidu.com/xxx.png',
//       percent: 33,
//     },
//     {
//       uid: '2',
//       name: 'yyy.png',
//       status: 'done',
//       url: 'http://www.baidu.com/yyy.png',
//     },
//     {
//       uid: '3',
//       name: 'zzz.png',
//       status: 'error',
//       response: 'Server Error 500', // custom error message to show
//       url: 'http://www.baidu.com/zzz.png',
//     },
//   ],
};
const Uploadbutton = (handleChange) => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />} onChange={handleChange}>Upload</Button>
  </Upload>
);
export default Uploadbutton;