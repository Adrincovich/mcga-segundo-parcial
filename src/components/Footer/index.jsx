import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.main}>
        <div className={styles.appName}>
          <p>Adrián Drincovich</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
