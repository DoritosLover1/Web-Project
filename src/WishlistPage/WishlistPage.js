import { Link } from "react-router-dom";

export default function WishlistPage() {
  const wishlistItems = [
    {
      id: 1,
      title: "Albüm1",
      quantity: 1,
      price: 29.0,
      image: ""
    },
    {
      id: 2,
      title: "Albüm2",
      quantity: 1,
      price: 78.0,
      image: ""
    },
    {
      id: 3,
      title: "Albüm3",
      quantity: 1,
      price: 80.0,
      image: ""
    },
    {
      id: 4,
      title: "Albüm4",
      quantity: 1,
      price: 93.0,
      image: ""
    },
  ];

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
            <li className="breadcrumb-item active text-dark" aria-current="page">Wishlist</li>
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

          <div className="col-lg-9 col-md-12 col-sm-12">
            <div className="bg-white p-4">
              <h4 className="mb-4 fw-bold fs-2">Wishlist</h4>
              {wishlistItems.map((item) => (
                <div key={item.id} className="d-flex justify-content-between align-items-center border-bottom py-3">
                  <div className="d-flex align-items-center justify-content-between gap-3">
                    <button className="btn btn-outline-secondary text-dark bg-transparent border-0 fs-4 fw-bold">X</button>
                    <img src={item.image} alt={item.title} style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                    <div>
                      <h6 className="fw-bold">{item.title}</h6>
                      <p className="mb-0 text-muted small">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-4">
                    <span className="fw-bold text-muted px-3">${item.price.toFixed(2)}</span>
                    <button className="btn btn-danger fw-bold" style={{fontSize: 13}}>Add to cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
