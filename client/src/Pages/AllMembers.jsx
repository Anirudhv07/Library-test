import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { useEffect,useState } from "react";
import { totalMembersApi } from '../api/apiConnections/apiConnection';
import { MyNavbar } from '../Components/NavBar';




const AllMembers = () => {

    const[members,setMembers]=useState([])
    useEffect(()=>{
        getTotalMembers()
    },[])

    const getTotalMembers=async()=>{
        const response=await totalMembersApi()
        console.log(response);
        setMembers(response)
    }
  return (
    <div>

<MyNavbar />
<div className='w-full py-5'>
        <Typography variant='h2' className='text-center'>
            Total Members
        </Typography>
      </div>
<div className="flex flex-row flex-wrap pl-24 pr-24 ">
      <div className="flex  flex-wrap gap-3">
            {members.map((eachBook)=>{
                return (
      <Card key={eachBook.book_id} className="mt-6 w-80">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
           MEMBER ID : {eachBook.MemberID}
          </Typography>
          <Typography className="flex flex-col">
            <div>
<Typography>
     Member Name : 

            {eachBook.MemberName}
</Typography>
            </div>
            <div>
            {/* <Typography>
DATE : 
            {eachBook.date}
</Typography> */}

            </div>

          </Typography>
        </CardBody>
        {/* <CardFooter className="pt-0">
            {eachBook.eventtype=='checkout'? <Button>Check Out</Button>: <Button>Return</Button>}
        </CardFooter> */}
      </Card>

                )
            })}

        </div>

</div>
    </div>
  )
}

export default AllMembers
