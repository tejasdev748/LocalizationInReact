import React from 'react';
import { withTranslation } from 'react-i18next';

const Home = ({ t }) => (
  <div className='preview'>
    <h1>{t('home.title')}</h1>
    <div>
      <figure className='center'>
      </figure>
    </div>
    <p className='center'>{t('home.content')}</p>
  </div>
);

export default withTranslation('common')(Home);