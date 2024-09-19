import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pagers/Home";
import UserProfile from "./pages/UserProfile";

function App() {
    return(
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/user/1">User 1 Profile</Link>
                        </li>

                        <li>
                            <Link to="/user/2">User 2 Profile</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* Route with parameter (user ID) */}
                    <Route path="/user/:id" element={<UserProfile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;