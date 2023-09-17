"use client";
import React, { useState, useContext } from 'react'
import Image from 'next/image'
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Tabs,
    Tab,
    TabPanels,
    TabPanel,
    TabList,
    InputLeftElement,
    InputGroup,
    Input,
    FormLabel,
    Icon,
    TabIndicator
} from '@chakra-ui/react'
import style from './login.module.css'
import Cookies from 'universal-cookie'
import jwt from 'jwt-decode'
import { UserContext } from '@/context/user.context';


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Login = (props: ModalProps) => {
    interface Login {
        email: string,
        password: string,
    }

    const template = { email: "", password: "" };
    const [login, setLogin] = useState<Login>(template);
    const user = {
        jwt: {},
        email: "",
        password: ""
    };

    const { setUser } = useContext(UserContext);


    function handleInputChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setLogin({ ...login, [name]: value });
    }

    function handleLoginSubmit(event: React.FormEvent<HTMLFormElement>) {
        const cookies = new Cookies();

        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(login)
        };

        fetch('http://localhost:8000/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const { accessToken, refreshToken } = data;

                const decoded = jwt(accessToken)
                console.log(decoded)
                const user = {
                    ...login,
                    jwt: decoded
                }

                setUser(user);

                cookies.set("jwt_authorization", accessToken, {
                    expires: new Date(decoded.exp * 1000),
                })

                props.onClose();
            })
    }

    function cleanForm() {
        setLogin(template)
    }

    return (
        <>
            <Modal closeOnOverlayClick={false} isOpen={props.isOpen} onClose={props.onClose} >
                <ModalOverlay />
                <ModalContent height={'670px'} >
                    <ModalHeader>
                        <div className={style.header}>
                            <div>
                                <Image
                                    src="/logo.png"
                                    alt="Cookbook Logo"
                                    width={130}
                                    height={130}
                                />
                            </div>
                            <h2>Olá, seja bem-vindo!</h2>
                            <p>Faça login ou crie uma conta para continuar.</p>
                        </div>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={12}>
                        <Tabs align='center' variant="unstyled">
                            <TabList>
                                <Tab>Login</Tab>
                                <Tab>Registre-se</Tab>
                            </TabList>
                            <TabIndicator
                                mt="-1.5px"
                                height="5px"
                                bg="#F48E28"
                                borderRadius="4px"
                            />
                            <TabPanels>
                                <TabPanel className={style.tabContent}>
                                    <form onSubmit={handleLoginSubmit}>
                                        <div className={style.contentForm}>
                                            <FormLabel color='#4A5568'>E-mail</FormLabel>
                                            <InputGroup className={style.Input}>
                                                <InputLeftElement pointerEvents='none'>
                                                    <Icon as={AiOutlineMail} color='#F5DDC4' />
                                                </InputLeftElement>
                                                <Input
                                                    type='email'
                                                    placeholder='Digite seu melhor e-mail'
                                                    name='email'
                                                    value={login.email}
                                                    onChange={handleInputChange} />
                                            </InputGroup>
                                            <FormLabel color='#4A5568'>Senha</FormLabel>
                                            <InputGroup className={style.Input}>
                                                <InputLeftElement pointerEvents='none'>
                                                    <Icon as={AiOutlineLock} color='#F5DDC4' />
                                                </InputLeftElement>
                                                <Input
                                                    type='password'
                                                    placeholder='Informe sua senha'
                                                    name='password'
                                                    value={login.password}
                                                    onChange={handleInputChange} />
                                            </InputGroup>
                                        </div>
                                        <Button
                                            width={'100%'}
                                            // isLoading={props.isSubmitting}
                                            type='submit'
                                            className={style.button}
                                        >
                                            Login
                                        </Button>
                                    </form>
                                </TabPanel>
                                <TabPanel className={style.tabContent}>
                                    <div className={style.contentForm}>
                                        <FormLabel color='#4A5568'>Nome</FormLabel>
                                        <InputGroup className={style.Input}>
                                            <InputLeftElement pointerEvents='none'>
                                                <Icon as={AiOutlineUser} color='#F5DDC4' />
                                            </InputLeftElement>
                                            <Input type='text' placeholder='Digite seu nome completo' />
                                        </InputGroup>
                                        <FormLabel color='#4A5568'>E-mail</FormLabel>
                                        <InputGroup className={style.Input}>
                                            <InputLeftElement pointerEvents='none'>
                                                <Icon as={AiOutlineMail} color='#F5DDC4' />
                                            </InputLeftElement>
                                            <Input type='email' placeholder='Digite seu melhor e-mail' />
                                        </InputGroup>
                                        <FormLabel color='#4A5568'>Senha</FormLabel>
                                        <InputGroup className={style.Input}>
                                            <InputLeftElement pointerEvents='none'>
                                                <Icon as={AiOutlineLock} color='#F5DDC4' />
                                            </InputLeftElement>
                                            <Input type='password' placeholder='Informe sua senha' />
                                        </InputGroup>
                                    </div>
                                    <Button
                                        width={'100%'}
                                        // isLoading={props.isSubmitting}
                                        type='submit'
                                        className={style.button}
                                    >
                                        Criar conta
                                    </Button>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Login;