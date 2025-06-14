import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useAuth } from "..//ScriptsFolder/AuthContext";
import Axios from "axios";

export default function ContactDetailsPage() {
  
async function updateUserField(fieldKey, newValue, token){
  console.log("Updating field:", fieldKey, "with value:", newValue);
  console.log("Token:", token);
  try {
    const response = await Axios.post('http://localhost:5000/change-user-information', 
      {field: fieldKey, value: newValue},
      {headers: {Authorization: `Bearer ${token}`}}
    );
    console.log("Update response:", response.data);
    return response.data;
  } catch(error) {
    console.error('Update failed:', error.response?.data || error.message);
    throw error;
  }
}

async function getUserAddresses(token) {
  console.log("Fetching user addresses...");
  try {
    const response = await Axios.get('http://localhost:5000/get-user-addresses', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    console.log("Addresses fetched:", response.data);
    return response.data;
  } catch(error) {
    console.error('Failed to fetch addresses:', error.response?.data || error.message);
    throw error;
  }
}

async function deleteUserAddress(addressId, token) {
  console.log("Deleting address ID:", addressId);
  try {
    const response = await Axios.delete(`http://localhost:5000/delete-user-address/${addressId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    console.log("Address deleted:", response.data);
    return response.data;
  } catch(error) {
    console.error('Failed to delete address:', error.response?.data || error.message);
    throw error;
  }
}

async function setHomeAddress(addressId, token) {
  console.log("Setting default address ID:", addressId);
  try {
    const response = await Axios.put(`http://localhost:5000/set-home-address/${addressId}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    console.log("Default address set:", response.data);
    return response.data;
  } catch(error) {
    console.error('Failed to set default address:', error.response?.data || error.message);
    throw error;
  }
}

  const handleAddAddressPage = () => {
    navigate("/account/add-address");
  }

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [addressLoading, setAddressLoading] = useState(false);
  const { userDetails } = useAuth();
  const [loading, setLoading] = useState(true);

  const [editIndex, setEditIndex] = useState(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const userDataString = localStorage.getItem("userData");

    if (!userDataString) {
      setLoading(false);
      return;
    }

    const userData = JSON.parse(userDataString);

    setUser(userData);
    setLoading(false);

    // Fetch addresses
    fetchAddresses();

  }, [userDetails]);

  const fetchAddresses = async () => {
    setAddressLoading(true);
    try {
      const token = localStorage.getItem("authToken") || userDetails?.token;
      if (token) {
        const addressData = await getUserAddresses(token);
        setAddresses(addressData.addresses || []);
      }
    } catch (error) {
      console.error('Error fetching addresses:', error);
    } finally {
      setAddressLoading(false);
    }
  };

  const handleDeleteAddress = async (addressId) => {
    if (!window.confirm('Are you sure you want to delete this address?')) {
      return;
    }

    try {
      const token = localStorage.getItem("authToken") || userDetails?.token;
      await deleteUserAddress(addressId, token);
      fetchAddresses();
    } catch (error) {
      alert('Failed to delete address: ' + (error.response?.data?.message || error.message));
    }
  };

  const handleSetHome = async (addressId) => {
    try {
      const token = localStorage.getItem("authToken") || userDetails?.token;
      await setHomeAddress(addressId, token);
      fetchAddresses();
    } catch (error) {
      alert('Failed to set default address: ' + (error.response?.data?.message || error.message));
    }
  };

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

  if (!user) {
    navigate("/404-error");
  }

  const fields = [
    { key: "first_name", label: "First Name", value: user.first_name },
    { key: "last_name", label: "Last Name", value: user.last_name },
    { key: "e_mail", label: "Email Address", value: user.email },
    { key: "phone_number", label: "Phone Number", value: user.phone_number },
    {
      key: "birth_date",
      label: "Birth Date",
      value: new Date(user.birth_date).toLocaleDateString(),
    },
    {
      key: "gender",
      label: "Gender",
      value: user.gender === "M" ? "Male" : user.gender === "F" ? "Female" : "N/A",
    },
    { key: "password", label: "Password", value: "••••••••" },
  ];

  return (
    <div className="container-fluid min-vh-100 px-3 px-md-5">
      <div className="bg-white py-3 px-3 px-md-4 mb-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="#" className="text-muted text-decoration-none">
                Home
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className="text-muted text-decoration-none">
                My Account
              </a>
            </li>
            <li className="breadcrumb-item active text-dark" aria-current="page">
              Personal Info
            </li>
          </ol>
        </nav>
      </div>

      <div className="row">
        <div className="col-12 col-lg-4 mb-4">
          <div className="bg-white p-4 h-100">
            <div className="mb-4">
              <h5 className="text-dark fw-bold fs-4">
                <div className="border-start border-4 rounded-1 border-danger ps-2">
                  Hello {user.first_name}
                </div>
              </h5>
              <p className="text-muted small mb-0">Welcome to your Account</p>
            </div>

            <ul className="nav flex-column w-25">
              <li className="nav-item mb-2">
                <Link className="nav-link d-flex align-items-center fw-bold text-muted" href="#">
                  <i className="bi bi-bag px-2"></i> My orders
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link d-flex align-items-center fw-bold text-muted" href="#">
                  <i className="bi bi-heart px-2"></i> Wishlist
                </Link>
              </li>
              <li className="nav-item border-start border-3 border-danger bg-light">
                <Link className="nav-link d-flex align-items-center fw-bold text-muted" href="#">
                  <i className="bi bi-person px-2"></i> My info
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center fw-bold text-muted" href="#">
                  <i className="bi bi-box-arrow-right px-2"></i> Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-lg-8">
          <div className="bg-white p-4">
            <h4 className="mb-4 fw-bold fs-4">My Info</h4>
            <h6 className="mb-4 fw-bold fs-5">Contact Details</h6>
            {user &&
              fields.map((item, idx) => {
                const isEditing = editIndex === idx;

                return (
                  <div className="row border-bottom py-3 mb-3" key={idx}>
                    <div className="col-12 d-flex justify-content-between">
                      <div>
                        <div className="text-muted small">{item.label}</div>
                        {isEditing ? (
                          <>
                            <input
                              type={
                                item.label === "Password"
                                  ? "password"
                                  : item.label === "Birth Date"
                                  ? "date"
                                  : "text"
                              }
                              className="form-control mb-2"
                              value={inputValue}
                              onChange={(e) => setInputValue(e.target.value)}
                            />
                            <button
                              className="btn btn-danger btn-sm fw-bold mx-1"
                              onClick={async () => {
                                let newValue = inputValue;

                                if (item.label === "Birth Date") {
                                  const parsedDate = new Date(newValue);
                                  if (!isNaN(parsedDate)) newValue = parsedDate.toISOString();
                                }

                                if (item.label === "Gender") {
                                  if (newValue.toLowerCase() === "male") newValue = "M";
                                  else if (newValue.toLowerCase() === "female") newValue = "F";
                                  else newValue = "";
                                }

                                if (item.label === "Password") {
                                  alert("Password change not implemented.");
                                  setEditIndex(null);
                                  return;
                                }

                                try {
                                  const token = localStorage.getItem("authToken") || userDetails?.token;

                                  if (!token) {
                                    alert("User not authenticated!");
                                    return;
                                  }

                                  await updateUserField(item.key, newValue, token);

                                  setUser((prev) => ({ ...prev, [item.key]: newValue }));

                                  setEditIndex(null);
                                } catch (error) {
                                  alert(
                                    "Update failed: " + (error.response?.data?.message || error.message)
                                  );
                                }
                              }}
                            >
                              Submit
                            </button>
                            <button
                              className="btn btn-dark btn-sm fw-bold"
                              onClick={() => setEditIndex(null)}
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <div>{item.value}</div>
                        )}
                      </div>

                      {!isEditing && (
                        <button
                          className="btn btn-link text-dark text-decoration-none p-0 fw-bold"
                          onClick={() => {
                            setEditIndex(idx);
                            setInputValue(
                              item.label === "Birth Date"
                                ? new Date(user.birth_date).toISOString().substring(0, 10)
                                : item.value
                            );
                          }}
                          id={item.label}
                        >
                          Change
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}

            <div className="d-flex justify-content-between align-items-center mt-5 mb-4">
              <h6 className="mb-0 fs-5 fw-bold">Address</h6>
              <button className="btn btn-link text-dark p-0 text-decoration-none fw-bold" onClick={handleAddAddressPage}>Add New</button>
            </div>

            {addressLoading ? (
              <div className="text-center py-4">
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading addresses...</span>
                </div>
              </div>
            ) : (
              <div className="row">
                {addresses.length === 0 ? (
                  <div className="col-12">
                    <div className="text-center py-4 text-muted">
                      <p>No addresses found. Add your first address!</p>
                    </div>
                  </div>
                ) : (
                  addresses.map((address, i) => (
                    <div className="col-12 col-md-6 col-lg-6 mb-4" key={address.id}>
                      <div className="card bg-light border-0 h-100 mx-3 ms-1">
                        <div className="card-body">
                          <h6 className="card-title mb-1">
                            {address.first_name} {address.last_name}
                          </h6>
                          <p className="text-muted small mb-1">{address.phone}</p>
                          <p className="text-muted small">
                            {address.street_address}
                            {address.company_name && <>, {address.company_name}</>}
                            <br />
                            {address.city}, {address.state} {address.postal_code}
                            <br />
                            {address.country}
                            {address.delivery_instruction && (
                              <>
                                <br />
                                <small>Note: {address.delivery_instruction}</small>
                              </>
                            )}
                          </p>
                          <div className="d-flex flex-wrap gap-2 mb-3">
                            <button className="btn btn-secondary bg-transparent btn-sm text-muted">
                              {address.type || 'Home'}
                            </button>
                            {address.is_default && (
                              <button className="btn btn-success bg-transparent btn-sm text-success border-success">
                                Default
                              </button>
                            )}
                          </div>
                          <div className="d-flex flex-wrap gap-3">
                            <button 
                              className="btn btn-link text-dark p-0 text-decoration-none small fw-bold"
                              onClick={() => handleDeleteAddress(address.address_id)}
                            >
                              Remove
                            </button>
                            {!address.is_default && (
                              <button 
                                className="btn btn-link text-dark p-0 text-decoration-none small fw-bold"
                                onClick={() => handleSetHome(address.address_id)}
                              >
                                Set as Home
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}