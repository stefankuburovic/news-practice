import React from 'react';
import { shallow } from 'enzyme';
import HeaderContainer from './HeaderContainer';
import Menu from '../../components/Menu/Menu';
import { LANGUAGES, MENU_ITEMS } from '../../constants';

let wrapped = shallow(
    <HeaderContainer>
        <Menu items={MENU_ITEMS} position="left" />
        <Menu items={LANGUAGES} position="right" />
    </HeaderContainer>,
);

describe('HeaderContainer', () => {
    it('should render the HeaderContainer Component correctly', () => {
        expect(wrapped).toMatchSnapshot();
    });
});
