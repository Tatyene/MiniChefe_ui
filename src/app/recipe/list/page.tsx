"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { Card } from '@/components'
import { useToast } from '@chakra-ui/react'
import Cookies from 'universal-cookie'

export default function RecipeList() {
    interface Recipe {
        id: number,
        title: string,
        img: string,
        description: string,
        ingredients: string,
        instructions: string
    }

    const [recipeList, setRecipeList] = useState<Recipe[]>([]);

    const toast = useToast()

    useEffect(() => {
        fetchData();
    }, [])


    function fetchData(keyword = undefined) {
        // const cookies = new Cookies();
        // const token = cookies.get("jwt_authorization");
        const requestOptions = {
            method: 'GET',
            // headers: { 'Authorization': `Bearer ${token}` }
        };

        let url = 'http://localhost:8000/recipe'
        if (keyword) {
            url += '?search=' + keyword
        }

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setRecipeList(data);
            })
            .catch(error => {
                toast({
                    title: 'Alguma coisa deu errado!.',
                    description: "tente novamente, pode ser só um probleminha",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                })
            });
    }

    return (
        <section className={styles.cardSection}>
            <div>
                <div className={styles.cardGrid}>
                    {
                        recipeList && recipeList.map((recipe, index) => (
                            <Card key={index} name={recipe.title} imageSRC={'http://localhost:8000/recipes/' + recipe.img} rating={1.0} favorite={false} id={recipe.id} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
