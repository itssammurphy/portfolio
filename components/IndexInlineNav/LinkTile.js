import styles from "./IndexInlineNav.module.scss";
import Link from "next/link";

const LinkTile = ({href, title, children}) => {
    return (
        <div className={styles.link}>
            <div className={styles.linkSvg}>
                {children}
            </div>
            <Link href={href}><h3 className="sans__override">{title}</h3></Link>
        </div>
    )
}

export default LinkTile;