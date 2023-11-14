import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Uploader({ onImageUpload }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isInputHidden, setIsInputHidden] = useState(false);
  const [uploadStatus, setUploadStatus] = useState({
    isLoading: false,
    isError: false,
    message: '',
  });

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
    setUploadStatus({
      isLoading: false,
      isError: false,
      message: '',
    });
  };

  const handleUpload = async () => {
    if (selectedImage) {
      try {
        setUploadStatus({ isLoading: true, isError: false, message: '' });

        const formData = new FormData();
        formData.append('image', selectedImage);

        // 서버 업로드를 위한 API 엔드포인트에 POST 요청 보내기
        const response = await fetch('http://localhost:8080', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          // 서버 응답이 성공적일 때 처리
          const result = await response.json();
          console.log('Server response:', result);
          // 기타 처리 또는 상태 업데이트 작업 수행
          setUploadStatus({
            isLoading: false,
            isError: false,
            message: '업로드가 성공적으로 완료되었습니다.',
          });
          onImageUpload(selectedImage); // 업로드된 이미지 전달
          
        } else {
          // 서버 응답이 실패일 때 처리
          console.error('Server upload failed.');
          // 실패 상황에 대한 처리 수행
          setUploadStatus({
            isLoading: false,
            isError: true,
            message: '업로드에 실패했습니다. 다시 시도해주세요.',
          });
        }
      } catch (error) {
        console.error('Error during image upload:', error);
        // 오류 처리 수행
        setUploadStatus({
          isLoading: false,
          isError: true,
          message: '오류가 발생했습니다. 다시 시도해주세요.',
        });
      }
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
            <button onClick={handleUpload} disabled={uploadStatus.isLoading}>
              {uploadStatus.isLoading ? '업로드 중...' : '닮은꼴 찾기'}
            </button>
            <button onClick={handleRemoveImage}>제거</button>
          </div>
          {uploadStatus.isError && (
            <p style={{ color: 'red' }}>{uploadStatus.message}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Uploader;






