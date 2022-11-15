import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.main}>
        <div className={styles.appName}>
          <p>Adrián Drincovich</p>
          <a href="https://github.com/Adrincovich/mcga-segundo-parcial" target="_blank" rel="noopener noreferrer">
              Visit GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
