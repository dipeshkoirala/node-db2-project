// DO YOUR MAGIC
const express=require("express")

 const db=require('./cars-model')

const router=express.Router()






router.route('/')
.get( async (req,res,next)=>{
  try{  
res.json(await db.getAll())

  }catch(err){
      next(err)
  }
})

.post (async (req, res, next) => {
	try {
		const [id] = await db.create(req.body)
		const newCar = await db("cars").where({ id }).first()

		res.status(201).json(newCar)
	} catch(err) {
		next(err)
	}
})



router.route('/:id', async (req, res, next) => {
	try {
		const { id } = req.params
		const car = await db("cars").where({ id }).first()
		
		res.json(car)
	} catch(err) {
		next(err)
	}
})


module.exports=router