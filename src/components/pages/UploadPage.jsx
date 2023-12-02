import React, { useEffect, useState } from 'react';
import * as tmImage from '@teachablemachine/image';
import { useNavigate } from 'react-router-dom';
import { Button } from "../Kcf/funclist";
import styles from "../Kcf/KcfApp.module.css";
import "../Kcf/UploadPage.css";
const UploadePage = () => {
  const URL = "https://teachablemachine.withgoogle.com/models/ROxBFMZwA/";
  const MAX_RETRIES = 10;
  const ANALYSIS_DELAY = 1000;

  const [model, setModel] = useState(null);
  const [labelContainer, setLabelContainer] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);//분석중인지 아닌지
  const [results, setResults] = useState([]);
  const [imageUploaded, setImageUploaded] = useState(false);//유저가 이미지 업로드 했는지 안했는지

  const navigate = useNavigate();

  useEffect(() => {
    init();
  }, []);
  
  const init = async () => {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    const loadedModel = await tmImage.load(modelURL, metadataURL);
    setModel(loadedModel);
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
        setImageUploaded(true); // 이미지 업로드 상태 변경
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

      const { className, probability } = highestProbabilityClass;
      const classPrediction = `${className}: ${probability.toFixed(2)}`;

      setResults([{ className, probability }]);
      setLabelContainer(classPrediction);

      navigate("/ResultPage", { state: { results: [{ className, probability }], imageData: img.src } });

    } catch (error) {
      setAnalyzing(true);
      if (retryCount < MAX_RETRIES) {
        setRetryCount(retryCount + 1);
        setTimeout(() => predictWithRetry(retryCount + 1), ANALYSIS_DELAY);
      } else {
        console.error('분석 중 오류 발생');
        setRetryCount(0);
      }
    } finally {
      setAnalyzing(false);
    }
  };
  //분석중 띄우기위해 1초후 분석
  const predict = () => {
    setAnalyzing(true);
    setTimeout(() => predictWithRetry(0), ANALYSIS_DELAY);
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
    
      {imageUploaded && !analyzing && (//이미지 업로드 상태에서만 버튼 보이게
        <>
          <Button label="이미지 제거🚮" styleClass={styles.del_btn} onClick={removeImage}>
          </Button>
          <Button label="분석하기🔍" styleClass={styles.anly_btn} onClick={predict}>
          </Button>
          
        </>
      )}

      {imageUploaded || (//이미지 업로드 안했을때나 이미지 제거버튼 눌렀을때 다시 업로드할수 있게 업로드 버튼보임
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