import React from 'react'
import { Button, Typography } from "@material-tailwind/react";
import { MyNavbar } from '../Components/NavBar';
import { BookCard } from '../Components/BookCards';

const Home = () => {
  return (
    <div>
      <MyNavbar />
      <div className='w-full py-5'>
        <Typography variant='h2' className='text-center'>Current Status</Typography>
      </div>
      <div className="flex flex-row flex-wrap pl-24 pr-24 ">
      <BookCard />

      </div>
    </div>
  )
}

export default Home
