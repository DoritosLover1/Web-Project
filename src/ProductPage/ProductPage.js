import React, { useState } from 'react';

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [liked, setLiked] = useState(false)
  const HeartButton = () => {
    const toggleHeart = () => {
        setLiked(!liked);
        };
  }

  const productImages = [
    '/api/placeholder/400/400',
    '/api/placeholder/400/400',
    '/api/placeholder/400/400',
    '/api/placeholder/400/400'
  ];

  const relatedProducts = [
    { id: 1, name: 'Lorem Ipsum', price: '₺299.99', image: '/api/placeholder/200/200' },
    { id: 2, name: 'Lorem Ipsum', price: '₺199.99', image: '/api/placeholder/200/200' },
    { id: 3, name: 'Lorem Ipsum', price: '₺349.99', image: '/api/placeholder/200/200' },
    { id: 4, name: 'Lorem Ipsum', price: '₺249.99', image: '/api/placeholder/200/200' }
  ];

  const reviews = [
    { id: 1, user: 'John', rating: 5, comment: 'Harika bir ürün, çok memnunum. Kalitesi gerçekten iyi.', date: '2 gün önce' },
    { id: 2, user: 'Emma', rating: 4, comment: 'Güzel ürün, hızlı kargo. Tavsiye ederim.', date: '1 hafta önce' },
    { id: 3, user: 'Mike', rating: 5, comment: 'Beklentilerimi karşıladı, tekrar alırım.', date: '2 hafta önce' }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`text-${i < rating ? 'warning' : 'muted'}`}>★</span>
    ));
  };


  
  return (
    <div className="container-fluid bg-light min-vh-100">
      <div className="container py-4">
        <div className="row bg-white rounded shadow-sm p-3 p-md-4 mb-4">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <div className="mb-3">
              <img 
                src={productImages[selectedImage]} 
                alt="Product" 
                className="img-fluid rounded w-100"
                style={{ height: '300px', objectFit: 'cover', backgroundColor: '#ddd' }}
              />
            </div>
            <div className="row g-2">
              {productImages.map((img, index) => (
                <div key={index} className="col-3">
                  <img 
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className={`img-fluid rounded cursor-pointer ${selectedImage === index ? 'border border-primary border-3' : ''}`}
                    style={{ height: '60px', width: '100%', objectFit: 'cover', backgroundColor: '#ddd' }}
                    onClick={() => setSelectedImage(index)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <h2 className="fw-bold mb-2 h4 h-lg-3 fs-1 fst-italic">Lorem Ipsum Is</h2>
            <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center mb-3">
                <div className>
                    <span className="h4 h-lg-3 text-danger fw-bold fs-2">$500.00</span>
                </div>
            </div>
            
            <div className="me-3 fs-3">
                {renderStars(4)}
                <span className="text-muted ms-2 small">(124 reviews)</span>
            </div>

            <div className="mb-3">
              <p className="mb-1 fs-5"><strong>With:</strong> <span className="text-muted">Lorem Ipsum</span></p>
              <p className="mb-1 fs-5"><strong>Lorems:</strong> <span className="text-muted">Lorem Ipsum</span></p>
              <p className="mb-1 fs-5"><strong>That:</strong> <span className="text-muted">Lorem Ipsum</span></p>
            </div>

            <div className="mb-2">
              <div className="row">
                <div className="col-12 col-sm-12 mx-1">
                    <div className='d-flex justify-content-between mx-3'>
                        <input style={{width: 100, height: 15}}
                            type="number" 
                            className="form-control" 
                            value={quantity}
                            min="1"
                            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                        />
                        <button className='btn btn-outline-none bg-transparent border-0'>
                                <i className={`bi ${liked ? 'bi-heart-fill' : 'bi-heart'}`} 
                                style={{ fontSize: '1.5rem', color: liked ? 'red' : 'gray' }}></i>
                        </button>
                    </div>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column gap-2 d-sm-flex mb-3">
              <button className="btn btn-danger btn-lg flex-sm-fill">Lorem Ispum</button>
              <button className="btn btn-outline-dark btn-lg flex-sm-fill" style={{backgroundColor: "#3C4242", color: 'white'}}>Lorem Ispum</button>
            </div>

            <div className="border-top pt-3">
                <p className="small text-muted mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <i className="bi bi-facebook mx-2" style={{fontSize: "1.5rem"}}></i>
                <i className="bi bi-twitter mx-2" style={{fontSize: "1.5rem"}}></i>
                <i className="bi bi-instagram mx-2" style={{fontSize: "1.5rem"}}></i>
            </div>
          </div>
        </div>
        
        {/*ALT TARAF PROTOTYPE BU BİR YERDEN*/}
        <div className="bg-white rounded shadow-sm p-3 p-md-4 mb-4">
          <ul className="nav nav-tabs border-0 mb-4 flex-column flex-sm-row">
            <li className="nav-item mb-2 mb-sm-0">
              <button className="nav-link active bg-danger text-white px-3 px-md-4 w-100">Ürün Bilgileri</button>
            </li>
            <li className="nav-item mb-2 mb-sm-0">
              <button className="nav-link text-dark px-3 px-md-4 w-100">Değerlendirmeler</button>
            </li>
            <li className="nav-item">
              <button className="nav-link text-dark px-3 px-md-4 w-100">Kargo</button>
            </li>
          </ul>
          
          <div className="tab-content">
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div className="bg-white rounded shadow-sm p-3 p-md-4 mb-4">
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-4">
            <h4 className="mb-2 mb-sm-0">Lorem Ipsum Is</h4>
            <div className="d-flex align-items-center">
              {renderStars(4)}
              <span className="text-muted ms-2 small">124 Değerlendirme</span>
            </div>
          </div>

          <div className="mb-4">
            <h6>Değerlendirme Yaz</h6>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <input type="text" className="form-control" placeholder="Adınız" />
              </div>
              <div className="col-12 col-md-6">
                <input type="email" className="form-control" placeholder="E-posta" />
              </div>
              <div className="col-12">
                <textarea className="form-control" rows="3" placeholder="Yorumunuz"></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-danger">Gönder</button>
              </div>
            </div>
          </div>

          <div className="reviews">
            {reviews.map(review => (
              <div key={review.id} className="border-bottom pb-3 mb-3">
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start mb-2">
                  <div className="mb-2 mb-sm-0">
                    <h6 className="mb-1">{review.user}</h6>
                    <div className="d-flex align-items-center">
                      {renderStars(review.rating)}
                      <span className="text-muted ms-2 small">{review.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted mb-0 small">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded shadow-sm p-3 p-md-4">
          <h4 className="text-center mb-4 fw-bold">LOREM IPSUM</h4>
          <div className="row g-3 g-md-4">
            {relatedProducts.map(product => (
              <div key={product.id} className="col-6 col-md-4 col-lg-3">
                <div className="card h-100 border-0 shadow-sm">
                  <img 
                    src={product.image} 
                    className="card-img-top" 
                    alt={product.name}
                    style={{ height: '150px', objectFit: 'cover', backgroundColor: '#ddd' }}
                  />
                  <div className="card-body text-center p-2 p-md-3">
                    <h6 className="card-title small">{product.name}</h6>
                    <p className="text-muted small mb-2 d-none d-md-block">Lorem ipsum dolor sit amet</p>
                    <p className="fw-bold text-danger mb-2 mb-md-3 small">{product.price}</p>
                    <button className="btn btn-outline-dark btn-sm w-100">Sepete Ekle</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <div className="d-inline-flex gap-2">
              <span className="bg-dark rounded-circle" style={{ width: '8px', height: '8px' }}></span>
              <span className="bg-secondary rounded-circle" style={{ width: '8px', height: '8px' }}></span>
              <span className="bg-secondary rounded-circle" style={{ width: '8px', height: '8px' }}></span>
              <span className="bg-secondary rounded-circle" style={{ width: '8px', height: '8px' }}></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}