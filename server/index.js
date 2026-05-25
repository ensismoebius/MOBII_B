import cors from 'cors'
import 'dotenv/config'
import express from 'express'

async function loadUsers(request, response){
}
async function addUser(request, response){
}
async function editUser(request, response){
}
async function removeUser(request, response){  
}

const app = express()
app.use(express.json())
app.use(cors())

app.get('/api/users', loadUsers)
app.post('/api/users', addUser)
app.put('/api/users/:id', editUser)
app.delete('/api/users/:id', removeUser)

const port = process.env.PORT || 4000
app.listen(port, 
    () => {
        console.log(`Rodando no http://localhost:${port}`)
    }
)



