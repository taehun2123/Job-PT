/* eslint-disable */

import './App.css';
import './New.css';
import './Hot.css';
import './Category.css';
import 'https://kit.fontawesome.com/0bb6f287f4.js';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function Mainmenu(){
  return (
    <ul className="mainmenu"> 
      <li className="main-item"><a href=""><i className="fa-solid fa-user icon"></i></a></li>
      <li className="main-title"><Link to="/">Title</Link></li>
      <li className="main-item"><a href=""><i className="fa-solid fa-bell icon"></i></a></li>
      <li className="main-item"><a href=""><i className="fa-solid fa-magnifying-glass icon"></i></a></li>
    </ul>
  )
}

function Mfitem(){
  return (
  <li className="mf-item">
    <div className="mf-frame">
      <img className="mf-img" src="{mfimg}" alt="{{비디오타이틀}}"/>
    </div>
    <span className="mf-length">'04:27</span>
    <h3 className="mf-name"><a href="">필라테스 수업 1강-ㅁㄴㅇㅁㄴㅇㅁㄴㅇ</a></h3>
  </li>
  )
}

function Sqitem(){
  return (
  <li className="sq-item">
    <div className="sq-frame">
      <img className="sq-img" src="{sqimg}" alt="{{비디오타이틀}}"/>
    </div>
    <span className="sq-length">'04:27</span>
    <h3 className="sq-name"><a href="">필라테스 수업 3강-ㅁㄴㅇㅁㄴㅇㅁㄴㅇ</a></h3>
  </li>
  )
}

function Tcitem(){
  return (
  <li className="tc-item">
    <div className="tc-frame">
      <img className="tc-img" src="{tcimg}" alt="{{강사 타이틀}}"/>
    </div>
    <h3 className="sq-name"><a href="">강사 성명</a></h3>
  </li>
  )
}

function Resultitem(){
  return (
  <li className="result-item">
    <div className="result-frame">
      <img className="result-img" src="{mfimg}" alt="{{비디오타이틀}}"/>
    </div>
    <span className="result-length">'04:27</span>
    <h3 className="result-name"><a href="">필라테스 수업 1강-ㅁㄴㅇㅁㄴㅇㅁㄴㅇ</a></h3>
  </li>
  )
}


