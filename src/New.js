import './New.css';
import 'https://kit.fontawesome.com/0bb6f287f4.js';
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function New() {
  return (
    <Routes>     
    <Route path="/New" element={
    <div className="New">
      <header>
      {/* 상단바 고정 */}
        <ul class="mainmenu"> 
          <li class="main-item"><a href=""><i class="fa-solid fa-user icon"></i></a></li>
          <li class="main-title"><a href="">Title</a></li>
          <li class="main-item"><a href=""><i class="fa-solid fa-bell icon"></i></a></li>
          <li class="main-item"><a href=""><i class="fa-solid fa-magnifying-glass icon"></i></a></li>
        </ul>
        <ul class="homemenu">
          <li class="home-item"><Link to="/">홈</Link></li>
          <li class="home-item-now"><Link to="/New">신규</Link></li>
          <li class="home-item"><a href="">인기</a></li>
          <li class="home-item"><a href="">카테고리</a></li>
        </ul>
      </header>
        {/* 본문 시작 */}
      <main>
        <ul class="mf-list">
          <li class="mf-item">
            <div class="mf-frame">
              <img class="mf-img" src="/text.png" alt="{{비디오타이틀}}"/>
            </div>
            <span class="mf-length">영상 길이</span>
            <h3 class="mf-name"><a href="">비디오 제목</a></h3>
          </li>
          <li class="mf-item">
            <div class="mf-frame">
              <img class="mf-img" src="text.png" alt="{{비디오타이틀}}"/>
            </div>
            <span class="mf-length">'04:27</span>
            <h3 class="mf-name"><a href="">필라테스 수업 1강-...</a></h3>
          </li>
          <li class="mf-item">
            <div class="mf-frame">
              <img class="mf-img" src="/text.png" alt="{{비디오타이틀}}"/>
            </div>
            <span class="mf-length">'04:27</span>
            <h3 class="mf-name"><a href="">필라테스 수업 1강-ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ</a></h3>
          </li>
          <li class="mf-item">
            <div class="mf-frame">
              <img class="mf-img" src="/text.png" alt="{{비디오타이틀}}"/>
            </div>
            <span class="mf-length">'04:27</span>
            <h3 class="mf-name"><a href="">필라테스 수업 1강-...</a></h3>
          </li>
          <li class="mf-item">
            <div class="mf-frame">
              <img class="mf-img" src="" alt="{{비디오타이틀}}"/>
            </div>
            <span class="mf-length">시간</span>
            <h3 class="mf-name"><a href="">비디오 제목</a></h3>
          </li>
        </ul>
      </main>
    </div>
    }></Route>
    </Routes>
  );
}

export default New;
