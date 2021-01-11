import React from 'react';
import { Conteiner, Card, Item} from './style';

import SkillIcon from '../../components/SkillIcon';

import HexaBg from '../../assets/icons/icon-hexaBg';
import FireIcon from '../../assets/icons/icon-fire';
import DbIcon from '../../assets/icons/icon-db';
import WebIcon from '../../assets/icons/icon-web';
import iconOk from '../../assets/icons/icon-ok.svg';

const Skill = () => (
  <Conteiner>
    {/* <h1>Habilidades</h1> */}
        <Card>
          <SkillIcon
            background={HexaBg}
            width={100}
            fill='#2D132C'
            icon={DbIcon}
            title="Beckend"
          />
          <Item>
            <img src={iconOk} alt=""/>
            <h3>Javascript</h3>
          </Item>
          <Item>
            <img src={iconOk} alt=""/>
            <h3>SQL and MongoDB</h3>
          </Item>
          <Item>
            <img src={iconOk} alt=""/>
            <h3>API restFull Concepts</h3>
          </Item>
          <Item>
            <img src={iconOk} alt=""/>
            <h3>C</h3>
          </Item>
          <Item>
            <img src={iconOk} alt=""/>
            <h3>Java</h3>
          </Item>
          <Item>
            <img src={iconOk} alt=""/>
            <h3>Elixir</h3>
          </Item>
        </Card>
        <Card>
          <SkillIcon
            background={HexaBg}
            width={100}
            fill='#C72C41'
            icon={WebIcon}
            title="Frontend"
          />
           <Item>
            <img src={iconOk} alt=""/>
            <h3>React</h3>
          </Item>
          <Item>
            <img src={iconOk} alt=""/>
            <h3>React Native</h3>
          </Item>
          <Item>
            <img src={iconOk} alt=""/>
            <h3>HTML</h3>
          </Item>
          <Item>
            <img src={iconOk} alt=""/>
            <h3>Pure CSS</h3>
          </Item>
          <Item>
            <img src={iconOk} alt=""/>
            <h3>AngularJS</h3>
          </Item>

        </Card>
        <Card>
          <SkillIcon
            background={HexaBg}
            width={100}
            fill='#EE4540'
            icon={FireIcon}
            title="Design"
          />
          <Item>
            <img src={iconOk} alt=""/>
            <h3>Prototyping</h3>
          </Item>
          <Item>
            <img src={iconOk} alt=""/>
            <h3>Illustration</h3>
          </Item>
          <Item>
            <img src={iconOk} alt=""/>
            <h3>Drawing</h3>
          </Item>
          <Item>
            <img src={iconOk} alt=""/>
            <h3>UX</h3>
          </Item>
        </Card>
        <Card>
          <SkillIcon
            background={HexaBg}
            width={100}
            fill='#465E73'
            icon={FireIcon}
            title="Others"
          />
          <Item>
            <img src={iconOk} alt=""/>
            <h3>Artificial Intelligence</h3>
          </Item>
          <Item>
            <img src={iconOk} alt=""/>
            <h3>Data Mining</h3>
          </Item>
          <Item>
            <img src={iconOk} alt=""/>
            <h3>Automated testing</h3>
          </Item>
          <Item>
            <img src={iconOk} alt=""/>
            <h3>GIT and GIT Flow</h3>
          </Item>
        </Card>
  </Conteiner>
);

export default Skill;