function App() {
  return (
    <Routes>     
    <Route path="/" element={
    <div className="App">
      <header>
        {/* 상단바 고정 */}
        <Mainmenu></Mainmenu>
        <ul className="homemenu">
          <li className="home-item-now"><Link to="/">홈</Link></li>
          <li className="home-item"><Link to="/New">신규</Link></li>
          <li className="home-item"><Link to="/Hot">인기</Link></li>
          <li className="home-item"><Link to="/Category">카테고리</Link></li>
        </ul>
      </header>
      {/* 본문 시작 */}
      <main>
        <article className="squance">
          <div className="squ-tab">
            <h1>보관한 시퀀스</h1>
            <button className="sq-allbutton">
              <a href="">전체보기</a>
            </button>
          </div>
          <div className="in-sq-box">
          </div>
        </article>
        <article className="subteacher">
          <div className="squ-tab">
            <h1>구독중인 강사</h1>
            <button className="sq-allbutton">
              <a href="">전체보기</a>
            </button>
          </div>
          <div className="in-sq-box">
          </div>
        </article>
      </main>
    </div>
    }></Route>    
    <Route path="/New" element={
    <div className="New">
      <header>
      {/* 상단바 고정 */}
        <Mainmenu></Mainmenu>
        <ul className="homemenu">
          <li className="home-item"><Link to="/">홈</Link></li>
          <li className="home-item-now"><Link to="/New">신규</Link></li>
          <li className="home-item"><Link to="/Hot">인기</Link></li>
          <li className="home-item"><Link to="/Category">카테고리</Link></li>
        </ul>
      </header>
        {/* 본문 시작 */}
      <main>
        <ul className="mf-list">
          <Mfitem></Mfitem>
          <Mfitem></Mfitem>
          <Mfitem></Mfitem>
          <Mfitem></Mfitem>
          <Mfitem></Mfitem>
        </ul>
      </main>
    </div>
    }></Route>
    <Route path="/Hot" element={
    <div className="Hot">
      <header>
      {/* 상단바 고정 */}
        <Mainmenu></Mainmenu>
        <ul className="homemenu">
          <li className="home-item"><Link to="/">홈</Link></li>
          <li className="home-item"><Link to="/New">신규</Link></li>
          <li className="home-item-now"><Link to="/Hot">인기</Link></li>
          <li className="home-item"><Link to="/Category">카테고리</Link></li>
        </ul>
      </header>
        {/* 본문 시작 */}
      <main>
        <ul className="hotmenu">
          <li className="hot-item-now"><Link to="/Hot">시퀀스</Link></li>
          <li className="hot-item"><Link to="/Hot-tc">강사</Link></li>
        </ul>
        <ol className="sq-list">
          <Sqitem></Sqitem>
          <Sqitem></Sqitem>
          <Sqitem></Sqitem>
          <Sqitem></Sqitem>
          <Sqitem></Sqitem>
        </ol>
      </main>
    </div>
    }></Route>
    <Route path="/Hot-tc" element={
    <div className="Hot">
      <header>
      {/* 상단바 고정 */}
        <Mainmenu></Mainmenu>
        <ul className="homemenu">
          <li className="home-item"><Link to="/">홈</Link></li>
          <li className="home-item"><Link to="/New">신규</Link></li>
          <li className="home-item-now"><Link to="/Hot">인기</Link></li>
          <li className="home-item"><Link to="/Category">카테고리</Link></li>
        </ul>
      </header>
        {/* 본문 시작 */}
      <main>
        <ul className="hotmenu">
          <li className="hot-item"><Link to="/Hot">시퀀스</Link></li>
          <li className="hot-item-now"><Link to="/Hot-tc">강사</Link></li>
        </ul>
        <ol className="sq-list">
          <Tcitem></Tcitem>
          <Tcitem></Tcitem>
          <Tcitem></Tcitem>
          <Tcitem></Tcitem>
          <Tcitem></Tcitem>
        </ol>
      </main>
    </div>
    }></Route>
    <Route path="/Category" element={
    <div className="Category">
      <header>
      {/* 상단바 고정 */}
        <Mainmenu></Mainmenu>
        <ul className="homemenu">
          <li className="home-item"><Link to="/">홈</Link></li>
          <li className="home-item"><Link to="/New">신규</Link></li>
          <li className="home-item"><Link to="/Hot">인기</Link></li>
          <li className="home-item-now"><Link to="/Category">카테고리</Link></li>
        </ul>
      </header>
        {/* 본문 시작 */}
      <main>
        <div className="filter">
          <ul className="filter-equipment">
            <li className="filter-eq-item-now">기구1</li>
            <li className="filter-eq-item">기구2</li>
            <li className="filter-eq-item">기구3</li>
            <li className="filter-eq-item">기구4</li>
          </ul>
          <ul className="filter-time">
            <li className="filter-tm-item-now">25'</li>
            <li className="filter-tm-item">50'</li>
            <li className="filter-tm-item">기타</li>
          </ul>
          <ul className="filter-prop">
            <li className="filter-pr-item-now">미니볼</li>
            <li className="filter-pr-item">폼롤러</li>
            <li className="filter-pr-item">짐볼</li>
            <li className="filter-pr-item">밴드</li>
          </ul>
        </div>
        <div className='filter-toggle'> 
          <i class="fa-solid fa-filter toggle"> 인기순</i>
        </div>
        <ul className="result-list">
          <Resultitem></Resultitem>
          <Resultitem></Resultitem>
          <Resultitem></Resultitem>
          <Resultitem></Resultitem>
        </ul>
      </main>
    </div>
    }></Route>
    </Routes>
  );
}

export default App;
