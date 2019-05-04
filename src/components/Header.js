import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <div className = 'logo'>
                    로고가 들어갈 자리
                </div>
                <div className = 'blog_name'>
                    ReactBlog
                </div>
                <div className = 'login'>
                    로그인
                </div>
            </div>
        );
    }
}

export default Header;
