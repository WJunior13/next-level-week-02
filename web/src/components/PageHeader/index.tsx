import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/logo.svg';
import logoImg from '../../assets/images/icons/back.svg';

import './styles.css';


interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to='/'>
                    < img src={logoImg} alt="proff" />
                </Link>
                <img src={backIcon} alt="voltar" />




            </div>

            <div className="header-content">
                <strong>{props.title}</strong>

                {props.children}
            </div>
        </header>
    )
}

export default PageHeader;