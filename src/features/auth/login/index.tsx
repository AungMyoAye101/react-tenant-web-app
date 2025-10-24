import React from 'react'
import image from '@/assets/images/hero-illu.svg'
import logo from '@/assets/icons/logo-1.svg'
import LoginForm from '../components/loginForm'
const Login = () => {
    return (
        <section className='min-h-screen space-y-6'>
            <div className='flex items-center gap-4 py-4'>
                <img src={logo} alt="Next flow logo" className='size-12' />
                <h1 className='font-semibold text-lg'>Next Flow </h1>
            </div>

            <h1 className='text-2xl font-bold text-center'>
                Simplify Your Utility Management
            </h1>
            <div className='flex flex-col md:flex-row  items-center  gap-5'>
                <img src={image} alt="Hero illustration photo" className='min-w-[100px] max-w-xl h-auto ' />
                <LoginForm />
            </div>


        </section>
    )
}

export default Login