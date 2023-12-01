import React, { useEffect, useState } from 'react';
import * as tmImage from '@teachablemachine/image';
import { useNavigate } from 'react-router-dom';
import { Button } from "../Kcf/funclist";
import styles from "../Kcf/KcfApp.module.css";
import "../Kcf/UploadPage.css";
const UploadePage = () => {
  const URL = "https://teachablemachine.withgoogle.com/models/sSCTetSMm/";

  const [model, setModel] = useState(null);
  const [labelContainer, setLabelContainer] = useState(null);
  const [maxPredictions, setMaxPredictions] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState([]);
  const [imageUploaded, setImageUploaded] = useState(false); // Track whether an image is uploaded

  const navigate = useNavigate();

  useEffect(() => {
    init();
  }, []);
  
  const init = async () => {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    const loadedModel = await tmImage.load(modelURL, metadataURL);
    setModel(loadedModel);
    setMaxPredictions(loadedModel.getTotalClasses());
    setLabelContainer(document.getElementById("label-container"));
  };
  //이미지 미리보기
  const previewImage = () => {
    const fileInput = document.getElementById('face_image');
    const img = document.getElementById('preview');
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        img.src = e.target.result;
        setImageUploaded(true); // Set the state to indicate image upload
      };
      reader.readAsDataURL(file);
    }
  };
  //분석후 결과중 가장 일치도가 높은 결과의 이름과 일치도를 전달
  const predictWithRetry = async (retryCount) => {
    try {
      const img = document.getElementById("preview");
      const prediction = await model.predict(img, false);

      const highestProbabilityClass = prediction.reduce((prev, current) =>
        prev.probability > current.probability ? prev : current
      );

      const className = highestProbabilityClass.className;
      const probability = highestProbabilityClass.probability.toFixed(2);
      const classPrediction = `${className}: ${probability}`;
      
      labelContainer.innerHTML = classPrediction;
      setResults([{ className, probability }]);
  
      navigate("/ResultPage", { state: { results: [{ className, probability }], imageData: img.src } });
      
    } catch (error) {
      setAnalyzing(true);
      if (retryCount < 10) {
        setRetryCount(retryCount + 1);
        setTimeout(() => predictWithRetry(retryCount + 1), 1000);
      } else {
        console.error('재시도 요청');
        setRetryCount(0);
      }
    } finally {
      setAnalyzing(false);
    }
  };
  //분석중 띄우기위해 1초후 분석
  const predict = () => {
    setAnalyzing(true);
    setTimeout(() => predictWithRetry(0), 1000);
  };

  //이미지 제거
  const removeImage = () => {
    const img = document.getElementById('preview');
    img.src = process.env.PUBLIC_URL + '/디폴트.jpg';
  
    setImageUploaded(false); // 업로드상태 false
  };
  return (
    <div className='upload_container'>
      <div className='upload_top'></div>
      {imageUploaded || (
        <div className='upload_text'>업로드를 눌러 자신의 사진을 등록해주세요.</div>
      )}

      <div className='picBox'>
        <img
          id="preview"
          alt="img"
          src={process.env.PUBLIC_URL + '/디폴트.jpg'}
        />
      </div>

      {imageUploaded && !analyzing && (
        <>
          <Button label="이미지 제거🚮" styleClass={styles.del_btn} onClick={removeImage}>
          </Button>
          <Button label="분석하기🔍" styleClass={styles.anly_btn} onClick={predict}>
          </Button>
          
        </>
      )}

      {imageUploaded || (
        <form id="form1">
          <label htmlFor="face_image" className="custom_file_upload">
            📸업로드
          </label>
          <input type="file" id="face_image" onChange={previewImage} style={{ display: "none" }} />
        </form>
      )}
      <div className='anly_container'>
        {analyzing && <p className='analyzing'>분석 중...🔍</p>}
      </div>
      

      <div id="label-container"></div>
    </div>
  );
};

export default UploadePage;