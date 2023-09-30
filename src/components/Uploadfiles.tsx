import  {useState } from "react"
import { UploadOutlined , DeleteOutlined, ReloadOutlined} from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import { UploadChangeParam } from 'antd/lib/upload';

const Uploadfiles = () => {
    const [fileList, setFileList] = useState<any[]>([]);

    const beforeUpload = (file: any) => {
      setFileList([file]);
      return false; // Prevent default behavior
    };
  
  
    const handleChange = (info: UploadChangeParam) => {
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    };
    const handleDelete = () => {
      setFileList([]);
    };
  
    const handleReload = () => {
      setFileList([]);
    
    };
  return (
    <div className="shadow-md rounded-lg mt-32 bg-white w-96  h-full ">
<div className="bg-card w-full px-5 py-2 rounded-tl-lg rounded-tr-lg"> 
    <h2 className="font-medium"> Upload cover image</h2>
</div>
<div className="px-4">
<div className="outline-dashed  outline-1 outline-offset-2  py-20 mt-8  flex flex-col justify-center items-center w-full mx-auto h-56">
<div>
      <Upload
        beforeUpload={beforeUpload}
        fileList={fileList}
        onChange={handleChange}
        maxCount={1}
        accept="image/*" 
      >
    {  fileList.length > 0 ? "" : <div className="flex flex-col justify-center items-center">
      <Button icon={<UploadOutlined />}>Upload cover image</Button>
     <p className="text-textColor "> 16:9 ratio is recommended. Max image size 1mb</p> </div>
    }
      </Upload>
      {fileList.length > 0 && (
        <img
          src={URL.createObjectURL(fileList[0])}
          alt="Preview"
         className=" flex justify-center items-center h-48 w-9/12 rounded-lg mx-auto"
        />
      )}
    </div>
 
</div>

  </div>
  <div className="flex justify-center items-center mt-4 pb-4">
            <Button icon={<DeleteOutlined />} onClick={handleDelete}>
              Delete
            </Button>
            <Button icon={<ReloadOutlined />} onClick={handleReload}>
              Re-upload
            </Button>
          </div>
  </div>
  )
}

export default Uploadfiles