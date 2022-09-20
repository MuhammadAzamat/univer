import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { object } from "prop-types";
import React, { useEffect, useState } from "react";

const getBase64 = (img, callback) => {
  if (img == null) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  // console.log(img);
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }

  const isLt2M = file.size / 1024 / 1024 < 10;

  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }

  return false;

  return isJpgOrPng && isLt2M;
};

const Uploader = (props) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  useEffect(() => {
    getBase64(props.value.file, (url) => {
      setImageUrl(url);
    });
  }, [props]);

  const handleChange = (info) => {
    // console.log(info);
    // console.log(props.value);
    props.onChange(info);

    // if (info.file.status === 'uploading') {
    //     setLoading(true);
    //     return;
    // }

    // if (info.file.status === 'done') {
    // Get this url from response in real world.
    // console.log("after change", props.value);
    getBase64(props.value.file, (url) => {
      setLoading(false);
      setImageUrl(url);
    });
    // }
  };

  const uploadButton = (
    <div>
      {loading ? (
        <LoadingOutlined />
      ) : (
        <img src={require("../../assets/img/add_image.png")} />
      )}
      <div
        style={{
          marginTop: 8,
        }}
      >
        <h2>{props.title}</h2>
        <h3>PNG, JPG, GIF up to 10MB</h3>
      </div>
    </div>
  );

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  return (
    <Upload
      name="avatar"
      value={props.value}
      fileList={props.value.fileList}
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={props.showUploadList}
      beforeUpload={beforeUpload}
      onChange={handleChange}
      onPreview={handlePreview}
    >
      {!props.showUploadList && imageUrl ? (
        <img
          src={imageUrl}
          alt="avatar"
          style={{
            maxHeight: 165,
            maxWidth: 180,
          }}
        />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};

export default Uploader;
