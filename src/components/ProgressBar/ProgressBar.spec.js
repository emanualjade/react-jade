import React from 'react';
import {shallow} from 'enzyme';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  test('100 percent returns green color', () => {
    const wrapper = shallow(<ProgressBar percent={100} width={500} />);
    const color = wrapper.instance().getcolor();
    expect(color).toEqual('green');
  });
});