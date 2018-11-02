import React, { useState, Fragment } from 'react';

import 'bulma';
import { Container, Nav, NavLeft, NavItem, NavRight, Button, Columns, Column, Menu, MenuList, MenuLabel, MenuLink, Section } from "bloomer";

import { FormExample } from './FormExample';

const App = () => {
  const [view, changeViewTo] = useState('');
  return (
    <Fragment>
      <Nav hasShadow>
        <NavLeft>
          <NavItem isBrand>React Hooks Training</NavItem>
        </NavLeft>
        <NavRight isMenu>
          <NavItem>
            <Button isColor="success">
              Go to home
            </Button>
          </NavItem>
        </NavRight>
      </Nav>
      <Section>
        <Container isFluid>
          <Columns>
            <Column isSize="1/4">
              <Menu>
                <MenuLabel>Custom hooks</MenuLabel>
                <MenuList>
                  <li><MenuLink hasTextColor="grey-light" onClick={() => changeViewTo('Register')}>useForm</MenuLink></li>
                </MenuList>
              </Menu>
            </Column>
            <Column isSize='3/4'>
              <FormExample isHidden={view !== 'Register'}/>
            </Column>
          </Columns>
        </Container>
      </Section>
    </Fragment>
  );
}

export default App;