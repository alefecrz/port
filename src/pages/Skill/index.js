import React from 'react';

import HexaBg from '../../assets/icons/icon-hexaBg';

import FireIcon from '../../assets/icons/icon-fire';
import DbIcon from '../../assets/icons/icon-db';
import WebIcon from '../../assets/icons/icon-web';

import iconOk from '../../assets/icons/icon-ok.svg';

const Skill = () => (
  <div className="skills">
        <ul>
            <li>
                <div className="icon-content">
                    <HexaBg width={100} fill='#2D132C' className="bg"/>
                    <DbIcon className="icon" />
                </div>
                <h2>Backend</h2>
                <div className="item">
                    <img src={iconOk} alt=""/>
                    <h3>JavaScript</h3>
                </div>
                <div className="item">
                    <img src={iconOk} alt=""/>
                    <h3>Nodejs/Expressjs</h3>
                </div>
                <div className="item">
                    <img src={iconOk} alt=""/>
                    <h3>ApiRest</h3>
                </div>
                <div className="item">
                    <img src={iconOk} alt=""/>
                    <h3>SQL</h3>
                </div>
                <div className="item">
                    <img src={iconOk} alt=""/>
                    <h3>MongoDB</h3>
                </div>
            </li>
            <li>
                <div className="icon-content">
                    <HexaBg width={100} fill='#C72C41' className="bg"/>
                    <WebIcon className="icon" />
                </div>
                <h2>Frontend</h2>
                <div className="item">
                    <img src={iconOk} alt=""/>
                    <h3>HTML/CSS</h3>
                </div>
                <div className="item">
                    <img src={iconOk} alt=""/>
                    <h3>AngularJS</h3>
                </div>
                <div className="item">
                    <img src={iconOk} alt=""/>
                    <h3>Reactjs</h3>
                </div>
                <div className="item">
                    <img src={iconOk} alt=""/>
                    <h3>ReactNative</h3>
                </div>
            </li>
            <li>
                <div className="icon-content">
                    <HexaBg width={100} fill='#EE4540' className="bg"/>
                    <FireIcon className="icon" />
                </div>
                <h2>Others</h2>
                <div className="item">
                    <img src={iconOk} alt=""/>
                    <h3>Prototyping</h3>
                </div>
                <div className="item">
                    <img src={iconOk} alt=""/>
                    <h3>UX</h3>
                </div>
                <div className="item">
                    <img src={iconOk} alt=""/>
                    <h3>Adobe XD</h3>
                </div>
                <div className="item">
                    <img src={iconOk} alt=""/>
                    <h3>Illustration</h3>
                </div>
                <div className="item">
                    <img src={iconOk} alt=""/>
                    <h3>PowerBI</h3>
                </div>
            </li>
        </ul>
    </div>
);

export default Skill;
