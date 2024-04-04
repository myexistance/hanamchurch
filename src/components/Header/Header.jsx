import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import images from "../../constants/images";

const Header = () => (
    <div className="header" style = {{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${images.header_bg}) center/cover no-repeat`
    }}>
        <Navbar />

        <div className="container">
            <div className="header__content text__center text__light flex flex__center">
                <div className="header__content--left"></div>
                <div className="header__content--right">
                    <h1 className="header__title fw__6">웰링턴하남교회</h1>
                    <p className="para__text">
는 대한예수교 장로회 합동 교단(사랑의 교회, 수영로교회 등)에 소속된 교회로 하남교회에서 뉴질랜드 웰링턴에 교회를 설립하여 복음전도 사역의 일환으로 세워졌습니다. 하남교회는 류일선 목사를 파송하여 2023년 1월 15일(주일) 첫 예배를 드리고, 하나님의 은혜로 성장하며, 진정한 예배, 진정한 사랑, 진정한 교회의 본질 회복을 통해 영혼을 구원하고 하나님의 나라를 구현해 가고 있습니다.</p>
                    <a href = "#" className="btn btn__blue">contact us</a>
                </div>
            </div>
        </div>
    </div>
)

export default Header;