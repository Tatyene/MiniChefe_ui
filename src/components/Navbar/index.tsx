"use client";
import React, { useState, useContext } from 'react'
import Image from 'next/image'
import Link from "next/link";
import styles from './navbar.module.css'
import { Login } from '..';
import { useDisclosure } from '@chakra-ui/react';
import { UserContext } from '@/context/user.context';

const Navbar = () => {
    const { isOpen: isModalOpen, onClose, onOpen } = useDisclosure();
    const { user } = React.useContext(UserContext)

    return (
        <header className={styles.headerContainer}>
            <Link href='/' className='logo'>
                <Image
                    src="/logo.png"
                    alt="Cookbook Logo"
                    width={96}
                    height={56}
                />
            </Link>
            <nav className={styles.nav}>
                <Link href='/'>Início</Link>
                <Link href='/recipe/list'>Receitas</Link>
            </nav>
            <div className={styles.search}>
                <button className='search-buttom'>
                    <Image
                        src='/search.svg'
                        alt='search'
                        width={25}
                        height={25}
                    />
                </button>
                <input type='text' className='search-input' placeholder='Search'></input>
            </div>
            {user.jwt
                ?
                <div className={styles.entry}>
                    <button className={styles.buttonCreateRecipe}>
                        <Link href='/recipe'>Cadastrar Receita</Link>
                    </button>
                    <div className={styles.avatar}>MC</div>
                </div>
                :
                <div className={styles.entry}>
                    <button className={styles.signin} onClick={onOpen}>Login</button>
                    <button className={styles.signup} onClick={onOpen}>Cadastre-se</button>
                </div>
            }
            <Login isOpen={isModalOpen} onClose={onClose} />
        </header>
    )
}

export default Navbar