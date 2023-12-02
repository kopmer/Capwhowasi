import React from 'react';
import "../Kcf/ListPage.css"
const ListPage = () => {
    const handleImageClick = (e) => {
        e.preventDefault();
        // 사진 클릭시 추가행동
      };
    return(
        <div className="photos">
            <ul>
                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/김마리아.jpg'}/></a></span>
                <span>김마리아</span></li>
                
                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/김구.jpg'}/></a></span>
                <span>김구</span></li>
                
                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/김옥균.jpg'}/></a></span>
                <span>김옥균</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/민영주.jpg'}/></a></span>
                <span>민영주</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/서재필.jpg'}/></a></span>
                <span>서재필</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/소은명.jpg'}/></a></span>
                <span>소은명</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/소은숙.jpg'}/></a></span>
                <span>소은숙</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/손병희.jpg'}/></a></span>
                <span>손병희</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/안창호.jpg'}/></a></span>
                <span>안창호</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/여운형.jpg'}/></a></span>
                <span>여운형</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/유관순.jpg'}/></a></span>
                <span>유관순</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/윤동주.jpg'}/></a></span>
                <span>윤동주</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/윤봉길.jpg'}/></a></span>
                <span>윤봉길</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/윤희순.jpg'}/></a></span>
                <span>윤희순</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이봉창.jpg'}/></a></span>
                <span>이봉창</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/지석영.jpg'}/></a></span>
                <span>지석영</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/한용운.jpg'}/></a></span>
                <span>한용운</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/현덕신.jpg'}/></a></span>
                <span>현덕신</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/황신덕.jpg'}/></a></span>
                <span>황신덕</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/곽재우.jpg'}/></a></span>
                <span>곽재우</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/김만덕.jpg'}/></a></span>
                <span>김만덕</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/김시민.jpg'}/></a></span>
                <span>김시민</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/서희.jpg'}/></a></span>
                <span>서희</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/세조.jpg'}/></a></span>
                <span>세조</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/세종.jpg'}/></a></span>
                <span>세종</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/신사임당.jpg'}/></a></span>
                <span>신사임당</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이이.jpg'}/></a></span>
                <span>이이</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이순신.jpg'}/></a></span>
                <span>이순신</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/장영실.jpg'}/></a></span>
                <span>장영실</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/정도전.jpg'}/></a></span>
                <span>정도전</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/조헌.jpg'}/></a></span>
                <span>조헌</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/태종.jpg'}/></a></span>
                <span>태종</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이황.jpg'}/></a></span>
                <span>이황</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/허난설현.jpg'}/></a></span>
                <span>허난설현</span></li>


                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/황진이.jpg'}/></a></span>
                <span>황진이</span></li>


                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/황희.jpg'}/></a></span>
                <span>황희</span></li>


                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/강감찬.jpg'}/></a></span>
                <span>강감찬</span></li>


                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/광종.jpg'}/></a></span>
                <span>광종</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/김부식.jpg'}/></a></span>
                <span>김부식</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/윤관.jpg'}/></a></span>
                <span>윤관</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/의천.jpg'}/></a></span>
                <span>의천</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/이규보.jpg'}/></a></span>
                <span>이규보</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/정몽주.jpg'}/></a></span>
                <span>정몽주</span></li>

                <li><span><a href="#!" onClick={handleImageClick}><img alt={process.env.PUBLIC_URL +'/디폴트.jpg'} src={process.env.PUBLIC_URL + '/태조.jpg'}/></a></span>
                <span>태조</span></li>





            </ul>
      </div>
    );
};
export default ListPage;