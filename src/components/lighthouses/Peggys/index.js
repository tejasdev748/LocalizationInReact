import React from 'react';
import { withTranslation } from 'react-i18next';
import Common from '../Common';

const Peggys = ({ t }) => (
  <Common t={t} name='peggys' />
);

export default withTranslation('common')(Peggys);