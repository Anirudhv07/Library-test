import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { useEffect,useState } from "react";
import { totalBooksApi } from '../api/apiConnections/apiConnection'
import { MyNavbar } from '../Components/NavBar';

const Allbooks = () => {
    const[books,setBooks]=useState([])
    useEffect(()=>{
        getTotalBooks()
    },[])

    const getTotalBooks=async()=>{
        const response=await totalBooksApi()
        console.log(response);
        setBooks(response)
    }
  return (
    <div>
        <MyNavbar />
        <div className='w-full py-5'>
        <Typography variant='h2' className='text-center'>Total Books</Typography>
      </div>
        <div className="flex flex-row flex-wrap pl-24 pr-24 ">
      <div className="flex  flex-wrap gap-3">
            {books.map((eachBook)=>{
                return (
      <Card key={eachBook.BookID} className="mt-6 w-80">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
           Book ID : {eachBook.BookID}
          </Typography>
          <Typography className="flex flex-col">
            <div>
<Typography>
     Book Name : 

            {eachBook.BookName}
</Typography>
            </div>
            <div>
            <Typography>
Copies : 
            {eachBook.NumberOfCopies}
</Typography>

            </div>

          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
            {eachBook.NumberOfCopies>0? <Button>Check Out</Button>: <Button>Return</Button>}
        </CardFooter>
      </Card>

                )
            })}

        </div>

        </div>
    </div>
  )
}

export default Allbooks
