import React from 'react';
import { withTranslation } from 'react-i18next';
import Common from '../Common';

const Hercules = ({ t }) => (
  <Common t={t} name='hercules' />
);

export default withTranslation('common')(Hercules);
