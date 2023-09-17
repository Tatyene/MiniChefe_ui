import React from "react";
import Image from 'next/image'
import styles from './informative.module.css'

interface InformativeCardProps {
    title: string;
    description: string;
    imageSRC: string;
}

const InformativeCard = (props: InformativeCardProps) => {

    return (
        <div className={styles.cardItem}>
            <Image
                src={props.imageSRC}
                alt='search'
                width={90}
                height={90}
            />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default InformativeCard;