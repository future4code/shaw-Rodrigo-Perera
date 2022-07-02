import {app} from './app'
import { singup } from './endpoints/signUp'
import {login} from './endpoints/login'
import {getUserProfile} from './endpoints/getUserProfile'

app.get('/home/profile', getUserProfile)

app.post('/signup', singup)
app.post('/login', login)