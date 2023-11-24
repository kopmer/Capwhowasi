import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as tmImage from '@teachablemachine/image';

const Uploader = () => {
  const URL = "https://teachablemachine.withgoogle.com/models/PyhHnKSa0/";
  let model, labelContainer, maxPredictions;

  const [retryCount, setRetryCount] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    labelContainer = document.getElementById("label-container");
  
    if (labelContainer) {
      for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement("div"));
      }
    } else {
      console.error("labelContainer is null");
    }
  }

  function previewImage() {
    const fileInput = document.getElementById('face_image');
    const img = document.getElementById('preview');

    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  async function predictWithRetry(retryCount) {
    try {
      setAnalyzing(true);

      const img = document.getElementById("preview");

      const prediction = await model.predict(img, false);

      // 찾은 최고 확률의 클래스 정보
      const highestProbabilityClass = prediction.reduce((prev, current) =>
        prev.probability > current.probability ? prev : current
      );

      const classPrediction = `${highestProbabilityClass.className}: ${highestProbabilityClass.probability.toFixed(2)}`;

      labelContainer.innerHTML = classPrediction;
      setResults([classPrediction]);
    } catch (error) {
      if (retryCount < 5) {
        setRetryCount(retryCount + 1);
        setTimeout(() => predictWithRetry(retryCount + 1), 1000);
      } else {
        console.error('5번의 재시도 후 분석 실패');
        setRetryCount(0);
      }
    } finally {
      setAnalyzing(false);
    }
  }

  const predict = () => predictWithRetry(0);

  const removeImage = () => {
    setAnalyzing(false);
    setRetryCount(0);
    const img = document.getElementById('preview');
    img.src = "";

    labelContainer.innerHTML = "";
    setResults([]);
  };

  return (
    <div>
      <div>Teachable Machine Image Model</div>

      {/* Link 컴포넌트를 이용하여 ResultsPage로 이동 */}
      <Link to={{ pathname: "/ResultPage", state: { results } }}>결과 보기</Link>
      
      <button type="button" onClick={predict}>Predict</button>
      <button type="button" onClick={removeImage}>Remove Image</button>

      <form id="form1">
        <label htmlFor="face_image" className="custom-file-upload">
          <i className="fa fa-cloud-upload"></i>Choose file
        </label>
        <input type='file' id="face_image" onChange={previewImage} />
      </form>
      <img id="preview" alt="Preview" src="" style={{ maxWidth: '300px', marginTop: '10px' }} />

      {analyzing && <p>분석 중...</p>}

      <div id="label-container"></div>
    </div>
  );
};

export default Uploader;