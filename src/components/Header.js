import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className = "header ">
                <div className = 'logo common'>
                    로고가 들어갈 자리
                </div>
                <div className = 'blog_name common'>
                    ReactBlog
                </div>
                <div className = 'login common'>
                    로그인
                </div>
            </div>
        );
    }
}

export default Header;
