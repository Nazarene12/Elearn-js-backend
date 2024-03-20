import { Routes, Route } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query';
import Home_A from './Components/Admin/Home_A';
import AuthLayout from './Components/AuthLayout'
import AuthLayout2 from './Components/AuthLayout2';
import AuthLayout3 from './Components/AuthLayout3';
import { store } from './Redux/ReduxStore'
import { Provider } from 'react-redux'
import Login from './Components/Authentication/Login'
import Register from './Components/Authentication/Register';
import Verify from './Components/Authentication/Verify';
import Forgot from './Components/Authentication/Forgot';
import ResetPassword from './Components/Authentication/RsetPassword';
import Profile from './Components/User/Profile';
import Dashboard from './Components/User/Dashboard';
import Home from './Components/User/Home';
import Category from './Components/Admin/Category';
const queryClient = new QueryClient()

function App() {

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path='/auth' element={<AuthLayout/>}>
              <Route path='login' element={<Login/>} />
              <Route path='register' element={<Register/>} />
              <Route path='forgot' element={<Forgot/>} />
              

            </Route>
            <Route path='/' element={<AuthLayout2/>}>
              <Route path='home' element={<Home/>} />
              <Route path='profile' element={<Profile/>} >
                <Route path='dash' element={<Dashboard/>} />
                {/* <Route path="main" element={<Main/>}/> */}
              </Route>

            </Route>
            <Route path="/admin" element={<AuthLayout3/>}>
                <Route path="home" element = {<Home_A/>} />
                <Route path="category" element = {<Category/>} />

            </Route>
            <Route path='verify_account' element={<Verify/>} />
            <Route path='reset_password' element={<ResetPassword/>} />
          </Routes>
        </QueryClientProvider>
      </Provider>
    </>
  )
}

export default App
