import Head from 'next/head'
import Image from 'next/image'
import Logo from '../public/logo.png'
import styles from '../styles/Home.module.scss'

type ChildrenProps = {
  children: React.ReactNode
}

const BaseLayout = ({ children }: ChildrenProps) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          src={Logo}
          alt='Logo of ScrapPlace'
          placeholder='blur' // Optional blur-up while loading
          className={styles.logo}
        />
      </header>
      {children}
      <footer className={styles.footer}>
        <p>made by SB</p>
        <p>contact : snb0768@naver.com</p>
      </footer>
    </div>
  )
}

export default BaseLayout
