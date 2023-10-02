import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Uploader({ onImageUpload }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isInputHidden, setIsInputHidden] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setPreviewImage(URL.createObjectURL(file));
    setIsInputHidden(true); // 입력 필드 숨기기
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setPreviewImage(null);
    setIsInputHidden(false); // 입력 필드 다시 표시
  };

  const handleUpload = () => {
    if (selectedImage) {
      // 여기에서 이미지를 서버로 업로드할 수 있는 코드를 추가하세요.
      // 예를 들어, FormData를 사용하여 업로드할 수 있습니다.
      onImageUpload(selectedImage);
    }
  };

  return (
    <div>
      <h1>내사진 업로드</h1>
      {!isInputHidden && (
        <input type="file" accept="image/*" onChange={handleImageChange} />
      )}
      {previewImage && (
        <div>
          <h2>등록한사진</h2>
          <img src={previewImage} alt="Preview" width="200" />
          <div>
            <Link to="/resultPage">
              <button onClick={handleUpload}>닮은꼴 찾기</button>
            </Link>
            <button onClick={handleRemoveImage}>제거</button>
          </div>
          
        </div>
      )}
    </div>
  );
}

export default Uploader;