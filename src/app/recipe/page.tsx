"use client"
import React, { useState } from 'react'
import styles from './page.module.css'
import { Editable, EditableInput, EditablePreview, Input, Image, Textarea, Text, Button, useToast } from '@chakra-ui/react'
import { EditableControls } from '@/components'
import Cookies from 'universal-cookie'
import { FiUpload } from 'react-icons/fi'

const Recipe = () => {

    interface Recipe {
        title: string,
        img: File,
        pathImg: string,
        description: string,
        ingredients: string,
        instructions: string
    }

    const template = { title: "", img: "", pathImg: "", description: "", ingredients: "", instructions: "" };

    const [recipe, setRecipe] = useState<Recipe>(template);
    const toast = useToast()

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setRecipe({ ...recipe, [name]: value });
    }

    function handlerImageUpload(event: React.ChangeEvent<HTMLInputElement>) {

        if (event.target.files !== null) {
            setRecipe({
                ...recipe,
                ['pathImg']: URL.createObjectURL(event.target.files[0]),
                ['img']: event.target.files[0]
            });
        }
    }

    function cleanForm() {
        setRecipe(template)
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', recipe.title);
        formData.append('img', recipe.img);
        formData.append('description', recipe.description);
        formData.append('ingredients', recipe.ingredients);
        formData.append('instructions', recipe.instructions);

        const cookies = new Cookies();
        const token = cookies.get("jwt_authorization");

        console.log(token);
        const requestOptions = {
            method: 'POST',
            body: formData,
            headers: { 'Authorization': `Bearer ${token}` }
        };

        fetch('http://localhost:8000/recipe', requestOptions)
            .then(response => response.json())
            .then(data => {
                toast({
                    title: 'Receita criada com Sucesso!.',
                    description: "Continue compartilhando a sua arte ;)",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })

                cleanForm()

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
        <form onSubmit={handleSubmit}>
            <main className={styles.main}>
                <div>
                    <Editable
                        textAlign='center'
                        defaultValue='Nome da Receita'
                        fontSize='2xl'
                        isPreviewFocusable={true}
                    >
                        <EditablePreview />
                        <Input
                            as={EditableInput}
                            name='title'
                            value={recipe.title}
                            onChange={handleInputChange}
                        />
                        <EditableControls />
                    </Editable>
                </div>
                <div className={styles.image}>
                    <div>
                        <Image src={recipe.pathImg} alt='plate' fallbackSrc='https://via.placeholder.com/450x350' height={350} width={450} />
                    </div>
                    <div>
                        <Input type='file' id="file" name="filepath" onChange={handlerImageUpload} hidden />
                        <label for={"file"} className={styles.inputFile}><FiUpload /> Selecionar Imagem</label>
                    </div>
                </div>
                <div>
                    <Text mb='8px' className={styles.title}>Descrição:</Text>
                    <Textarea
                        placeholder='Dê uma breve descrição da Receita'
                        resize={'none'}
                        name="description"
                        value={recipe.description}
                        onChange={handleInputChange}
                    /></div>
                <div>
                    <Text mb='8px' className={styles.title}>Ingredientes:</Text>
                    <Textarea
                        placeholder='Liste os Ingredientes da Receita'
                        resize={'none'}
                        name="ingredients"
                        value={recipe.ingredients}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <Text mb='8px' className={styles.title}>Instruções:</Text>
                    <Textarea
                        placeholder='Descreva o passo a passo para a criação da Receita'
                        resize={'none'}
                        name="instructions"
                        value={recipe.instructions}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <Button type="submit" className={styles.btnSave}>Salve</Button>
                    <Button onClick={cleanForm} className={styles.btnCancel}>Cancel</Button>
                </div>
            </main>
        </form>
    )
}


export default Recipe;