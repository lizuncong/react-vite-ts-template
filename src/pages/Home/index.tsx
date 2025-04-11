import { memo } from 'react';
import { useNavigate } from 'react-router';

import Button from '@/components/Button';
import ROUTE_PATH from '@/routes/constant';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { changeGlobalState, changeUid, selectUserName } from '@/store/reducer/global';
import { changeHomeState } from '@/store/reducer/home';

import styles from './index.module.less';
const Home = memo(() => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userName = useAppSelector(selectUserName);
  const homeCount = useAppSelector((state) => state.home.homeCount);
  const uid = useAppSelector((state) => state.global.uid);
  return (
    <div className={styles.home}>
      首页
      <div>global userName: {userName}</div>
      <div>global uid: {uid}</div>
      <div>home页面计数器：{homeCount}</div>
      <button type="button" onClick={() => dispatch(changeUid('10011'))}>
        点击设置全局UID的值
      </button>
      <button type="button" onClick={() => dispatch(changeGlobalState({ userName: '李四' }))}>
        点击修改全局username的值
      </button>
      <button type="button" onClick={() => dispatch(changeHomeState({ homeCount: homeCount + 1 }))}>
        点击修改home页面的计数器
      </button>
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
