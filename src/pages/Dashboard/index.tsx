import { memo } from 'react';

import styles from './index.module.less';
const Dashboard = memo(() => {
  return <div className={styles.detail}>看板</div>;
});

export default Dashboard;
