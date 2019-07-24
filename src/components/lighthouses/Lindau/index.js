import React from 'react';
import { withTranslation } from 'react-i18next';
import Common from '../Common';

const Lindau = ({ t }) => (
  <Common t={t} name='lindau' />
);

export default withTranslation('common')(Lindau);
