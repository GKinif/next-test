import React from 'react'
import css from 'next/css'

import PageHeader from '../components/PageHeader';
import Menu from '../components/Menu';

export default () => (
    <div>
        <PageHeader title="Next - Index" />
        <Menu />
        <div className={style}>
            Hello world
        </div>
    </div>
);

const style = css({
  background: 'red',
  ':hover': {
    background: 'gray'
  },
  '@media (max-width: 600px)': {
    background: 'blue'
  }
});