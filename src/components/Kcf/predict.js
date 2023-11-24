import React, { useEffect } from 'react';
import * as tmImage from '@teachablemachine/image';

const Result = () => {
  const URL = "https://teachablemachine.withgoogle.com/models/PyhHnKSa0/";
  let model, labelContainer, maxPredictions;

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    labelContainer = document.getElementById("label-container");

    for (let i = 0; i < maxPredictions; i++) {
      labelContainer.appendChild(document.createElement("div"));
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

  async function predict() {
    const img = document.getElementById("preview");

    const prediction = await model.predict(img, false);
    for (let i = 0; i < maxPredictions; i++) {
      const classPrediction =
        prediction[i].className + ": " + prediction[i].probability.toFixed(2);
      labelContainer.childNodes[i].innerHTML = classPrediction;
    }
  }

  return (
    <div>
      <div>Teachable Machine Image Model</div>

      <button type="button" onClick={predict}>Predict</button>
      <form id="form1">
        <label htmlFor="face_image" className="custom-file-upload">
          <i className="fa fa-cloud-upload"></i>Choose file
        </label>
        <input type='file' id="face_image" onChange={previewImage} />
      </form>
      <img id="preview" alt="Preview" src="" style={{ maxWidth: '300px', marginTop: '10px' }} />
      <div id="label-container"></div>
    </div>
  );
};

export default Result;
