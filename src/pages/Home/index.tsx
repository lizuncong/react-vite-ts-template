import { memo } from 'react';
import { useNavigate } from 'react-router';

import Button from '@/components/Button';
import ROUTE_PATH from '@/routes/constant';

import styles from './index.module.less';
const Home = memo(() => {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      首页
      <div>
        <Button
          text="跳到看板页"
          onClick={() => {
            navigate(ROUTE_PATH.dashboard);
          }}
        />
      </div>
    </div>
  );
});

export default Home;
