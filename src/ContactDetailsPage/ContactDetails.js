import { Link, useNavigate } from "react-router-dom";
import React, {useState, useEffect} from "react";
import { useAuth } from "..//ScriptsFolder/AuthContext";

export default function ContactDetailsPage(){
   const navigate = useNavigate();
   const [user, setUser] = useState(null);
   const {userDetails} = useAuth();
   const [loading, setLoading] = useState(true);

   useEffect(() => {
   const userDataString = localStorage.getItem('userData');
  
   if (!userDataString) {
      setLoading(false);
      return;
   }

   const userData = JSON.parse(userDataString);
   // Örneğin bir state'e set etmek istiyorsan:
   setUser(userData);
   setLoading(false);

   console.log(user);
   },[userDetails]);

if (loading) {
   return (
      <div className="container py-4">
         <div className="text-center">
            <div className="spinner-border" role="status">
               <span className="visually-hidden">Loading...</span>
            </div>
            <p>Looking for user data...</p>
         </div>
      </div>
   );
}

if(!user){
   navigate("/404-error");
}

//Buraya belirli bilgiler gelecek artık yatmaya gidiyprum.
//YARIN YANİ 12.06.2025 EKLENECEK BURAYA BİLGİLER.

return(
<div>
   <div className="min-vh-100 px-5">
      <div className="container-fluid py-3 px-4 bg-white">
         <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 px-3">
               <li className="breadcrumb-item"><a href="#" className="text-muted text-decoration-none">Home</a></li>
               <li className="breadcrumb-item"><a href="#" className="text-muted text-decoration-none">My Account</a></li>
               <li className="breadcrumb-item active text-dark" aria-current="page">Personal Info</li>
            </ol>
         </nav>
      </div>
      <div className="d-flex py-4">
         <div className="row">
            <div className="col-md-3">
               <div className="bg-white p-4 px-5">
                  <div className="row">
                     <h5 className="text-dark fw-bold fs-2">
                        <div className="mb-3 border-start border-4 rounded-1 border-danger ps-2">
                           Hello {user.first_name}
                        </div>
                     </h5>
                  </div>
                  <p className="text-muted small mb-4">Welcome to your Account</p>
                  <ul className="nav flex-column">
                     <li className="nav-item mb-2">
                        <Link className="nav-link d-flex align-items-center fw-bold" style={{color: "gray"}} href="#">
                        <i class="bi bi-bag px-2"></i> My orders
                        </Link>
                     </li>
                     <li className="nav-item mb-2">
                        <Link className="nav-link d-flex align-items-center fw-bold" style={{color: "gray"}} href="#">
                        <i class="bi bi-heart px-2"></i> Wishlist
                        </Link>
                     </li>
                     <li className="nav-item border-start border-3 border-danger bg-light">
                        <Link className="nav-link d-flex align-items-center fw-bold" style={{color: "gray"}} href="#">
                        <i class="bi bi-person px-2"></i> My info
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link d-flex align-items-center fw-bold" style={{color: "gray"}} href="#">
                        <i class="bi bi-box-arrow-right px-2"></i> Sign out
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-8">
               <div className="bg-white p-4">
                  <h4 className="mb-4 fw-bold fs-2">My Info</h4>
                  <h6 className="mb-4 fw-bold fs-4">Contact Details</h6>
                  {user && [
                     { label: "Your Name", value: user.name },
                     { label: "Email Address", value: user.email },
                     { label: "Phone Number", value: user.phone_number },
                     { label: "Address", value: user.address }, // Added address here
                     { label: "Birth Date", value: new Date(user.birth_date).toLocaleDateString() }, // Formatted birth date
                     { label: "Gender", value: user.gender === "M" ? "Male" : user.gender === "F" ? "Female" : "N/A" }, // Formatted gender
                     { label: "Password", value: "••••••••" }, // Password typically isn't displayed directly
                     ].map((item, idx) => (
                     <div className="row border-bottom py-3 mb-3" key={idx}>
                        <div className="d-flex flex-column">
                           <div className="col-sm-3 col-lg-3 text-muted">{item.label}</div>
                           <div className="col-sm-6">{item.value}</div>
                           <div className="d-flex justify-content-end">
                              <button className="btn btn-link text-dark text-decoration-none p-0 fw-bold">Change</button>
                           </div>
                        </div>
                     </div>
                  ))}
                  <div className="d-flex justify-content-between align-items-center mt-5 mb-4">
                     <h6 className="mb-0 fs-3 fw-bold">Address</h6>
                     <button className="btn btn-link text-dark p-0 text-decoration-none fw-bold">Add New</button>
                  </div>
                  <div className="row">
                     {["Default billing address", "Default shipping address", "Set as default", "Set as default"].map((defaultLabel, i) => (
                     <div className="col-lg-4 col-md-8 mb-4 mx-2" key={i}>
                        <div className="card bg-light border-0 px-2">
                            <div className="card-body">
                                <h6 className="card-title mb-1">Jhanvi shah</h6>
                                <p className="text-muted small mb-1">8980252445</p>
                                <p className="text-muted small">
                                    1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Vijaynagar road
                                </p>
                                <div className="d-flex flex-wrap gap-2 mb-3">
                                    <button className="btn btn-secondary bg-transparent btn-sm text-muted">
                                    {i === 2 ? "Office" : i === 3 ? "Home2" : "Home"}
                                    </button>
                                    {i < 2 && (
                                    <button className="btn btn-secondary bg-transparent btn-sm text-muted">{defaultLabel}</button>
                                    )}
                                </div>
                                <div className="d-flex flex-wrap gap-3">
                                    <button className="btn btn-link text-dark p-0 text-decoration-none small fw-bold">Remove</button>
                                    <button className="btn btn-link text-dark p-0 text-decoration-none small fw-bold">Edit</button>
                                    {i >= 2 && (
                                    <button className="btn btn-link text-dark p-0 text-decoration-none small fw-bold">Set as default</button>
                                    )}
                                    </div>
                                </div>                    
                            </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
);
}