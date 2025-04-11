import { memo } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { changeDashboardState } from '@/store/reducer/dashboard';

import styles from './index.module.less';
const Dashboard = memo(() => {
  const dashboardCount = useAppSelector((state) => state.dashboard.boardCount);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.detail}>
      看板
      <div>看板页面计数器：{dashboardCount}</div>
      <button type="button" onClick={() => dispatch(changeDashboardState({ boardCount: dashboardCount + 1 }))}>
        点击修改看板页面计数器
      </button>
    </div>
  );
});

export default Dashboard;
