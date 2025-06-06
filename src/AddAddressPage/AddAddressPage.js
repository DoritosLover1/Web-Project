import { Link } from "react-router-dom";
export default function AddAddressPage() {
return (
<div>
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
               <li className="breadcrumb-item active" aria-current="page">Delivery Address</li>
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
                     <li className="nav-item mb-2">
                        <Link className="nav-link d-flex align-items-center fw-bold" style={{ color: "gray" }} to="#">
                        <i className="bi bi-heart px-2"></i> Wishlist
                        </Link>
                     </li>
                     <li className="nav-item border-start border-3 border-danger bg-light">
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
            <div className="col-lg-9 col-md-8 col-sm-8">
               <div className="bg-white p-4">
                  <h4 className="mb-4 fw-bold fs-2">My Info</h4>
                  <h6 className="mb-4 fw-bold fs-4">Add Address</h6>
                  <form>
                     <div className="row mb-4 gap-0">
                        <div className="col-md-5 mx-2 mb-3">
                           <label className="form-label">First Name*</label>
                           <input type="text" className="form-control bg-light border-0" placeholder="First Name" />
                        </div>
                        <div className="col-md-5 mx-2 mb-3">
                           <label className="form-label">Last Name*</label>
                           <input type="text" className="form-control bg-light border-0" placeholder="Last Name" />
                        </div>
                        <div className="col-md-5 mx-2 mb-3">
                           <label className="form-label">Country / Region*</label>
                           <input type="text" className="form-control bg-light border-0" placeholder="Country / Region" />
                        </div>
                        <div className="col-md-5 mx-2 mb-3">
                           <label className="form-label">Company Name</label>
                           <input type="text" className="form-control bg-light border-0" placeholder="Company (optional)" />
                        </div>
                        <div className="col-md-5 mx-2 mb-3">
                           <label className="form-label">Street Address*</label>
                           <input type="text" className="form-control bg-light border-0" placeholder="House number and street name" />
                        </div>
                        <div className="col-md-5 mx-2 mb-3">
                           <label className="form-label">Apt, suite, unit</label>
                           <input type="text" className="form-control bg-light border-0" placeholder="apartment, suite, unit, etc. (optional)" />
                        </div>
                        <div className="col-md-5 mx-2 mb-3">
                           <label className="form-label">City*</label>
                           <input type="text" className="form-control bg-light border-0" placeholder="Town / City" />
                        </div>
                        <div className="col-md-5 mx-2 mb-3">
                           <label className="form-label">State*</label>
                           <select className="form-select bg-light border-0">
                              <option>State</option>
                           </select>
                        </div>
                        <div className="col-md-5 mx-2 mb-3">
                           <label className="form-label">Phone*</label>
                           <input type="text" className="form-control bg-light border-0" placeholder="Phone" />
                        </div>
                        <div className="col-md-5 mx-2 mb-3">
                           <label className="form-label">Postal Code*</label>
                           <input type="text" className="form-control bg-light border-0" placeholder="Postal Code" />
                        </div>
                        <div className="col-lg-11 col-md-11 col-sm-4 mx-2 mb-3">
                           <label className="form-label">Delivery Instruction</label>
                           <textarea className="form-control bg-light border-0" rows="3" placeholder="Delivery Instruction"></textarea>
                        </div>
                        <div className="col-12 mb-3 mx-2">
                           <div className="form-check">
                              <input type="checkbox" className="form-check-input" id="defaultShipping" />
                              <label className="form-check-label" htmlFor="defaultShipping">Set as default shipping address</label>
                           </div>
                           <div className="form-check">
                              <input type="checkbox" className="form-check-input" id="defaultBilling" />
                              <label className="form-check-label" htmlFor="defaultBilling">Set as default billing address</label>
                           </div>
                        </div>
                        <div className="d-flex gap-2 mx-2">
                           <button type="submit" className="btn btn-danger">Save</button>
                           <button type="button" className="btn btn-light">Cancel</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
);
}
