import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="flex gap-x-5">
                <div>
                    <Link to="/">Home</Link>
                </div>

                <div className="menu">
                    <Link to="/form">Blogs</Link>
                </div>
            </div>
        </>
    );
}
export default Navbar;