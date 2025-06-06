import { Link } from "react-router-dom";
import picture from "../assets/backgrounds/background-emptywishlist.png";
import { FaHeart } from 'react-icons/fa';
export default function EmptyWishlistPage(){
return (
<div className="min-vh-100 px-5">
   <div className="container-fluid py-3 px-4 bg-white">
      <nav aria-label="breadcrumb">
         <ol className="breadcrumb mb-0 px-3">
            <li className="breadcrumb-item">
               <a href="#" className="text-muted text-decoration-none">Home</a>
            </li>
            <li className="breadcrumb-item">
               <a href="#" className="text-muted text-decoration-none">My Account</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Wishlist</li>
         </ol>
      </nav>
   </div>
   <div className="d-flex py-4">
      <div className="row w-100">
         <div className="col-md-3">
            <div className="bg-white p-4 px-5">
               <div className="row">
                  <h5 className="text-dark fw-bold fs-2">
                     <div className="mb-3 border-start border-4 rounded-1 border-danger ps-2">
                        Hello Jhanvi
                     </div>
                  </h5>
               </div>
               <p className="text-muted small mb-4">Welcome to your Account</p>
               <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                     <Link className="nav-link d-flex align-items-center fw-bold" style={{ color: "gray" }} to="#">
                     <i className="bi bi-bag px-2"></i> My orders
                     </Link>
                  </li>
                  <li className="nav-item border-start border-3 border-danger bg-light">
                     <Link className="nav-link d-flex align-items-center fw-bold" style={{ color: "gray" }} to="#">
                     <i className="bi bi-heart px-2"></i> Wishlist
                     </Link>
                  </li>
                  <li className="nav-item mb-2">
                     <Link className="nav-link d-flex align-items-center fw-bold" style={{ color: "gray" }} to="#">
                     <i className="bi bi-person px-2"></i> My info
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link d-flex align-items-center fw-bold" style={{ color: "gray" }} to="#">
                     <i className="bi bi-box-arrow-right px-2"></i> Sign out
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
         <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="bg-white p-4">
               <div className="d-flex justify-content-center align-items-center w-100">
                  <div className="text-center p-4 border rounded bg-white shadow-sm">
                     <div className="mb-4">
                        <div className="d-inline-block bg-success bg-opacity-10 rounded-circle p-5">
                           <FaHeart className="text-success fs-1" />
                        </div>
                     </div>
                     <h4 className="mb-2 fs-3 fw-bold">Your wishlist is empty.</h4>
                     <p className="text-muted mb-4 small" style={{ maxWidth: '500px', margin: "auto" }}>
                     You don't have any products in the wishlist yet. You will find a lot of interesting products on our Shop page.
                     </p>
                     <button className="btn btn-danger fw-bold medium">Continue Shopping</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
);
}