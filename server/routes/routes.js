import express from 'express'
import controller from '../Controller/controller.js'

const router=express.Router()

    router.get('/api/getAllBooks',controller.getAllBooks)

    router.get('/api/getTotalBooks',controller.getTotalBooks)

    router.get('/api/getTotalMembers',controller.getAllMembers)

    router.put('/api/changeEvent',controller.checkout_return_Controller)




export default router