// se requiere los archivos para inicializar el servidor y cors para manejar apis extrenas permite la comunicasion 
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

const TOKEN_KEY = "X4TvnErxRETbVcqaL15dqMI115eNIp5y";

const verifyToken = (req, res, next) => {

  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  console.log(authHeader);
  if(token == null)
    return res.status(401).send("token requerido");
  jwt.verify(token, TOKEN_KEY, (err, user)=> {
    if(err) return res.status(403).send("token invalido");
    console.log(user);
    req.user = user;
    next();
  });
}

app.post("/usuario/login", (req, res)=> {
  const usuario = req.body.usuario;
  const clave = req.body.clave;

  if(usuario == 'Admin' && clave == '123') {
    const datos = {
      id: "001",
      nombre: "maycol roa",
      email: " mroat0@mail.com"
    };
    const token = jwt.sign(
      {userId:datos.id, email:datos.email},
      TOKEN_KEY,
      {expiresIn: "2h"}
    );
    let nDatos = {...datos, token};
    res.status(200).json(nDatos);
  }else {
    res.status(400).send("credenciales incorrectas");
  }
});


app.get("/usuario/:id/profesores", verifyToken, (req, res)=>{
  const datos = [
    {id:1, profesor: "jorge rodrigues", materias: "logica, matematicas, estructura linux", fecha: "16/11/23"},
    {id:2, profesor: "mario trujillo", materias: "pensamiento logico, matematicas, estructura linux", fecha: "16/11/23"},
    {id:3, profesor: "fernando mora", materias: "pensamiento logico, algebra, estructura linux", fecha: "16/11/23"},
  ];
  res.json(datos);
});

app.listen(3001, ()=> {
  console.log("servidor iniciado en el puerto 3001");
})