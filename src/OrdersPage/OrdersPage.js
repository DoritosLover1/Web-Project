import { Link } from "react-router-dom";

export default function OrderPage() {
  const orders = [
    {
      orderNo: "#123456789",
      orderDate: "2 June 2025 2:40 PM",
      status: "Inprogress",
      deliveryDate: "8 June 2025",
      paymentMethod: "Cash on delivery",
      items: [
        {
          id: 1,
          title: "Black Printed T-shirt",
          quantity: 1,
          price: 25.0,
          image: "/path/to/image1.jpg"
        },
      ]
    },
    {
      orderNo: "#123456789",
      orderDate: "2 June 2025 2:40 PM",
      status: "Shipped",
      deliveryDate: "8 June 2025",
      paymentMethod: "Cash on delivery",
      items: [
        {
          id: 2,
          title: "Printed blue & white Cote",
          quantity: 1,
          price: 144.0,
          image: "/path/to/image2.jpg"
        },
      ]
    },
    {
      orderNo: "#123456789",
      orderDate: "2 June 2025 2:40 PM",
      status: "Inprogress",
      deliveryDate: "8 June 2025",
      paymentMethod: "Cash on delivery",
      items: [
        {
          id: 3,
          title: "Blue Shirt",
          quantity: 1,
          price: 93.0,
          image: "/path/to/image3.jpg"
        },
      ]
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
            <li className="breadcrumb-item active text-dark" aria-current="page">My Orders</li>
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
                <li className="nav-item mb-2 border-start border-3 border-danger bg-light">
                  <Link className="nav-link d-flex align-items-center fw-bold" style={{ color: "gray" }} to="#">
                    <i className="bi bi-bag px-2"></i> My orders
                  </Link>
                </li>
                <li className="nav-item mb-2">
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
              <h4 className="mb-4 fw-bold fs-2">My Orders</h4>
              {orders.map((order, index) => (
                <div key={index} className="mb-4 p-3 ">
                  <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded mb-4">
                    <div className="fw-bold">
                      <strong>Order no:</strong> {order.orderNo}<br />
                      <small className="text-muted">Order Date: {order.orderDate}</small><br />
                      <small className="text-muted">Estimated Delivery Date: {order.deliveryDate}</small>
                    </div>
                    <div className="text-end small">
                      <div className="text-muted"><strong>Order Status:</strong> {order.status}</div>
                      <div className="text-muted"><strong>Payment Method:</strong> {order.paymentMethod}</div>
                    </div>
                  </div>

                  {order.items.map((item) => (
                    <div key={item.id} className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center gap-3">
                        <img src={item.image} alt={item.title} style={{ width: "60px", height: "60px", objectFit: "cover" }} />
                        <div>
                          <h6 className="fw-bold mb-1">{item.title}</h6>                          
                          <p className="mb-0 text-muted small fw-bold">Qty: {item.quantity}</p>
                          <p className="mb-0 fw-bold text-muted small">Total: ${item.price.toFixed(2)}</p>
                        </div>
                      </div>
                      <button className="btn btn-danger fw-bold p-2" style={{fontSize: 13, width:100}}>View Detail</button>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
