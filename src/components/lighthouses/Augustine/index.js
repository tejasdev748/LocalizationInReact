import React from 'react';
import { withTranslation } from 'react-i18next';
import Common from '../Common';

const Augustine = ({ t }) => (
  <Common t={t} name='augustine' />
);

export default withTranslation('common')(Augustine);