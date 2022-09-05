import { Router } from 'express';
const route = Router()

route.get('/', (req, res) => res.render("index",{title: 'Mi primera web con node'}))

route.get('/sobre_Mi', (req, res) => res.render("sobreMi",{title:'Informacion acerca de mi'}))

route.get('/contacto', (req, res) => res.render("contacto",{title:'COntactame'}))

route.get('/habilidades', (req, res) => res.render("habilidades",{title:'Habilidades'}))
route.get('/proyectos', (req, res) => res.render("proyectos",{title:'Proyectos'}))


export default route
