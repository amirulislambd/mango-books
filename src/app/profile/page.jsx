import { auth } from '@/lib/auth';
import { Avatar } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const ProfilePage = async() => {

    const session = await auth.api.getSession({
        headers: await headers(),
      });
      const user = session?.user;
      console.log(user)

    return (
        <div className='flex flex-col items-center justify-center'>
            <div >
            <Avatar className="w-16 h-16 md:w-30 md:h-30 lg:w-40 lg:h-40">
                          <Avatar.Image alt="Online User" src={user?.image} />
                          <Avatar.Fallback>
                            {user?.name.charAt(0).toUpperCase()}
                          </Avatar.Fallback>
                        </Avatar>
            </div>
            <h1>
               {user?.name}
            </h1>
            <p>{user?.email}</p>
            <p>Create Account: {new Date(user?.createdAt).toLocaleDateString('en-GB',{
                month:'long',
                year:'numeric',
                day:'numeric',
                hour:'numeric',
                minute:'numeric',
                second:'numeric'
            })}</p>
        </div>
    );
};

export default ProfilePage;