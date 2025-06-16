import './Main.css';
import picture from "../assets/backgrounds/background_maincaruosel.jpg";
import picture2 from "../assets/backgrounds/background_maincaruosel-2.jpg";
import picture3 from "../assets/backgrounds/background_maincaruosel-3.jpg";
import picture4 from "../assets/backgrounds/background_maincaruosel-4.jpg";

import picture_news1 from "../assets/news/background_new-1.jpg";
import picture_news3 from "../assets/news/background_new-3.jpg";
import picture_news2 from "../assets/news/background_new-2.jpg";

import icon from "../assets/icon/brand_icon.png";
import { useState, useEffect } from 'react';
import { useAuth } from '../ScriptsFolder/AuthContext';
import Axios from "axios";
import { useNavigate, Link } from 'react-router-dom';


export default function MainPage() {
const { user, isAuthenticated } = useAuth();
const navigate = useNavigate();
const handleViewProduct = (productId) =>{
navigate(`/product-page/${productId}`);
};
const [products, setProducts] = useState([]);
useEffect(() => {
const fetchProducts = async () => {
try {
const response = await Axios.get('http://localhost:5000/products');
setProducts(response.data);
} catch (error) {
console.error('Ürünler alınamadı:', error);
}
};
fetchProducts();
}, []);
const [artists, setArtists] = useState([]);
useEffect(() => {
const fetchArtists = async () => {
try{
const response = await Axios.get('http://localhost:5000/artist');
setArtists(response.data);
} catch (error){
console.error('Artistler alınamadı:', error);
}
};
fetchArtists();
});
const handleAddToCart = async (productId) => {
try {
if (!isAuthenticated()) {
alert('Sepete ekleme için lütfen giriş yapın');
navigate('/sign-in');
return;
}
const customerId = user?.id || user?.customerId;
if (!customerId) {
alert('Kullanıcı bilgisi bulunamadı');
return;
}
const response = await Axios.post('http://localhost:5000/cart-add', {
customerId: customerId,
productId: productId,
quantity: 1
});
console.log(response.data);
} catch (error) {
console.error('Sepete ekleme hatası:', error);
if (error.response) {
alert(`Hata: ${error.response.data.message || 'Sepete ekleme işlemi başarısız'}`);
} else if (error.request) {
alert('Bağlantı hatası. Lütfen internet bağlantınızı kontrol edin.');
} else {
alert('Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.');
}
}
};
return (
<div className='d-flex flex-column'>

<div className="d-flex justify-content-center align-items-center w-100">
      <section className="card w-100">
         <div id="carouselExampleIndicator" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
               <button type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
               <button type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="1" aria-label="Slide 2"></button>
               <button type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="2" aria-label="Slide 3"></button>
               <button type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner"  style={{height: '600px', objectFit: 'cover'}}>
            <div className="carousel-item active">
               <img className="d-block w-100 img-sizer" src={picture} alt="Electric Bass Guitar"/>
               <div className='carousel-caption custom-caption pb-2 pb-md-4 text-end'>
                  <div className='p-3 p-md-4 mb-5 rounded text-white bg-dark bg-opacity-75 d-inline-block'>
                     <p className='mb-1 mb-md-2 p-text'>Bass Classics</p>
                     <h2 className="fw-bold mb-2 mb-md-3 h2-text">FUNK & SOUL</h2>
                     <p className='mb-2 mb-md-3 d-none d-sm-block p-inside-text'>Legendary bass lines on limited edition vinyl records.</p>
                     <button className="btn btn-outline-light btn-sn btn-md-normal">SHOP VINYL</button>
                  </div>
               </div>
            </div>
            <div className="carousel-item">
               <img className="d-block w-100 img-sizer" src={picture2} alt="Professional Microphone"/>
               <div className='carousel-caption custom-caption pb-2 pb-md-4 text-end'>
                  <div className='p-3 p-md-4 mb-5 rounded text-white bg-dark bg-opacity-75 d-inline-block'>
                     <p className='mb-1 mb-md-2 p-text'>Live Recordings</p>
                     <h2 className="fw-bold mb-2 mb-md-3 h2-text">CONCERT ALBUMS</h2>
                     <p className='mb-2 mb-md-3 d-none d-sm-block p-inside-text'>Experience the magic of live performances on vinyl.</p>
                     <button className="btn btn-outline-light btn-sn btn-md-normal">DISCOVER</button>
                  </div>
               </div>
            </div>
            <div className="carousel-item">
               <img className="d-block w-100 img-sizer" src={picture3} alt="Acoustic Guitar"/>
               <div className='carousel-caption custom-caption pb-2 pb-md-4 text-end'>
                  <div className='p-3 p-md-4 mb-5 rounded text-white bg-dark bg-opacity-75 d-inline-block'>
                     <p className='mb-1 mb-md-2 p-text'>Folk & Country</p>
                     <h2 className="fw-bold mb-2 mb-md-3 h2-text">ACOUSTIC HITS</h2>
                     <p className='mb-2 mb-3 d-none d-sm-block p-inside-text'>Timeless acoustic masterpieces pressed on premium vinyl.</p>
                     <button className="btn btn-outline-light btn-sn btn-md-normal">BROWSE</button>
                  </div>
               </div>
            </div>
            <div className="carousel-item">
               <img className="d-block w-100 img-sizer" src={picture4} alt="Drum Cymbal"/>
               <div className='carousel-caption custom-caption pb-2 pb-md-4 text-end'>
                  <div className='p-3 p-md-4 mb-5 rounded text-white bg-dark bg-opacity-75 d-inline-block'>
                     <p className='mb-1 mb-md-2 p-text'>Rock & Metal</p>
                     <h2 className="fw-bold mb-2 mb-md-3 h2-text">DRUM SOLOS</h2>
                     <p className='mb-2 mb-md-3 d-none d-sm-block p-inside-text'>Epic drum performances from legendary rock albums.</p>
                     <button className="btn btn-outline-light btn-sn btn-md-normal">EXPLORE</button>
                  </div>
               </div>
            </div>
         </div>
         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide="prev">
         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Previous</span>
         </button>
         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide="next">
         <span className="carousel-control-next-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Next</span>
         </button>
   </div>
   </section>
</div>

<div className='d-flex flex-column flex-lg-row justify-content-center align-items-start my-5 mx-3 mx-lg-5 gap-3'>                 
   <div className='px-3 px-md-5 py-4 d-flex align-items-start w-100' style={{backgroundColor: "#99999938"}}>                     
      <div className='colorful-number fw-bold me-2' style={{color: "#B8860B", backgroundColor: '#99999938'}}>💎</div>
      <div className='mt-1'>
         <h6 className="mb-1 fw-bold text-dark fs-6">Rare Vinyl Records</h6>
         <p className="mb-0 text-muted small">Discover collectible and hard-to-find records for true enthusiasts.</p>
      </div>
   </div>

   <div className='px-3 px-md-5 py-4 d-flex align-items-start w-100' style={{backgroundColor: "#99999938"}}>                      
      <div className='colorful-number fw-bold me-2' style={{color: "#3C763D", backgroundColor: '#99999938'}}>🎶</div>                        
      <div className='mt-1'>
         <h6 className="mb-1 fw-bold text-dark fs-6">A Genre for Every Taste</h6>
         <p className="mb-0 text-muted small">From jazz to rock, classics to indie — find the sound you love.</p>
      </div>
   </div>                 

   <div className='px-3 px-md-5 py-4 d-flex align-items-start w-100' style={{backgroundColor: "#99999938"}}>                     
      <div className='colorful-number fw-bold me-2' style={{color: "#E6A500", backgroundColor: '#99999938'}}>📻</div>                     
      <div className='mt-1'>
         <h6 className="mb-1 fw-bold text-dark fs-6">Pure Analog Sound</h6>
         <p className="mb-0 text-muted small">Experience the warmth and depth of vinyl like never before.</p>
      </div>
   </div>                 

   <div className='px-3 px-md-5 py-4 d-flex align-items-start w-100' style={{backgroundColor: "#99999938"}}>                     
      <div className='colorful-number fw-bold me-2' style={{color: "#1C75BC", backgroundColor: '#99999938'}}>📦</div>                     
      <div className='mt-1'>
         <h6 className="mb-1 fw-bold text-dark fs-6">Safe & Fast Delivery</h6>
         <p className="mb-0 text-muted small">Your records are carefully packaged and shipped right to your door.</p>
      </div>
   </div>             
</div>

<div className="products-section">
   <section className="trending-section py-5">
      <div className="container">
         <div className="section-header text-center mb-5">
            <h2 className="section-title mb-3" style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#333', letterSpacing: '2px'}}>TRENDING</h2>
            <p className="section-subtitle text-muted" style={{ fontSize: '1rem'}}>Trending products among customers</p>
         </div>
         <div className="row g-2 mb-4">
            {products.map(product => (
            <div key={product.id} className="col-6 col-lg-3">
               <div className="product-card h-100 position-relative">
                  <div className="product-image-container position-relative">
                     <img 
                     src={product.image} 
                     alt={product.name || product.title}
                     className="product-image w-100 h-100" 
                     />
                     <div className="product-actions">
                        <button 
                           className="action-btn"
                           onClick={() =>
                           handleAddToCart(product.id)}
                           title="Add to Cart"
                           >
                           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="9" cy="21" r="1"></circle>
                              <circle cx="20" cy="21" r="1"></circle>
                              <path d="m1 1 4 4 2.9 13.1h10.4l3.6-7.4H6.9L5.4 2H2"></path>
                           </svg>
                        </button>
                        <button 
                           className="action-btn"
                           onClick={() =>
                           handleViewProduct(product.id)}
                           title="Quick View"
                           >
                           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="11" cy="11" r="8"></circle>
                              <path d="m21 21-4.35-4.35"></path>
                           </svg>
                        </button>
                        <button 
                        className={`action-btn ${product.isWishlisted ? 'wishlisted' : ''}`}
                        onClick={() =>""}
                        title="Add to Wishlist"
                        >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill={product.isWishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                        </button>
                     </div>
                  </div>
                  <div className='d-flex'>
                     <div className="product-info p-3">
                        <h3 className="product-name">{product.name || product.title}</h3>
                        {product.artist && 
                        <p className="product-artist">{product.artist}</p>
                        }
                        {product.format && 
                        <p className="product-format">{product.format}</p>
                        }
                        <p className="product-price">${product.price.toFixed(2)}</p>
                     </div>
                  </div>
               </div>
            </div>
            ))}
         </div>
         <div className="text-center">
            <button 
            className="btn btn-dark px-5 py-2" 
            style={{
            borderRadius: '0', 
            fontWeight: '500', 
            fontSize: '14px',
            letterSpacing: '1px',
            background: '#000',
            border: 'none'
            }}
            >
            VIEW ALL
            </button>
         </div>
      </div>
   </section>
</div>

<div className='w-100 p-5' style={{backgroundColor: "#E3E3E3"}}>
<section className="container-fluid h-100">
   <div className='row h-100 align-items-center m-5'>
      <div className='col-lg-6 col-12'>
         <p className='fs1-text fw-bold fst-italic text-dark mt-5' style={{marginBottom: 0}}>NEW ARRIVALS</p>
         <p className="text-muted lh-base">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. <br></br>Lorem Ipsum has been the
            industry's standard <br></br>dummy text ever since the 1500s
            when an unknown printer took a galley of type
         </p>
         <p className="text-muted lh-base">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. <br></br>Lorem Ipsum has been the
            industry's standard.
         </p>
         <button className='btn btn-outline-secondary fw-bold btn-new-arrivals' style={{borderColor: "black", borderRadius: 0}}>Your Ends</button>
      </div>
   </div>
</section>
</div>

<div className='artist-section'>
   <section className="artists-section py-5">
      <div className="container">
         <div className="section-header text-center mb-5">
            <h2 className="section-title mb-3" style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#333', letterSpacing: '2px'}}>ARTISTS</h2>
         </div>
         <div className="row g-0">
            {artists.map(artist => (
            <div key={artist.artist_name || artist.id} className="col-12 col-md-4 col-lg-3 pb-2">
            <div 
            className="artist-card h-100" 
            style={{
            background: '#fff', 
            borderRadius: '0', 
            overflow: 'hidden', 
            cursor: 'pointer',
            border: '1px solid #eee'
            }}
            >
            <div className="artist-image-container position-relative">
               <img 
                  src={artist.artist_image} 
                  alt={artist.artist_name} 
                  className="artist-image w-100 h-100" 
                  />
            </div>
         </div>
      </div>
      ))}
</div>
</div>
</section>
</div>

<div className='w-100 p-4' style={{backgroundColor: "#E3E3E3"}}>
  <section className="container-fluid h-100">
    <div className='row h-100 align-items-center m-5'>
      <div className='col-lg-6 col-12'>
        <p className='fs1-text fw-bold fst-italic text-dark mt-4 mb-0'>CerrahVINLY</p>
        <p className='fs1-text fw-bold fst-italic text-dark'>Where Music Comes Alive</p>
      </div>
      <div className='col-lg-6 col-12 mt-4 mt-lg-0 text-center'>
        <img src={icon} alt="CerrahVinyl Logo" className='icon-conf justify-content-center'/>
        <p className="text-muted lh-base mt-3">
          CerrahVinly offers a curated collection of the finest vinyl records — from timeless classics to modern hits.  
          Whether you're a seasoned collector or just starting your vinly journey, find the perfect soundtrack here.
        </p>
      </div>
    </div>

    <p className="d-flex fs-6 text-dark mb-4 align-items-center small">
      Experience the sound
      <div>
        <span className="divider-line mx-2"></span>                            
      </div>
    </p>

    <div className="d-flex justify-content-between flex-wrap m-1 gap-3">
      <div className="placeholder-box p-3 rounded shadow-sm">
        <h6 className="fw-bold text-dark">🎷 Jazz</h6>
        <p className="small text-muted mb-0">Smooth, timeless rhythms</p>
      </div>
      <div className="placeholder-box p-3 rounded shadow-sm">
        <h6 className="fw-bold text-dark">🌟 Editor’s Pick</h6>
        <p className="small text-muted mb-0">Our favorite vinyl this week</p>
      </div>
      <div className="placeholder-box p-3 rounded shadow-sm">
        <h6 className="fw-bold text-dark">🆕 New Arrivals</h6>
        <p className="small text-muted mb-0">Freshly added to our store</p>
      </div>
      <div className="placeholder-box p-3 rounded shadow-sm">
        <h6 className="fw-bold text-dark">🔥 Best Sellers</h6>
        <p className="small text-muted mb-0">Most loved by our customers</p>
      </div>
      <div className="placeholder-box p-3 rounded shadow-sm">
        <h6 className="fw-bold text-dark">🎛️ Turntables</h6>
        <p className="small text-muted mb-0">Everything you need to play vinyl</p>
      </div>
      <div className="placeholder-box p-3 rounded shadow-sm">
        <h6 className="fw-bold text-dark">📼 Vintage Picks</h6>
        <p className="small text-muted mb-0">Retro vinyl from the golden age</p>
      </div>
      <div className="placeholder-box p-3 rounded shadow-sm">
        <h6 className="fw-bold text-dark">🚚 Free Shipping</h6>
        <p className="small text-muted mb-0">On orders over $100</p>
      </div>
      <div className="placeholder-box p-3 rounded shadow-sm">
        <h6 className="fw-bold text-dark">🎁 Vinyl Club</h6>
        <p className="small text-muted mb-0">Monthly surprises for members</p>
      </div>
    </div>
  </section>
</div>

<div className='w-100 p-4'>
  <div className="container-fluid">
    <div className='d-flex justify-content-between align-items-center mb-5 pt-4'>
      <h1 className='fs-1 fw-bold fst-italic text-dark m-0' style={{ fontSize: 40 }}>
        VINYL NEWS & RELEASES
      </h1>
      <button className='btn px-4' style={{
        backgroundColor: "black",
        borderColor: "black",
        borderRadius: 0,
        color: "white",
        cursor: "pointer"
      }}>
        VIEW ALL
      </button>
    </div>
  </div>

  <div className="container-fluid px-2">
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div className='mt-2 mx-3'>
          <div style={{ backgroundColor: "#c8c8c8", height: 200, borderRadius: 8, overflow: 'hidden' }}>
            <img 
              src={picture_news2} 
              alt="New Vinyl Release" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          <div className="mt-3">
            <h5 className="fw-bold mb-3">New Arrival: Classic Rock Vinyl Collection</h5>
            <p className="text-muted mb-4">
              Discover our latest shipment of classic rock vinyl records, featuring legendary bands and timeless albums.
            </p>
            <Link className="text-danger fw-bold">Shop Now</Link>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div className='mt-2 mx-3'>
          <div style={{ backgroundColor: "#c8c8c8", height: 200, borderRadius: 8, overflow: 'hidden' }}>
            <img 
              src={picture_news3}
              alt="DJ Vinyl Picks" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          <div className="mt-3">
            <h5 className="fw-bold mb-3">Top DJ Picks for Your Vinyl Collection</h5>
            <p className="text-muted mb-4">
              Check out the favorite vinyl records selected by world-renowned DJs, perfect for your next party or personal listening.
            </p>
            <Link className="text-danger fw-bold">Explore</Link>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div className='mt-2 mx-3'>
          <div style={{ backgroundColor: "#c8c8c8", height: 200, borderRadius: 8, overflow: 'hidden' }}>
            <img 
              src={picture_news1} 
              alt="Limited Edition Vinyl" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          <div className="mt-3">
            <h5 className="fw-bold mb-3">Limited Edition Releases – Grab Them Before They're Gone!</h5>
            <p className="text-muted mb-4">
              Exclusive limited pressings of vinyl records available now. Collectors and fans won’t want to miss out.
            </p>
            <Link className="text-danger fw-bold ">Buy Limited Editions</Link>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
{/*
<div className='w-100 p-2 d-flex justify-content-center'>
   <div className='container-fluid'>
      <div className='row'>
         <div className='col-12 d-flex justify-content-center align-items-center mb-4'>
            <p className='fs1-text fw-bold text-dark m-0'>LATEST SEEN </p>
         </div>
      </div>
      <div className='row mb-5 justify-content-center g-3'>
         <div className='col-4 col-md-3 col-lg-2 col-xl-2'>
            <div className='placeholder-box insta-placeholder-box'>
               <i className="bi bi-instagram" style={{color: "white"}}></i>
            </div>
         </div>
         <div className='col-4 col-md-3 col-lg-2 col-xl-2'>
            <div className='placeholder-box insta-placeholder-box'>
               <i className="bi bi-instagram" style={{color: "white"}}></i>
            </div>
         </div>
         <div className='col-4 col-md-3 col-lg-2 col-xl-2'>
            <div className='placeholder-box insta-placeholder-box'>
               <i className="bi bi-instagram" style={{color: "white"}}></i>
            </div>
         </div>
         <div className='col-4 col-md-3 col-lg-2 col-xl-2'>
            <div className='placeholder-box insta-placeholder-box'>
               <i className="bi bi-instagram" style={{color: "white"}}></i>
            </div>
         </div>
         <div className='col-4 col-md-3 col-lg-2 col-xl-2'>
            <div className='placeholder-box insta-placeholder-box'>
               <i className="bi bi-instagram" style={{color: "white"}}></i>
            </div>
         </div>
         <div className='col-4 col-md-3 col-lg-2 col-xl-2'>
            <div className='placeholder-box insta-placeholder-box'>
               <i className="bi bi-instagram" style={{color: "white"}}></i>
            </div>
         </div>
      </div>
   </div>
</div>
*/}
<div class="container py-5">
   <div class="text-center mb-4">
      <h1 class="fw-bold fst-italic">LOREM IPSUM IS SIMPLY DUMMY TEXT</h1>
      <h4 class="fw-bold">Lorem Ipsum is simplys</h4>
   </div>
   <div class="row justify-content-center px-3">
      <div class="col-lg-6 col-md-8 col-sm-10 d-flex p-0 border border-dark border-3">
         <input type="email" class="form-control rounded-0 p-3 border-0" placeholder="Lorem Ipsum"/>
         <button class="btn btn-dark fs-4 fw-bold rounded-0 w-25">With AS</button>
      </div>
   </div>
</div>
</div>  
);
}