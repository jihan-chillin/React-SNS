import React from 'react';
import PropTypes from 'prop-types';
// next.js의 자체적인 router
import Link from 'next/link';
import {Menu} from 'antd'

const AppLayout = ({ children }) => {
    return(
        <div>
           <Menu mode="horizontal">
                <Menu.Item key="/">
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item key="/profile">
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item key="/signup">
                    <Link href="signup"><a>회원가입</a></Link>
                </Menu.Item>
           </Menu>
           <div>
               {children}
           </div>
        </div>

        
    )
}

AppLayout.propTypes = {
    // React의 node 
    children: PropTypes.node.isRequired,
};

export default AppLayout;