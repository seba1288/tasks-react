import '../components/CheckContent/buttonStyle.scss';
import '../components/Counter/CounterStyle.scss'
import '../components/DynamicList/DynamicListStyle.scss'

import React from 'react';

import { AppHeader } from '../components/AppHeader/appheader';
import { MyButton } from '../components/CheckContent/CheckContent';
import { Counter } from '../components/Counter/Counter';
import { DynamicList } from '../components/DynamicList/DynamicList';
import { TitleText } from '../components/TitleText/TitleText';



const IndexPage = () => (
  <>
    <TitleText />
    <AppHeader/>
    <MyButton/>
    <Counter/>
    <DynamicList/>
  </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
