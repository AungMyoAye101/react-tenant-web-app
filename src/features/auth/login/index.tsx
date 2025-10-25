
import image from '@/assets/images/hero-illu.svg'
import logo from '@/assets/icons/logo-1.svg'
import LoginForm from '../components/loginForm'
const Login = () => {
    return (
        <section className='min-h-screen space-y-5'>
            <div className='flex items-center gap-4 pt-4'>
                <img src={logo} alt="Next flow logo" className='size-12' />
                <h4 className='font-semibold'>Next Flow </h4>
            </div>

            <h2 className='font-bold text-center'>
                Simplify Your Utility Management
            </h2>
            <div className='flex flex-col md:flex-row  items-center  gap-4'>
                <img src={image} alt="Hero illustration photo" className='min-w-[100px] max-w-xl h-auto ' />
                <LoginForm />
            </div>


        </section>
    )
}

export default Login