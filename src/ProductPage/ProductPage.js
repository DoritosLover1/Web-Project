import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from "axios";
import './ProductPage.css';

export default function ProductPage() {
const [activeTab, setActiveTab] = useState('details');
const {id} = useParams();
const [products, setProducts] = useState(null);
const [comments, setComments] = useState([]);
const [relatedProducts, setRelatedProducts] = useState([]); // Dinamik hale getirdik
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
const fetchProducts = async () => {
try{
console.log('Fetching product with ID:', id);
const response = await Axios.get(`http://localhost:5000/products/${id}`);
console.log('Product response:', response.data);
setProducts(response.data);
}catch (error){
console.error('Product fetch error:', error);
setError('Error occurred while loading product');
} finally {
setLoading(false);
}
}
if(id){
fetchProducts();
}
}, [id]);

useEffect(() =>{
const fetchComments = async () => {
try{
console.log('Fetching comments for product ID:', id);
const response = await Axios.get(`http://localhost:5000/products-comments/${id}`);
console.log('Comments response:', response.data);
setComments(response.data);
}catch (error){
console.error('Error loading comments:', error);
}
}
if(id){
fetchComments();
}
}, [id]);

useEffect(() => {
const fetchRelatedProducts = async () => {
try {
console.log('Fetching related products...');
const response = await Axios.get('http://localhost:5000/products');
console.log('All products response:', response.data);

const filtered = response.data
  .filter(product => product.id != id)
  .slice(0, 4); 
  
setRelatedProducts(filtered);
} catch (error) {
console.error('Error loading related products:', error);
setRelatedProducts([]);
}
}

if (id) {
fetchRelatedProducts();
}
}, [id]);

const [selectedImage, setSelectedImage] = useState(0);
const [quantity, setQuantity] = useState(1);
const [selectedColor, setSelectedColor] = useState('');
const [selectedSize, setSelectedSize] = useState('');
const [liked, setLiked] = useState(false)

const renderStars = (rating) => {
const numRating = Number(rating) || 0;
return [...Array(5)].map((_, i) => (
<span key={i} className={`text-${i < numRating ? 'warning' : 'muted'}`}>★</span>
));
};

if (loading) {
return (
<div className="container py-4">
    <div className="text-center">
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <p>Loading product for ID: {id}...</p>
    </div>
</div>
);
}

if (error) {
return (
<div className="container py-4">
    <div className="alert alert-danger" role="alert">
        {error}
        <br />
        <small>Product ID: {id}</small>
    </div>
</div>
);
}

if (!products) {
return (
<div className="container py-4">
    <div className="alert alert-warning" role="alert">
        Product not found. (ID: {id})
    </div>
</div>
);
}

console.log('Rendering product:', products);

