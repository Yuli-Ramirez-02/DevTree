import { Router } from 'express'

const router = Router()

/**Authentication and registration */
router.post('/auth/register', (req, res) => {
    console.log(req.body)
    
})


export default router