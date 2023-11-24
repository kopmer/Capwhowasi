import React from 'react';
import { useLocation } from 'react-router-dom';


const ResultPage = () => {
  // 이전에 분석된 결과를 가져옴
  const results = useLocation().state.results;

  return (
    <div>
      <h2>분석 결과</h2>
      <ul>
        {results.map((result, index) => (
          <div key={index}>
            <b>당신과 닮은 인물은...</b> <br></br>{result.className}<br />
            일치도 <strong>{result.probability*100}%</strong>
            
            {/* 각 클래스에 따라 다른 텍스트 출력 */}
            {result.className === '도산 안창호' && (
<<<<<<< HEAD
              <div>
                <p>우리가 세운 목적이 그른 것이라면 언제든지 실패할 것이요, 우리가 세운 목적이 옳은 것이면 언제든지 성공할 것이다.</p>
                <img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} className ="resultImg" src={process.env.PUBLIC_URL + '/도산안창호.jpg'}/>
              </div>
            )}

            {result.className === '이순신 장군' && (
              <div>
                <p>반드시 죽고자 하는 자는 살고 반드시 살고자 하는 자는 죽을 것이다.(必死卽生 必生卽死)</p>
                <img alt="이순신" src={process.env.PUBLIC_URL + '/이순신.jpg'}/>
              </div>
            )}

            {result.className === '윤봉길 의사' && (
              <div>
                <p>사람은 왜 사느냐 이상을 이루기 위하여 산다


                보라 물은 꽃을 피우고 나무는 열매를 맺는다.
              
              
                나도 이상의 꽃을 피우고 열매를 맺기를 다짐하였다.
              
              
                우리 청년 시대에는 부모의 사랑보다 형제의 사랑보다
              
              
                처자의 사랑보다도 더 한층 강의한 사랑이 있는 것을
              
              
                깨달았다. 나라와 겨례에 바치는 뜨거운 사랑이다.
                
                
                나의 우로와 나의 강산과 나의 부모를 버리고라도
                
                
                그 강의한 사랑을 따르기로 결심하여 이 길을 택하였다.</p>
                <img alt={process.env.PUBLIC_URL + '/디폴트.png'} className ="resultImg" src={process.env.PUBLIC_URL + '/윤봉길의사.jpg'}/>

              </div>
=======
              <p>우리가 세운 목적이 그른 것이라면 언제든지 실패할 것이요, 우리가 세운 목적이 옳은 것이면 언제든지 성공할 것이다.</p>
            )}

            {result.className === '이순신 장군' && (
              <p>반드시 죽고자 하는 자는 살고 반드시 살고자 하는 자는 죽을 것이다.(必死卽生 必生卽死)</p>
            )}

            {result.className === '윤봉길 의사' && (
              <p>사람은 왜 사느냐 이상을 이루기 위하여 산다


              보라 물은 꽃을 피우고 나무는 열매를 맺는다.
              
              
              나도 이상의 꽃을 피우고 열매를 맺기를 다짐하였다.
              
              
              우리 청년 시대에는 부모의 사랑보다 형제의 사랑보다
              
              
              처자의 사랑보다도 더 한층 강의한 사랑이 있는 것을
              
              
              깨달았다. 나라와 겨례에 바치는 뜨거운 사랑이다.
              
              
              나의 우로와 나의 강산과 나의 부모를 버리고라도
              
              
              그 강의한 사랑을 따르기로 결심하여 이 길을 택하였다.</p>
>>>>>>> 3c7486119ad9900bde5af39d2c2fc8973865e9f4
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};
export default ResultPage;