import styles from "./Header.module.scss";

const IndexHeader = ({title, subtitle, text, children}) => {
    return (
        <header className={styles.mainHeader}>
            <div className={styles.col}>
                <div className={styles.content}>
                    <h1 data-aos="fade-right" data-aos-duration="500" data-aos-once="true">{title}</h1>
                    <h2 data-aos="fade-right" data-aos-delay="250" data-aos-duration="500" data-aos-once="true">{subtitle}</h2>
                    <p data-aos="fade-right" data-aos-delay="500" data-aos-duration="500" data-aos-once="true">{text}</p>
                </div>
            </div>
            <div className={styles.col}>
                <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="500" data-aos-once="true" className={styles.indexHeaderImage}>
                    <img className={styles.image} alt="Photo of me!" src="/me.png"/>
                </div>
            </div>
        </header>
    )
}

export default IndexHeader;