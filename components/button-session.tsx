"use client"
import { getInitialsFromEmail } from '@/utils/GetInitialsFromEmail'
import { LogOut } from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'


// const ButtonSession = () => {
//     const { data: session } = useSession()
//     const email = session?.user?.email ?? '';
//     const initials = getInitialsFromEmail(email);


//     return (
//         <>
//             {session?.user &&
//                 <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                         <Avatar className='cursor-pointer'>
//                             <AvatarImage src={session.user.image || ''} alt="@shadcn" />
//                             {/* <AvatarFallback className='bg-zinc-900 text-white'>{getInitialsFromEmail("Herlambangk25@gmail.com")}</AvatarFallback> */}
//                             <AvatarFallback className='bg-zinc-900 text-white'>
//                                 {/* {getInitialsFromEmail("herlambang@gmail.com")} */}
//                                 {/* {initials} */}
//                             </AvatarFallback>
//                         </Avatar>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent>
//                         <DropdownMenuLabel>{session.user.email}</DropdownMenuLabel>
//                         <DropdownMenuSeparator />
//                         <DropdownMenuGroup>
//                             <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer">
//                                 <LogOut className="mr-4 h-4 w-4" />
//                                 <span>Logout</span>
//                             </DropdownMenuItem>
//                         </DropdownMenuGroup>
//                     </DropdownMenuContent>
//                 </DropdownMenu>}
//             {session?.user == null &&
//                 <Link href={"/login"}><Button>Login</Button></Link>
//             }
//         </>
//     )
// }

const ButtonSession = () => {
    const { data: session } = useSession()
    const email = session?.user?.email ?? '';
    const avatarImage = session?.user?.image || '';
    const initials = getInitialsFromEmail(email);

    return (
        <>
            {session?.user &&
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar className='cursor-pointer'>
                            {avatarImage ? (
                                <AvatarImage src={avatarImage} alt="@shadcn" />
                            ) : (
                                <AvatarFallback className='bg-zinc-900 text-white'>
                                    {initials}
                                </AvatarFallback>
                            )}
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>{session.user.email}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer">
                                <LogOut className="mr-4 h-4 w-4" />
                                <span>Logout</span>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>}
            {session?.user == null &&
                <Link href={"/login"}><Button>Login</Button></Link>
            }
        </>
    )
}

export default ButtonSession