import React, { useState } from 'react';
import './ProductPage.css';
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
    <div className="container-fluid bg-white min-vh-100">
      <div className="container py-4">
        <div className="row bg-white rounded  p-3 p-md-4 mb-4">
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
        
        {/*FONKSİYONEL KISMI KALDI*/}
        <div className='p-3 p-md-4 mb-4'>
          <ul className="nav nav-tabs border-0 mb-4 flex-column flex-sm-row">
            <li className="nav-item mb-2 mb-sm-0">
              <button className="nav-link active bg-danger text-white px-3 px-md-4 w-100 fw-bold">Lorem Impus Sim</button>
            </li>
            <li className="nav-item mb-2 mb-sm-0">
              <button className="nav-link active text-white bg-dark px-3 px-md-4 w-100 fw-bold">Lorem Impus Simply</button>
            </li>
            <li className="nav-item mb-2 mb-sm-0">
              <button className="nav-link active text-white bg-dark px-3 px-md-4 w-100 fw-bold">Lorem</button>
            </li>
          </ul>
          <div className="rounded shadow-sm p-3 p-md-4 mb-4">   
            <div className="tab-content">
              <p className="text-muted">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
software like Aldus PageMaker including versions of Lorem Ipsum.<br></br>
<br></br>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
essentially unchanged. It was popularised in the 1960s with the release.<br></br>
<br></br> 
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
software like Aldus PageMaker including versions of Lorem Ipsum.<br></br>
              <br></br>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container-fluid py-4">
          <div className="divider d-flex align-items-center justify-content-center">
            <div className="flex-grow-1 border-top"></div>
            <div className="mx-3 fw-bold fst-italic fs-1">Lorem Ipsum Is</div>
            <div className="flex-grow-1 border-top"></div>
          </div>
        </div>

        <div className="container my-4">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div>
            <h4 className="fw-bold mb-0 fs-2">0.0 <span className="text-warning fs-2">★★★★★</span></h4>
            <small className="text-muted">Lorem Ipsum is simply dummy</small>
            </div>
            <div>
              <button className="btn btn-danger me-2">Lorem Ipsums</button>
              <button className="btn btn-dark">Lorem Ipsums</button>
            </div>
          </div>

          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">Lorem</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Versions</a>
            </li>
          </ul>

          <div className="d-flex text-center my-4">
            <h5 className="fw-bold fst-italic fs-2">Lorem Ipsum Is</h5>
          </div>
          <form className="container gap-2 mb-4">
            <div className='row w-50'>
              <div className='col-lg-12 col-md-8 col-sm-12'>
                <input type="text" style={{borderRadius: 20, paddingTop: 5, paddingBottom: 5}} className="form-control" placeholder="🔍 Lorem Ipsum is" />             
              </div>
            </div>
            <div className='row w-50'>
              <div className='col-lg-6 col-md-8 col-sm-12'>
                <select className="form-select form-item-paddinger" style={{borderRadius: 20, paddingTop: 5, paddingBottom: 5}} >
                  <option>Lorems</option>
                </select>
              </div>
              <div className='col-lg-6 col-md-8 col-sm-12'>
                <select className="form-select form-item-paddinger" style={{borderRadius: 20, paddingTop: 5, paddingBottom: 5}} >
                  <option>Lorems</option>
                </select>   
              </div>            
            </div>
          </form>
          <hr />

          {/*BURAYA VERİ TABANI İLE ETKİLEŞİMLİ OLAN VERSİYONU GELECEK*/}
          {[1, 2].map(i => (
            <div key={i} className="mb-4 border-bottom pb-3">
              <div className="d-flex justify-content-between text-muted small mb-1">
                <span>Lorem Ipsum is simply</span>
                <span>Lorem Ipsum</span>
              </div>

            <div className="d-flex">
              <div className="rounded-circle bg-dark text-white d-flex justify-content-center align-items-center me-3" style={{ width: '40px', height: '40px' }}>
                S
              </div>
              <div>
                <div className="fw-bold">Lorem Ipsum <span className="text-warning small">★★★★★</span></div>
                <div className="fw-bold">Lorem Ipsum</div>
                <div className="text-muted small">Lorem</div>
                <div className="small mt-2 text-muted">
                  Lorem Ipsum is simply do?<i className='bi bi-hand-thumbs-up'/> 0 <i className='bi bi-hand-thumbs-down'/> 0
                </div>
              </div>
            </div>
        </div>
      ))}


      <div className="text-center">
        <nav>
          <ul className="pagination justify-content-center">
            <li className="page-item"><a className="page-link" href="#">&lt;</a></li>
            {/*BURAYADA YORUM MİTAKRI KADAR DEĞER GELECEK*/}
            {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
              <li key={n} className="page-item"><a className="page-link" href="#">{n}</a></li>
            ))}
            <li className="page-item"><a className="page-link" href="#">&gt;</a></li>
          </ul>
        </nav>
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