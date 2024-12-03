// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import '../styles/Header.css';
// // import BeACustomerModal from './BeACustomerModal';  // Import the modal component

// // const Header = () => {
// //     const [showModal, setShowModal] = useState(false);

// //     const handleModalOpen = () => setShowModal(true);
// //     const handleModalClose = () => setShowModal(false);

// //     return (
// //         <header className="header bg-dark">
// //             <nav className="navbar navbar-expand-lg navbar-dark">
// //                 <div className="container">
// //                     <Link className="navbar-brand" to="/">Opti-Neural Technologies</Link>
// //                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
// //                         <span className="navbar-toggler-icon"></span>
// //                     </button>
// //                     <div className="collapse navbar-collapse" id="navbarNav">
// //                         <ul className="navbar-nav ms-auto">
// //                             <li className="nav-item">
// //                                 <Link className="nav-link" to="/">Home</Link>
// //                             </li>
// //                             <li className="nav-item">
// //                                 <Link className="nav-link" to="/about">About</Link>
// //                             </li>
// //                             <li className="nav-item">
// //                                 <Link className="nav-link" to="/contact">Contact</Link>
// //                             </li>
// //                             <li className="nav-item">
// //                                 <button className="btn btn-primary" onClick={handleModalOpen}>Be A Customer</button>
// //                             </li>
// //                         </ul>
// //                     </div>
// //                 </div>
// //             </nav>

// //             {/* Modal for BeACustomer */}
// //             {showModal && <BeACustomerModal onClose={handleModalClose} />}
// //         </header>
// //     );
// // };

// // export default Header;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/Header.css';

// const Header = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual authentication state
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         // Logic to clear user session or token
//         setIsLoggedIn(false);
//         navigate('/');
//     };

//     return (
//         <header className="header bg-dark">
//             <nav className="navbar navbar-expand-lg navbar-dark">
//                 <div className="container">
//                     <Link className="navbar-brand" to="/">Opti-Neural Technologies</Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav ms-auto">
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/">Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/about">About</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/contact">Contact</Link>
//                             </li>
//                             <li className="nav-item">
//                                 {isLoggedIn ? (
//                                     <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
//                                 ) : (
//                                     <Link className="btn btn-primary" to="/auth">Signup/Login</Link>
//                                 )}
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// };

// export default Header;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual authentication state
    const navigate = useNavigate();

    const handleLogout = () => {
        // Logic to clear user session or token
        setIsLoggedIn(false);
        navigate('/');
    };

    return (
        <header className="header bg-dark">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">Opti-Neural Technologies</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                {isLoggedIn ? (
                                    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                                ) : (
                                    <Link className="btn btn-primary" to="/auth">Signup/Login</Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
