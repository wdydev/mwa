- db.restaurants.find()
- db.restaurants.find({},{restaurant_id:1,name:1,district:1,cuisine:1})
- db.restaurants.find({},{restaurant_id:1,name:1,district:1,cuisine:1,_id:0})
- db.restaurants.find({},{restaurant_id:1,name:1,district:1,"address.zipcode":1,_id:0})
- db.restaurants.find({district:"Bronx"})
- db.restaurants.find({district:"Bronx"}).limit(5)
- db.restaurants.find({district:"Bronx"}).limit(5).skip(5)
- db.restaurants.find({"address.coord": {$lt : -95.754168}})
- db.restaurants.find({"address.coord": {$lt : -65.754168},cuisine:{$ne:"American "},"grades.score":{$gt:7}})
- db.restaurants.find({name:{$regex:/^Wil/}},{restaurant_id:1,name:1,cuisine:1,district:1})
- db.restaurants.find({name:{$regex:/ces$/}},{restaurant_id:1,name:1,cuisine:1,district:1})
- db.restaurants.find({name:{$regex:/Reg/}},{restaurant_id:1,name:1,cuisine:1,district:1})
- db.restaurants.find({district:"Bronx",cuisine:{$in:["American ","Chinese"]}})
- db.restaurants.find({district:{$in:["Staten Island", "Queens", "Bronx", "Brooklyn"]}},{restaurant_id:1,name:1,cuisine:1,district:1})
- db.restaurants.find({district:{$nin:["Staten Island", "Queens", "Bronx", "Brooklyn"]}},{restaurant_id:1,name:1,cuisine:1,district:1})
- db.restaurants.find({"grades.score":{$lte:10}},{restaurant_id:1,name:1,cuisine:1,district:1})
- db.restaurants.find({"address.coord.1":{$gt:42,$lte:52}},{restaurant_id:1,name:1,district:1,"address":1})
- db.restaurants.find().sort({name:1})
- db.restaurants.find().sort({name:-1})
- db.restaurants.find().sort({cuisine:1,district:-1})
- db.restaurants.find({"address.coord":{$type:"double"}})
- db.restaurants.find({name:{$regex:/^Mad/}},{name:1,cuisine:1,district:1,"address.coord":1})