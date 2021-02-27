const db=require("../../data/db-config")

const getAll = () => {
  // DO YOUR MAGIC
  return Promise.resolve(db("cars"))
}

const getById = (id) => {
  // DO YOUR MAGIC\
  const car = db("cars").find(d => d.id === id)
  return Promise.resolve(car)
// }
}

 const  create = ({vin,make,model,mileage,title,transmission}) => {
  // DO YOUR MAGIC
  
  const newCar = { vin,make,model,mileage,title,transmission }
  db("cars").push(newCar)
  Promise.resolve(newCar)
}

module.exports = {
	getAll,
	getById,
create,

}



