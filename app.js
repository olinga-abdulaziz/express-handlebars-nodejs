const express =require('express')
const { engine } =require('express-handlebars')

const app=express()



app.use(express.static(__dirname + './public'))


// handlebars
app.set('view engine', 'hbs')
app.engine('hbs',engine({
    extname: '.hbs',
    defaultLAyout: 'main',
    layoutsDir:__dirname + '/views/layouts',
    partialsDir:__dirname + '/views/partials'
}))
app.set('views','./views')


app.get('/',(req,res)=>{
    res.render('main')
})


app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.get('*',(req,res)=>{
    res.render('404')
})

app.listen(3000,()=>console.log('server started on port 3000'))
