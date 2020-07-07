import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Block from 'shared/components/Block';

//svg icons
import { DashboardIcon, PinIcon, UsersIcon, profilePhoto } from './icons';

import './index.scss';

const Sidebar = () => {
    const pathname = useLocation().pathname;

    return (
        <Block className="sidebar">
            <Block className="sidebar__column">
                <Block className="sidebar__icon-group ig-4x">
                    <Block>
                        <Block className="brand">S</Block>
                    </Block>
                    <Link to="/notFound" title="dashboard">
                        <Block className={pathname === '/notFound' ? 'icon active' : 'icon'}>
                            <DashboardIcon />
                        </Block>
                    </Link>
                    <Link to="/usertable" title="usertable">
                        <Block className={pathname === '/usertable' ? 'icon active' : 'icon'}>
                            <UsersIcon />
                        </Block>
                    </Link>

                    <Block className="icon">
                        <span></span>
                    </Block>
                </Block>
            </Block>
            <Block className="sidebar__column">
                <Block className="sidebar__icon-group ig-3x">
                    <Link to="/maps" title="maps">
                        <Block className={pathname === '/maps' ? 'icon active' : 'icon'}>
                            <PinIcon />
                        </Block>
                    </Link>

                    <Block className="icon">{/* <SettingsIcon /> */}</Block>
                    <Block className="icon">{/* <FolderIcon /> */}</Block>
                </Block>
                <Block className="sidebar__profile">
                    <Block className="outline">
                        <img src={profilePhoto} alt="profile" className="image" />
                    </Block>
                </Block>
            </Block>
        </Block>
    );
};

export default Sidebar;
