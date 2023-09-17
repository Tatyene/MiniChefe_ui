import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { Card, Carousels, InformativeCard } from '@/components'

export default function Home() {
  const recipeList = [
    {
      'id': 1,
      'name': 'Sanduíche Grego',
      'imageSRC': '/gyro-sandwich.png',
      'rating': 4.9,
      'favorite': false,
    },
    {
      'id': 2,
      'name': 'Enchilade',
      'imageSRC': '/beef-enchiladas.png',
      'rating': 5.0,
      'favorite': true,
    },
    {
      'id': 3,
      'name': 'Feijões Verdes',
      'imageSRC': '/grilled-green-beans.png',
      'rating': 4.8,
      'favorite': false,
    },
    {
      'id': 4,
      'name': 'Pizza Pepperoni',
      'imageSRC': '/pepperoni-pizza.png',
      'rating': 4.9,
      'favorite': false,
    },
    {
      'id': 5,
      'name': 'Torta de Frango',
      'imageSRC': '/chicken-cake.png',
      'rating': 4.7,
      'favorite': false,
    },
    {
      'id': 6,
      'name': 'Salada',
      'imageSRC': '/salad.png',
      'rating': 5.0,
      'favorite': false,
    },
  ];

  return (
    <main className={styles.main}>
      <section className={styles.cardSection}>
        <div>
          <h1 className={styles.sectionTitle}>Receitas Populares</h1>
          <div className={styles.cardGrid}>
            {recipeList.map((recipe, index) => (
              <Card key={index} name={recipe.name} imageSRC={recipe.imageSRC} rating={recipe.rating} favorite={recipe.favorite} id={recipe.id} />
            ))}
          </div>
          <div className={styles.seeMore}>
            Ver Mais Receitas
            <Link href='/'>
              <Image
                src='/white-button.svg'
                alt='search'
                width={95}
                height={95}
              />
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.categorySection}>
        <div>
          <h1 className={styles.sectionTitle}>Receitas mais procuradas no nosso site!</h1>
          <div className={styles.cardGrid}>
            <InformativeCard title={'Receitas Caseiras'} description={'But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron'} imageSRC={'/icon-fork.svg'} />
            <InformativeCard title={'Receitas Saudáveis'} description={'But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron'} imageSRC={'/icon-spon.svg'} />
            <InformativeCard title={'Receitas Rápidas'} description={'But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron'} imageSRC={'/icon-car.svg'} />
          </div>
        </div>
      </section>
      <section className={styles.testimonySection}>
        <div>
          <h1 className={styles.sectionTitle}>Clientes que prepararam nossas receitas</h1>
          <div className={styles.testimonyGrid}>
            <div className={styles.testimonyCarousel}>
              <Carousels />
            </div>
            <div className="testimony-image">
              <Image
                src='/fast-food-banner.png'
                alt='fast-food'
                width={600}
                height={0}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.newsletterSection}>
        <Image
          src='/burger-sandwich.png'
          alt='burger sandwich'
          width={530}
          height={400}
        />
        <div className={styles.newsletterBackground}>
          <div className={styles.newsletterContent}>
            <h3>Subcribe To Our Newsletter</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipidrscing elit. Purus mauris sem sed urna venenatis vivamus. Egestas in velit nulla viverra turpis id ac. Amet faucibus tempus.</p>
            <div className={styles.newsletterInput}>
              <input type='email' placeholder='Type your email.....'></input>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
