import React from 'react';

interface UserContextValue {
    user: {
        jwt: any,
        email: string,
        password: string
    },
    setUser: (newState: any) => void
}

const UserContext = React.createContext<UserContextValue>({
    user: {
        jwt: "",
        email: "",
        password: ""
    },
    setUser: () => { }
});


export { UserContext };