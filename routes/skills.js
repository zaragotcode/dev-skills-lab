import { Router } from 'express'

import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET skills index (GET localhost:3000/skills*/
router.get('/', skillsCtrl.index)

export {
  router
}
