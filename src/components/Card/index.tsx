"use client"
import React from 'react';
import Image from 'next/image'
import styles from './card.module.css'
import { useRouter } from 'next/navigation';

interface CardProps {
    id: number;
    name: string;
    imageSRC: string;
    rating: number;
    favorite: boolean;
}

const Card = (props: CardProps) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/recipe/${props.id}`);
    };

    return (
        <div className={styles.cardItem}>
            <div className="card-item-image">
                <Image
                    src={props.favorite ? '/icon-full-heart.svg' : '/icon-empty-heart.svg'}
                    alt='favorite'
                    width={32}
                    height={30}
                    className={styles.favorite}
                />
                <Image
                    src={props.imageSRC}
                    alt='search'
                    width={400}
                    height={250}
                    layout={'responsive'}
                />
            </div>
            <div className={styles.cardItemContent}>
                <h3>{props.name}</h3>
                <div className={styles.cardRatingContainer}>
                    <Image
                        src='/star.svg'
                        alt='search'
                        width={12}
                        height={11}
                    />
                    <p>{props.rating.toString().padEnd(3, '.0')}</p>
                </div>
                <div className={styles.buttonContainer}>
                    <button
                        className={styles.cardButton}
                        onClick={handleClick}
                    >
                        Ver Receita
                    </button>
                </div>
            </div>
        </div>
    )

}

export default Card;