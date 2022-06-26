import Head from 'next/head'
import IndexHeader from '../components/Header/IndexHeader'
import IndexInlineNav from '../components/IndexInlineNav/IndexInlineNav'
import styles from '../styles/Home.module.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function Home({SamCurrentAge}) {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className={styles.container}>
      <Head>
        <title>Sam Murphy Web Design</title>
        <meta name="description" content="Website design and development by Sam Murphy." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexHeader title="Sam Murphy" subtitle="Full-stack developer" text="Hello, world!" />
      <main>
        {/* <IndexInlineNav /> */}
        <section className="one__col">
          <div className="content">
            <h1 data-aos="fade-right" data-aos-duration="500" data-aos-once="true">G'day!</h1>
            <p data-aos="fade-left" data-aos-duration="500" data-aos-once="true" data-aos-delay="100">
              I'm Sam, and this is my website! This is where I'll be showcasing all the projects I build over the coming years, whether they be front-end designs, super cool IoT projects, or other stuff I'm just pretty chuffed with.
              <br/><br/>
              I am from Melbourne, Australia, and am currently {SamCurrentAge.age} years old. I've been coding since 2014, originally learning <b>Python</b> in Year 3 on a Raspberry Pi 1, and then expanding my skills by using it basically daily to complete coding and mathematical problems. This early experience helped fuel my love for software development. I have since expanded to working with <b>JavaScript</b>, <b>PHP</b>, <b>C++</b>, and have been learning <b>Java</b> as of recent.
              <br/><br/>
              Some key areas of interest of mine in software are front-end web development, IoT, as well as algorithm design.
            </p>
          </div>
        </section>
        <section>

        </section>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/age');
  const SamCurrentAge = await res.json();

  return {props: {SamCurrentAge}}
}
