import Image from "next/image";

const NavBar = () => {
    return (
    <nav className="navbar sticky top-0 navbar-dark bg-dark-900/80 backdrop-blur-xl" id="navbar">
        <div className="container">
            <a className="navbar-brand filter text-white" href="/">
                <Image className=" h-12" width={128} height={90} alt="company logo" src="https://d1pnnwteuly8z3.cloudfront.net/images/fe82a853-a848-40f3-93c4-0cc36247b471/9e22f48f-b864-4da4-807b-649f53ff146f.svg" />
            </a>
            <button className="navbar-btn" data-toggle="collapse" data-target="#navbar-row" aria-expanded="false" aria-label="Toggle navigation">
                <span className="sr-only">Open navbar menu</span>
                <span className="block h-1 rounded-full bg-white"></span>
                <span className="block h-1 mt-1 rounded-full bg-white"></span>
                <span className="block h-1 mt-1 rounded-full bg-white"></span>
            </button>
            <div className="navbar-row" id="navbar-row">
                <ul className="navbar-col"></ul>
                <ul className="navbar-col"></ul>
                {/* <ul className="navbar-col">
                    <li>
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#">Testimonials</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#">Benefits</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                </ul> */}
            </div>
        </div>
    </nav>
    )
}

export default NavBar