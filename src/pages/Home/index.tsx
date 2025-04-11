import { memo } from 'react';

import styles from './index.module.less';
const Home = memo(() => {
  return <div className={styles.home}>首页</div>;
});

export default Home;
