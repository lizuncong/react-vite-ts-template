import { useEffect, useState } from 'react';

import Button from '@/components/Button';

import styles from './App.module.css';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count, setCount);
  }, [count]);
  return (
    <div className={styles.container}>
      入口<Button></Button>
    </div>
  );
}

export default App;
