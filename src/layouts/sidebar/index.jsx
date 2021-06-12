import React from 'react';
import sideLinks from '../menu';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';

const Sidebar = () => {

    const MenuItems = (data) => {
        return (
                data.map((el) => {
                    return (
                        <Menu.Item key={el.title}> 
                        <Link to={el.url}></Link>
                        {el.title} </Menu.Item>
                    );
                })
        )
    }

    return (
        <div>
            <Menu>
                {MenuItems(sideLinks)}
            </Menu>
        </div>
    )
}

export default Sidebar;