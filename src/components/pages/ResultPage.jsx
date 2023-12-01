import React from 'react';
import { useLocation } from 'react-router-dom';
import "../Kcf/ResultPage.css"
import { Button } from '../Kcf/funclist';
import styles from "../Kcf/KcfApp.module.css";
const ResultPage = () => {
  // 이전에 분석된 결과를 가져옴
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
            {result.className === '안창호' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} className ="resultImg" src={process.env.PUBLIC_URL + '/도산안창호.jpg'}/>
                <p>우리가 세운 목적이 그른 것이라면 언제든지 실패할 것이요, 우리가 세운 목적이 옳은 것이면 언제든지 성공할 것이다.</p>
                
              </div>
            )}

            {result.className === '이순신' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이순신.jpg'}/>
                <p>반드시 죽고자 하는 자는 살고 반드시 살고자 하는 자는 죽을 것이다.(必死卽生 必生卽死)</p>
              </div>
            )}

            {result.className === '윤봉길' && (
              <div>
       
                <img alt={process.env.PUBLIC_URL + '/디폴트.png'} src={process.env.PUBLIC_URL + '/윤봉길의사.jpg'}/>

              </div>
            )}
            {result.className === '김시민' && (
              <div>
              
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이순신.jpg'}/>
              </div>
            )}
            {result.className === '서희' && (
              <div>
          
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이순신.jpg'}/>
              </div>
            )}
            {result.className === '세종대왕' && (
              <div>
                
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이순신.jpg'}/>
              </div>
            )}
            {result.className === '율곡이이' && (
              <div>
              
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이순신.jpg'}/>
              </div>
            )}
            {result.className === '장영실' && (
              <div>
              
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이순신.jpg'}/>
              </div>
            )}
            {result.className === '정도전' && (
              <div>
            
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이순신.jpg'}/>
              </div>
            )}
            {result.className === '태종' && (
              <div>
            
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이순신.jpg'}/>
              </div>
            )}
            {result.className === '퇴계이황' && (
              <div>
                
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이순신.jpg'}/>
              </div>
            )}
            {result.className === '허난설현' && (
              <div>
                
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이순신.jpg'}/>
              </div>
            )}
            {result.className === '황희' && (
              <div>
                
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이순신.jpg'}/>
              </div>
            )}
            {result.className === '민영주' && (
              <div>
             
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이순신.jpg'}/>
              </div>
            )}
            {result.className === '김구' && (
              <div>
                
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이순신.jpg'}/>
              </div>
            )}
            {result.className === '서재필' && (
              <div>
                
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이순신.jpg'}/>
              </div>
            )}
            {result.className === '유관순' && (
              <div>
                
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이순신.jpg'}/>
              </div>
            )}
            {result.className === '윤희순' && (
              <div>
                
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이순신.jpg'}/>
              </div>
            )}
            {result.className === '이봉창' && (
              <div>
                
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이순신.jpg'}/>
              </div>
            )}
            {result.className === '한용운' && (
              <div>
                
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이순신.jpg'}/>
              </div>
            )}
            {result.className === '현덕신' && (
              <div>
                
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이순신.jpg'}/>
              </div>
            )}
            {result.className === '김마리아' && (
              <div>
                <img src={imageData} alt="User Uploaded" />
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이순신.jpg'}/>
                
                
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