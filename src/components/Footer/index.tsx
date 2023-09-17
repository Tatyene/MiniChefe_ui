import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <div className={styles.container}>
                    <Image
                        src="/logo.png"
                        alt="Cookbook Logo"
                        width={140}
                        height={56}
                        className={styles.logo}
                    />
                    <div className={styles.content}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo libero viverra dapibus odio sit malesuada in quis. Arcu tristique elementum viverra integer id.
                        </p>
                    </div>
                    <div className={styles.socials}>
                        <a href="" aria-label='facebook'>
                            <Image
                                src="/icon-facebook.svg"
                                alt="Facebook cookbook"
                                width={30}
                                height={30}
                            />
                        </a>
                        <a href="" aria-label='twitter'>
                            <Image
                                src="/icon-twitter.svg"
                                alt="Twitter cookbook"
                                width={30}
                                height={30}
                            />
                        </a>
                        <a href="" aria-label='Linkdin'>
                            <Image
                                src="/icon-linkind.svg"
                                alt="Linkedin cookbook"
                                width={30}
                                height={30}
                            />
                        </a>
                        <a href="" aria-label='instagram'>
                            <Image
                                src="/icon-instagram.svg"
                                alt="Instagram cookbook"
                                width={30}
                                height={30}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <h4>Opening Restaurant</h4>
                <div className={styles.content}>
                    <p>Sat-Wet: 09:00am-10:00PM</p>
                    <p>Thursdayt: 09:00am-11:00PM</p>
                    <p>Friday: 09:00am-8:00PM</p>
                </div>
            </div>
            <div>
                <h4>User Link</h4>
                <div className={styles.contentLinks}>
                    <Link href={'/'}>Início</Link>
                    <Link href={'/recipe'}>Receitas</Link>
                </div>
            </div>
            <div>
                <h4>Fale conosco</h4>
                <div className={styles.content}>
                    <p>1234 Country Club Ave</p>
                    <p>NC 123456, London, UK</p>
                    <p>+0123 456 7891</p>
                </div>
                <div className={styles.contactUs}>
                    <input type="email" name="contact-email" id="contact-email" placeholder='Enter your email....' />
                    <button>
                        <Image
                            src="/orange-button.svg"
                            alt="email"
                            width={30}
                            height={30}
                        />
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer