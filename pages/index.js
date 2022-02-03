import { Image } from '../icons/Image'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      {/* <section className={styles.variationC2}>
        <div>
          <article></article>
          <article></article>
        </div>
        <article></article>
      </section> */}
      {/* <section className={styles.variationD2}>
        <article></article>
        <div>
          <article></article>
          <article></article>
          <article></article>
        </div>
      </section> */}
      <section className={styles.variationC1}>
        <article className={styles.fallBackImg}>
          <Image />
        </article>
        <div>
          <article className={styles.fallBackImg}>
            <Image />
          </article>
          <article className={styles.fallBackImg}>
            <Image />
          </article>
        </div>
      </section>
      <section className={styles.variationD1}>
        <article className={styles.fallBackImg}>
          <Image />
        </article>
        <article className={styles.fallBackImg}>
          <Image />
        </article>
        <article className={styles.fallBackImg}>
          <Image />
        </article>
        <article className={styles.fallBackImg}>
          <Image />
        </article>
      </section>
      <section className={styles.variationA}>
        <article className={styles.fallBackImg}>
          <Image />
        </article>
      </section>
      <section className={styles.variationB}>
        <article className={styles.fallBackImg}>
          <Image />
        </article>
        <article className={styles.fallBackImg}>
          <Image />
        </article>
      </section>
    </div>
  )
}
