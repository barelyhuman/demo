import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <a href="/tillwhen">TillWhen Landing Page Version 1</a>
        </li>
        <li>
          <a href="https://roll.demo.reaper.im">Roll Landing Page Version 1</a>
        </li>
      </ul>
    </div>
  );
}
