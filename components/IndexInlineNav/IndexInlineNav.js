import styles from "./IndexInlineNav.module.scss";
import Link from "next/link";
import LinkTile from "./LinkTile";

const IndexInlineNav = () => {
    return (
        <>
        <section className={styles.navSection}>
            <div className={styles.inlineNav}>
                <LinkTile href="/contact" title="Contact Me!">
                    <img src="./svg/contact.svg" />
                </LinkTile>
                <LinkTile href="/contact" title="Contact Me!">
                    <img src="./svg/contact.svg" />
                </LinkTile>
                <LinkTile href="/contact" title="Contact Me!">
                    <img src="./svg/contact.svg" />
                </LinkTile>
                <LinkTile href="/contact" title="Contact Me!">
                    <img src="./svg/contact.svg" />
                </LinkTile>
            </div>
        </section>
        </>
    )
}

export default IndexInlineNav;