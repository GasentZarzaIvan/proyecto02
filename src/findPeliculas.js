// Muestra todas las peliculas
db.peliculas.find({})

// Muestra las peliculas de antes del 2000
db.peliculas.find({estreno: {$lt: 2000}})

// Muestra las peliculas dirigidas por Stanley Kubrick o Ridley Scott
db.peliculas.find({ director: {$in: ["Stanley Kubrick", "Ridley Scott"]}})

// Muestra las peliculas donde aparece Tobey Maguire
db.peliculas.find({actores: "Tobey Maguire"})

// Muestra las peliculas donde actuan Harrison Ford y Willeam Dafoe 
db.peliculas.find({actores: "Harrison Ford", actores: "Willeam Dafoe"})