return (
<div className="container-fluid bg-white min-vh-100">
    <div className="container py-4">
        <div className="row bg-white rounded p-3 p-md-4 mb-4">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                <div className="mb-3">
                    <img 
                    src={products.image || '/api/placeholder/400/400'} 
                    alt={products.name || "Product"} 
                    className="img-fluid rounded w-75 mx-5"
                    style={{ height: 'auto', width: "auto", objectFit: "fill", backgroundColor: '#ddd' }}
                    onError={(e) => {
                    e.target.src = '/api/placeholder/400/400';
                    }}
                    />
                </div>
            </div>
            <div className="col-12 col-lg-6">
                <h2 className="fw-bold mb-2 h4 h-lg-3 fs-1 fst-italic">
                    {products.name || "Product Name"}
                </h2>
                <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center mb-3">
                    <div>
                        <span className="h4 h-lg-3 text-danger fw-bold fs-2">
                        ${products.price || "0.00"}
                        </span>
                    </div>
                </div>
                <div className="me-3 fs-3">
                    {renderStars(products.rating || 0)}
                    <span className="text-muted ms-2 small">
                    ({products.review} reviews)
                    </span>
                </div>
                <div className="mb-3">
                    <p className="mb-1 fs-5">
                        <strong>Description:</strong> 
                        <span className="text-muted">{products.description || "Description not found"}</span>
                    </p>
                    <p className="mb-1 fs-5">
                        <strong>Category:</strong> 
                        <span className="text-muted">{products.category || "Category not specified"}</span>
                    </p>
                    <p className="mb-1 fs-5">
                        <strong>Stock:</strong> 
                        <span className="text-muted">{products.stock || "No stock information"}</span>
                    </p>
                    <p className="mb-1 fs-5">
                        <strong>Likes:</strong> 
                        <span className="text-muted">{products.likes || 0}</span>
                    </p>
                    <p className="mb-1 fs-5">
                        <strong>Views:</strong> 
                        <span className="text-muted">{products.views || 0}</span>
                    </p>
                </div>
                <div className="mb-2">
                    <div className="row">
                        <div className="col-12 col-sm-12 mx-1">
                            <div className='d-flex justify-content-between mx-3'>
                                <input style={{width: 100, height: 40}}
                                type="number" 
                                className="form-control" 
                                value={quantity}
                                min="1"
                                max={products.stock || 999}
                                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                />
                                <button 
                                    className='btn btn-outline-none bg-transparent border-0'
                                    onClick={() => setLiked(!liked)}
                                >
                                <i className={`bi ${liked ? 'bi-heart-fill' : 'bi-heart'}`} 
                                style={{ fontSize: '1.5rem', color: liked ? 'red' : 'gray' }}></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column gap-2 d-sm-flex mb-3">
                    <button className="btn btn-danger btn-lg flex-sm-fill fw-bold">Add to Cart</button>
                    <button className="btn btn-outline-dark btn-lg flex-sm-fill fw-bold" style={{backgroundColor: "#3C4242", color: 'white'}}>Buy</button>
                </div>
                <div className="border-top pt-3">
                    <p className="small text-muted mb-2">
                        {products.description || "Detailed description not found."}
                    </p>
                    <i className="bi bi-facebook mx-2" style={{fontSize: "1.5rem"}}></i>
                    <i className="bi bi-twitter mx-2" style={{fontSize: "1.5rem"}}></i>
                    <i className="bi bi-instagram mx-2" style={{fontSize: "1.5rem"}}></i>
                </div>
            </div>
        </div>
        <div className='p-3 p-md-4 mb-4'>
            <ul className="nav nav-tabs border-0 mb-4 flex-column flex-sm-row">
                <li className="nav-item mb-2 mb-sm-0">
                    <button 
                    className={`btn px-3 px-md-4 w-100 fw-bold ${
                    activeTab === 'details' 
                    ? 'text-white bg-danger' 
                    : 'text-dark bg-light border'
                    }`}
                    onClick={() => setActiveTab('details')}
                    style={{
                    color: activeTab === 'details' ? 'white !important' : 'inherit'
                    }}
                    >
                    Product Details
                    </button>
                </li>
                <li className="nav-item mb-2 mb-sm-0">
                    <button 
                    className={`btn px-3 px-md-4 w-100 fw-bold ${
                    activeTab === 'features' 
                    ? 'text-white bg-danger' 
                    : 'text-dark bg-light border'
                    }`}
                    onClick={() => setActiveTab('features')}
                    style={{
                    color: activeTab === 'features' ? 'white !important' : 'inherit'
                    }}
                    >
                    Features
                    </button>
                </li>
            </ul>
            <div className="rounded shadow-sm p-3 p-md-4 mb-4">
                <div className="tab-content">
                    {activeTab === 'details' && (
                    <div>
                        <h5 className="fw-bold mb-3">Product Details</h5>
                        <p className="text-muted">
                            {products.description || "Detailed product description not found."}
                        </p>
                        <ul className="list-unstyled">
                            <li><strong>Category:</strong> {products.category || "Not specified"}</li>
                            <li><strong>Stock:</strong> {products.stock || "No stock information"}</li>
                            <li><strong>Brand:</strong> {products.brand || "Not specified"}</li>
                            <li><strong>SKU:</strong> {products.sku || "Not available"}</li>
                        </ul>
                    </div>
                    )}
                    {activeTab === 'features' && (
                    <div>
                        <h5 className="fw-bold mb-3">Product Features</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item border-0 px-0">
                                <i className="bi bi-check-circle-fill text-success me-2"></i>
                                High quality materials
                            </li>
                            <li className="list-group-item border-0 px-0">
                                <i className="bi bi-check-circle-fill text-success me-2"></i>
                                Durable and long-lasting
                            </li>
                            <li className="list-group-item border-0 px-0">
                                <i className="bi bi-check-circle-fill text-success me-2"></i>
                                Easy to use and maintain
                            </li>
                            <li className="list-group-item border-0 px-0">
                                <i className="bi bi-check-circle-fill text-success me-2"></i>
                                Money back guarantee
                            </li>
                            <li className="list-group-item border-0 px-0">
                                <i className="bi bi-check-circle-fill text-success me-2"></i>
                                Free shipping available
                            </li>
                        </ul>
                        <div className="mt-3">
                            <small className="text-muted">
                            <strong>Note:</strong> Features may vary depending on the specific product model.
                            </small>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
        <div className="container-fluid py-4">
            <div className="divider d-flex align-items-center justify-content-center">
                <div className="flex-grow-1 border-top"></div>
                <div className="mx-3 fw-bold fst-italic fs-1">Comments</div>
                <div className="flex-grow-1 border-top"></div>
            </div>
        </div>
        <div className="container my-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <div>
                    <h4 className="fw-bold mb-0 fs-2">
                        Rating: {products.rating || 0} 
                        <span className="text-warning fs-2">
                        {renderStars(products.rating || 0)}
                        </span>
                    </h4>
                    <small className="text-muted">
                    {comments.length} comments available
                    </small>
                </div>
                <div>
                    <button className="btn btn-danger me-2 fw-bold">Comment</button>
                    <button className="btn btn-dark fw-bold">Filter</button>
                </div>
            </div>
            <div className="d-flex text-center my-4">
                <h5 className="fw-bold fst-italic fs-2">Customer Comments</h5>
            </div>
            <hr />
            {comments && comments.length > 0 ? (
            comments.map((comment, index) => (
            <div key={comment.comment_id || index} className="mb-4 border-bottom pb-3">
            <div className="d-flex justify-content-between text-muted small mb-1">
                <span>Customer #{comment.customer_id}</span>
                <span>{comment.date ? new Date(comment.date).toLocaleDateString('en-US') : 'Date unknown'}</span>
            </div>
            <div className="d-flex">
                <div className="rounded-circle bg-dark text-white d-flex justify-content-center align-items-center me-3" style={{ width: '40px', height: '40px' }}>
                C{comment.customer_id}
            </div>
            <div>
                <div className="fw-bold">
                    Customer #{comment.customer_id}
                    <span className="text-warning small ms-2">
                    {renderStars(comment.rating || 0)}
                    </span>
                </div>
                <div className="text-muted small mt-1">
                    {comment.comment || 'Comment text not found'}
                </div>
            </div>
        </div>
    </div>
    ))
    ) : (
    <div className="text-center py-4">
        <p className="text-muted">No comments have been made yet.</p>
    </div>
    )}
</div>

<div className="bg-white rounded  p-3 p-md-4">
    <h4 className="text-center mb-4 fw-bold">RELATED PRODUCTS</h4>
    {relatedProducts.length > 0 ? (
    <div className="row g-3 g-md-4">
        {relatedProducts.map(product => (
        <div key={product.id} className="col-6 col-md-4 col-lg-3 mx-1">
            <div className="card h-100 border-0 shadow-sm">
                <img 
                src={product.image || '/api/placeholder/200/200'} 
                className="card-img-top" 
                alt={product.name || 'Product'}
                style={{ height: '150px', objectFit: 'fill'}}
                onError={(e) => {
                    e.target.src = '/api/placeholder/200/200';
                }}
                />
                <div className="card-body text-center p-2 p-md-3">
                    <h6 className="card-title small">{product.name || 'Product Name'}</h6>
                    <p className="text-muted small mb-2 d-none d-md-block">
                        {product.description ? product.description.substring(0, 50) + '...' : 'Lorem ipsum dolor sit amet'}
                    </p>
                    <p className="fw-bold text-danger mb-2 mb-md-3 small">
                        ${product.price || '0.00'}
                    </p>
                    <button className="btn btn-outline-dark btn-sm w-100">Add to Cart</button>
                </div>
            </div>
        </div>
        ))}
    </div>
    ) : (
    <div className="text-center py-4">
        <p className="text-muted">No related products found.</p>
    </div>
    )}
</div>
</div>
</div>
);
}