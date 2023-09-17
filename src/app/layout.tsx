"use client"
import React, { useState } from 'react';
import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Providers } from "./providers";
import { UserContext } from '@/context/user.context';

// export const metadata: Metadata = {
//   title: 'Food',
//   description: 'O lugar perfeito para guardar e recordar sabores',

// }
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  interface User {
    jwt: any,
    email: string,
    password: string
  }

  const userDefault = { jwt: null, email: "", password: "" };
  const [user, setUser] = useState<User>(userDefault);

  return (
    <html lang="pt-br">
      <body>
        <Providers>
          <div className='grid-container'>
            <UserContext.Provider value={{ user, setUser }}>
              <Navbar />
              <main>
                {children}
              </main>
              <Footer />
            </UserContext.Provider>
          </div>
        </Providers>
      </body>
    </html>
  )
}


// Exemple using interface from typescript
// interface Children {
//   children: React.ReactNode
// }

// export default function RootLayout({ children }: Children) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   )
// }