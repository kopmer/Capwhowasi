import React from 'react';
import { useLocation } from 'react-router-dom';
import "../Kcf/ResultPage.css"
import { Button } from '../Kcf/funclist';
import styles from "../Kcf/KcfApp.module.css";
const ResultPage = () => {
  // 이전에 분석된 결과를 가져옴 UploadPage.jsx에서 갖고오는거임
  const { results, imageData } = useLocation().state;
  const handleSearch = () => {
    // result.className을 검색어로 사용하여 네이버 검색 페이지로 이동
    window.open(`https://search.naver.com/search.naver?query=${encodeURIComponent(results[0].className)}`);
  };

  return (
    <div className='result_container'>
      <div className='img_container'>
        
          
        {results.map((result, index) => (
          <div key={index}>
            <div className='result_top'>
              <p className='title_text'>
                  당신과 닮은 인물은...
              </p> 
            </div>
            
            <div className='match_rate'>
              
              {result.className}<br/>
              <strong>{Math.round(result.probability*100)}%</strong>
              </div>
            
            {/* 각 클래스에 따라 다른 텍스트 출력 */}
            {result.className === '김마리아' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/김마리아.jpg'}/>
              </div>
            )}
            {result.className === '김구' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/김구.jpg'}/>
              </div>
            )}
            {result.className === '김옥균' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/김옥균.jpg'}/>
              </div>
            )}
            {result.className === '민영주' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/민영주.jpg'}/>
              </div>
            )}
            {result.className === '서재필' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/서재필.jpg'}/>
              </div>
            )}
            {result.className === '소은명' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/소은명.jpg'}/>
              </div>
            )}
            {result.className === '소은숙' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/소은숙.jpg'}/>
              </div>
            )}
            {result.className === '손병희' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/손병희.jpg'}/>
              </div>
            )}
            {result.className === '안창호' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/안창호.jpg'}/>
              </div>
            )}
            {result.className === '여운형' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/여운형.jpg'}/>
              </div>
            )}
            {result.className === '유관순' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/유관순.jpg'}/>
              </div>
            )}
            {result.className === '윤동주' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/윤동주.jpg'}/>
              </div>
            )}
            {result.className === '윤봉길' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/윤봉길.jpg'}/>
              </div>
            )}
            {result.className === '윤희순' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/윤희순.jpg'}/>
              </div>
            )}
            {result.className === '이봉창' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이봉창.jpg'}/>
              </div>
            )}
            {result.className === '지석영' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/지석영.jpg'}/>
              </div>
            )}
            {result.className === '한용운' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/한용운.jpg'}/>
              </div>
            )}
            {result.className === '현덕신' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/현덕신.jpg'}/>
              </div>
            )}
            {result.className === '황신덕' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/황신덕.jpg'}/>
              </div>
            )}
            {result.className === '곽재우' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/곽재우.jpg'}/>
              </div>
            )}
            {result.className === '김만덕' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/김만덕.jpg'}/>
              </div>
            )}
            {result.className === '김시민' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/김시민.jpg'}/>
              </div>
            )}
            {result.className === '서희' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/서희.jpg'}/>
              </div>
            )}
            {result.className === '세조' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/세조.jpg'}/>
              </div>
            )}
            {result.className === '세종' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/세종.jpg'}/>
              </div>
            )}
            {result.className === '신사임당' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/신사임당.jpg'}/>
              </div>
            )}
            {result.className === '이이' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이이.jpg'}/>
              </div>
            )}
            {result.className === '이순신' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이순신.jpg'}/>
              </div>
            )}
            {result.className === '장영실' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/장영실.jpg'}/>
              </div>
            )}
            {result.className === '정도전' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/정도전.jpg'}/>
              </div>
            )}
            {result.className === '조헌' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/조헌.jpg'}/>
              </div>
            )}
            {result.className === '태종' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/태종.jpg'}/>
              </div>
            )}
            {result.className === '이황' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이황.jpg'}/>
              </div>
            )}
            {result.className === '허난설현' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/허난설현.jpg'}/>
              </div>
            )}
            {result.className === '황진이' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/황진이.jpg'}/>
              </div>
            )}
            {result.className === '강감찬' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/강감찬.jpg'}/>
              </div>
            )}
            {result.className === '광종' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/광종.jpg'}/>
              </div>
            )}
            {result.className === '김부식' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/김부식.jpg'}/>
              </div>
            )}
            {result.className === '윤관' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/윤관.jpg'}/>
              </div>
            )}
            {result.className === '의천' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/의천.jpg'}/>
              </div>
            )}
            {result.className === '이규보' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이규보.jpg'}/>
              </div>
            )}
            {result.className === '정몽주' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/정몽주.jpg'}/>
              </div>
            )}
            {result.className === '태조' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/태조.jpg'}/>
              </div>
            )}
          </div>
        ))}
        
        
      </div>
      <div className='search_container'>
        <Button onClick={handleSearch} styleClass={styles.start_btn} label="인물 검색"></Button>
      </div>
      
    </div>
  );
};
export default ResultPage;