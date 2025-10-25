import logo from "@/assets/icons/logo-1.svg"
import { Link, useLocation } from "@tanstack/react-router"
import { Button } from "../ui/button"
import { navLinks } from "@/app/config/constant"
const Navbar = () => {
    const { pathname } = useLocation()
    console.log(pathname)
    if (pathname === '/auth/login' || pathname === "/auth/signup") {
        return;
    }
    return (
        <nav className="flex justify-between items-center gap-4 py-2 border-b">
            <Link to={'/'} >
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Next flow logo" className="size-10" />
                    <h4 className="font-semibold">Next Flow</h4>
                </div>
            </Link>
            <div>
                {
                    navLinks.map((nav, i) => (
                        <Button variant={'link'} key={i}>
                            <Link to={nav.href}>{nav.name}</Link>
                        </Button>
                    ))
                }

            </div>
            {/* Navigtion */}
            <div className="flex items-center gap-2">
                <Link to={'/auth/sigup'}>
                    <Button> Sigup</Button>
                </Link>
                <Link to={'/auth/login'}>
                    <Button >Login</Button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar