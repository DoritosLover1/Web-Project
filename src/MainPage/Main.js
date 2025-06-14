import './Main.css';
import picture from "../assets/backgrounds/background_maincaruosel.jpg";
import picture2 from "../assets/backgrounds/background_maincaruosel-2.jpg";
import picture3 from "../assets/backgrounds/background_maincaruosel-3.jpg";
import picture4 from "../assets/backgrounds/background_maincaruosel-4.jpg";
import icon from "../assets/icon/brand_icon.png";
import pictureartist from "../assets/artists/morveötesi.jpg";
import pictureartist2 from "../assets/artists/slowdive.jpg";
import pictureartist3 from "../assets/artists/güllü.jpg";
import pictureartist4 from "../assets/artists/Kanye_West.png";
import pictureartist5 from "../assets/artists/nejat_isler.jpg";
import pictureartist6 from "../assets/artists/volkan_konak.jpg";
import { useState } from 'react';
// Mock database - gerçek uygulamada bu veriler API'den gelecek
const productsDatabase = {
trending: [
{
id: 1,
title: "Desire Walks On",
artist: "Heart Way",
price: "$00.00",
image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
likes: 24,
views: 156,
category: "trending"
},
{
id: 2,
title: "Lorem Ipsum",
artist: "Lorem Ipsum",
price: "$00.00",
image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
likes: 18,
views: 89,
category: "trending"
},
{
id: 3,
title: "Lorem Ipsum",
artist: "Lorem Ipsum",  
price: "$00.00",
image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop",
likes: 32,
views: 201,
category: "trending"
},
{
id: 4,
title: "Lorem Ipsum",
artist: "Lorem Ipsum",
price: "$00.00", 
image: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=300&h=300&fit=crop",
likes: 15,
views: 67,
category: "trending"
},
{
id: 5,
title: "Lorem Ipsum",
artist: "Lorem Ipsum",
price: "$00.00",
image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
likes: 28,
views: 134,
category: "trending"
},
{
id: 6,
title: "Lorem Ipsum", 
artist: "Lorem Ipsum",
price: "$00.00",
image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
likes: 41,
views: 298,
category: "trending"
},
{
id: 7,
title: "Lorem Ipsum",
artist: "Lorem Ipsum", 
price: "$00.00",
image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
likes: 19,
views: 76,
category: "trending"
},
{
id: 8,
title: "Lorem Ipsum",
artist: "Lorem Ipsum",
price: "$00.00",
image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop", 
likes: 33,
views: 187,
category: "trending"
}
],
artists: [
{
id: 1,
name: "Artist Name",
specialty: "Lorem Ipsum", 
image: pictureartist,
followers: "12.5K",
works: 45,
category: "artists"
},
{
id: 2,
name: "Artist Name",
specialty: "Lorem Ipsum",
image: pictureartist2,
followers: "8.2K", 
works: 32,
category: "artists"
},
{
id: 3,
name: "Artist Name",
specialty: "Lorem Ipsum",
image: pictureartist3,
followers: "15.7K",
works: 67,
category: "artists"
},
{
id: 4,
name: "Isim girin",
specialty: "Lorem Ipsum", 
image: pictureartist4,
followers: "12.5K",
works: 45,
category: "artists"
},
{
id: 5,
name: "Isim girin",
specialty: "Lorem Ipsum",
image: pictureartist5,
followers: "8.2K", 
works: 32,
category: "artists"
},
{
id: 6,
name: "Isim girin",
specialty: "Lorem Ipsum",
image: pictureartist6,
followers: "15.7K",
works: 67,
category: "artists"
}
]
};
export default function MainPage() {
const [likedItems, setLikedItems] = useState(new Set());
const handleLike = (itemId) => {
setLikedItems(prev => {
const newSet = new Set(prev);
if (newSet.has(itemId)) {
newSet.delete(itemId);
} else {
newSet.add(itemId);
}
return newSet;
});
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
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <img className="d-block w-100 img-sizer" src={picture} alt="Slide 1" style={{height: '500px', objectFit: 'cover'}}/>
                  <div className='carousel-caption custom-caption pb-2 pb-md-4 text-end'>
                     <div className='p-3 p-md-4 mb-5 rounded text-white bg-dark bg-opacity-75 d-inline-block'>
                        <p className='mb-1 mb-md-2 p-text'>Lorem Ipsums</p>
                        <h2 className="fw-bold mb-2 mb-md-3 h2-text">LOREM IPSUM</h2>
                        <p className='mb-2 mb-md-3 d-none d-sm-block p-inside-text'>Lorem Ipsum is simply dummy text of the print.</p>
                        <button className="btn btn-outline-light btn-sn btn-md-normal">LOREMS</button>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <img className="d-block w-100 img-sizer" src={picture2} alt="Slide 2" style={{height: '500px', objectFit: 'cover'}}/>
                  <div className='carousel-caption custom-caption pb-2 pb-md-4 text-end'>
                     <div className='p-3 p-md-4 mb-5 rounded text-white bg-dark bg-opacity-75 d-inline-block'>
                        <p className='mb-1 mb-md-2 p-text'>Lorem Ipsums</p>
                        <h2 className="fw-bold mb-2 mb-md-3 h2-text">LOREM IPSUM</h2>
                        <p className='mb-2 mb-md-3 d-none d-sm-block p-inside-text'>Lorem Ipsum is simply dummy text of the print.</p>
                        <button className="btn btn-outline-light btn-sn btn-md-normal">LOREMS</button>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <img className="d-block w-100 img-sizer" src={picture3} alt="Slide 3" style={{height: '500px', objectFit: 'cover'}}/>
                  <div className='carousel-caption custom-caption pb-2 pb-md-4 text-end'>
                     <div className='p-3 p-md-4 mb-5 rounded text-white bg-dark bg-opacity-75 d-inline-block'>
                        <p className='mb-1 mb-md-2 p-text'>Lorem Ipsums</p>
                        <h2 className="fw-bold mb-2 mb-md-3 h2-text">LOREM IPSUM</h2>
                        <p className='mb-2 mb-md-3 d-none d-sm-block p-inside-text'>Lorem Ipsum is simply dummy text of the print.</p>
                        <button className="btn btn-outline-light btn-sn btn-md-normal">LOREMS</button>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <img className="d-block w-100 img-sizer" src={picture4} alt="Slide 4" style={{height: '500px', objectFit: 'cover'}}/>
                  <div className='carousel-caption custom-caption pb-2 pb-md-4 text-end'>
                     <div className='p-3 p-md-4 mb-5 rounded text-white bg-dark bg-opacity-75 d-inline-block'>
                        <p className='mb-1 mb-md-2 p-text'>Lorem Ipsums</p>
                        <h2 className="fw-bold mb-2 mb-md-3 h2-text">LOREM IPSUM</h2>
                        <p className='mb-2 mb-md-3 d-none d-sm-block p-inside-text'>Lorem Ipsum is simply dummy text of the print.</p>
                        <button className="btn btn-outline-light btn-sn btn-md-normal">LOREMS</button>
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
      <div className='px-3 px-md-5 py-4 d-flex align-items-start w-100' style={{backgroundColor: "#F2EADF"}}>                     
      <div className='colorful-number fw-bold me-2' style={{color: "#C3914A", backgroundColor: 'rgba(255,255,255,0.5)'}}>1
   </div>
   <div className='mt-1'>
      <h6 className="mb-1 fw-bold text-dark fs-6">LOREM IPSU</h6>
      <p className="mb-0 text-muted small">Lorem Ipsum is.</p>
   </div>
</div>
<div className='px-3 px-md-5 py-4 d-flex align-items-start w-100' style={{backgroundColor: "#E6EDDD"}}>                      
<div className='colorful-number fw-bold me-2' style={{color: "#5F9101", backgroundColor: 'rgba(255,255,255,0.5)'}}>2</div>                        
<div className='mt-1'>
   <h6 className="mb-1 fw-bold text-dark fs-6">LOREM IPSU</h6>
   <p className="mb-0 text-muted small">Lorem Ipsum is.</p>
</div>
</div>                 
<div className='px-3 px-md-5 py-4 d-flex align-items-start w-100' style={{backgroundColor: "#FDF2DE"}}>                     
<div className='colorful-number fw-bold me-2' style={{color: "#FEBA28", backgroundColor: 'rgba(255,255,255,0.5)'}}>3</div>                     
<div className='mt-1'>
   <h6 className="mb-1 fw-bold text-dark fs-6">LOREM IPSU</h6>
   <p className="mb-0 text-muted small">Lorem Ipsum is.</p>
</div>
</div>                 
<div className='px-3 px-md-5 py-4 d-flex align-items-start w-100' style={{backgroundColor: "#E1EDF9"}}>                     
<div className='colorful-number fw-bold me-2' style={{color: "#2E97FF", backgroundColor: 'rgba(255,255,255,0.5)'}}>4</div>                     
<div className='mt-1'>
   <h6 className="mb-1 fw-bold text-dark fs-6">LOREM IPSU</h6>
   <p className="mb-0 text-muted small">Lorem Ipsum is.</p>
</div>
</div>             
</div>
<div className="products-section">
   <section className="trending-section py-5">
      <div className="container">
         <div className="section-header text-center mb-5">
            <h2 className="section-title mb-3" style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#333', letterSpacing: '2px'}}>TRENDING</h2>
            <p className="section-subtitle" style={{color: '#666', fontSize: '1rem'}}>Lorem Ipsum is blandit</p>
         </div>
         <div className="row g-3 mb-4">
            {productsDatabase.trending.map(product => (
            <div key={product.id} className="col-6 col-md-3">
               <div 
               className="product-card h-100 position-relative" 
               style={{
               background: '#fff', 
               borderRadius: '0', 
               overflow: 'hidden', 
               cursor: 'pointer',
               border: '1px solid #eee'
               }}
               >
               <div className="product-image-container position-relative" style={{height: '200px', overflow: 'hidden'}}>
               <img 
               src={product.image} 
               alt={product.title} 
               className="product-image w-100 h-100" 
               style={{objectFit: 'cover'}}
               />
               <div 
               className="product-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2"
               style={{
               background: 'rgba(0,0,0,0.6)', 
               opacity: '0', 
               transition: 'opacity 0.3s ease'
               }}
               >
               <button 
                  className="btn btn-outline-light btn-sm rounded-circle p-2"
                  onClick={() => handleLike(product.id)}
               style={{
               width: '35px', 
               height: '35px', 
               display: 'flex', 
               alignItems: 'center', 
               justifyContent: 'center',
               fontSize: '14px',
               border: '1px solid rgba(255,255,255,0.5)',
               background: likedItems.has(product.id) ? 'rgba(255,255,255,0.2)' : 'transparent'
               }}
               >
               ♡
               </button>
               <button 
               className="btn btn-outline-light btn-sm rounded-circle p-2"
               style={{
               width: '35px', 
               height: '35px', 
               display: 'flex', 
               alignItems: 'center', 
               justifyContent: 'center',
               fontSize: '14px',
               border: '1px solid rgba(255,255,255,0.5)'
               }}
               >
               👁
               </button>
               <button 
               className="btn btn-outline-light btn-sm rounded-circle p-2"
               style={{
               width: '35px', 
               height: '35px', 
               display: 'flex', 
               alignItems: 'center', 
               justifyContent: 'center',
               fontSize: '14px',
               border: '1px solid rgba(255,255,255,0.5)'
               }}
               >
               🛒
               </button>
            </div>
         </div>
         <div className="product-info p-3 text-center">
            <h5 className="product-title mb-1" style={{fontSize: '14px', fontWeight: '600', color: '#333'}}>{product.title}</h5>
            <p className="product-artist mb-1" style={{fontSize: '12px', color: '#666'}}>{product.artist}</p>
            <p className="product-price mb-0" style={{fontSize: '16px', fontWeight: '600', color: '#333'}}>{product.price}</p>
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
         <div id="artistsCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="row g-4 justify-content-center">
                     {productsDatabase.artists.slice(0, 3).map(artist => (
                     <div key={artist.id} className="col-12 col-md-4">
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
                        <div className="artist-image-container position-relative" style={{height: '300px', overflow: 'hidden'}}>
                        <img 
                        src={artist.image} 
                        alt={artist.name} 
                        className="artist-image w-100 h-100" 
                        style={{objectFit: 'cover'}}
                        />
                        <div 
                        className="artist-overlay position-absolute bottom-0 start-0 w-100 p-3"
                        style={{background: 'rgba(0,0,0,0.7)', color: 'white'}}
                        >
                        <div className="d-flex justify-content-between">
                           <div className="text-center">
                              <div style={{fontSize: '18px', fontWeight: 'bold'}}>{artist.followers}
                           </div>
                           <div style={{fontSize: '12px', opacity: '0.8'}}>Followers
                        </div>
                     </div>
                     <div className="text-center">
                        <div style={{fontSize: '18px', fontWeight: 'bold'}}>{artist.works}
                     </div>
                     <div style={{fontSize: '12px', opacity: '0.8'}}>Works
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="artist-info p-3 text-center">
         <h5 className="artist-name mb-1" style={{fontSize: '16px', fontWeight: '600', color: '#333'}}>{artist.name}</h5>
         <p className="artist-specialty mb-0" style={{fontSize: '14px', color: '#666'}}>{artist.specialty}</p>
      </div>
</div>
</div>
))}
</div>
</div>
<div className="carousel-item">
<div className="row g-4 justify-content-center">
{productsDatabase.artists.slice(3, 6).map(artist => (
<div key={artist.id} className="col-12 col-md-4">
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
<div className="artist-image-container position-relative" style={{height: '300px', overflow: 'hidden'}}>
<img 
src={artist.image} 
alt={artist.name} 
className="artist-image w-100 h-100" 
style={{objectFit: 'cover'}}
/>
<div 
className="artist-overlay position-absolute bottom-0 start-0 w-100 p-3"
style={{background: 'rgba(0,0,0,0.7)', color: 'white'}}
>
<div className="d-flex justify-content-between">
<div className="text-center">
<div style={{fontSize: '18px', fontWeight: 'bold'}}>{artist.followers}</div>
<div style={{fontSize: '12px', opacity: '0.8'}}>Followers</div>
</div>
<div className="text-center">
<div style={{fontSize: '18px', fontWeight: 'bold'}}>{artist.works}</div>
<div style={{fontSize: '12px', opacity: '0.8'}}>Works</div>
</div>
</div>
</div>
</div>
<div className="artist-info p-3 text-center">
<h5 className="artist-name mb-1" style={{fontSize: '16px', fontWeight: '600', color: '#333'}}>{artist.name}</h5>
<p className="artist-specialty mb-0" style={{fontSize: '14px', color: '#666'}}>{artist.specialty}</p>
</div>
</div>
</div>
))}
</div>
</div>
</div>
{/* Sadece Alt Indicator'lar */}
<div className="carousel-indicators" style={{position: 'relative', margin: '30px 0 0 0'}}>
<button type="button" data-bs-target="#artistsCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
<button type="button" data-bs-target="#artistsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
</div>
</div>
</div>
</section>
</div>
<div className='w-100 p-4' style={{backgroundColor: "#E3E3E3"}}>
<section className="container-fluid h-100">
   <div className='row h-100 align-items-center m-5'>
      <div className='col-lg-6 col-12'>
         <p className='fs1-text fw-bold fst-italic text-dark mt-4' style={{marginBottom: 0}}>LOREM IPSUM</p>
         <p className='fs1-text fw-bold fst-italic text-dark'>Simply</p>
      </div>
      <div className='col-lg-6 col-12 mt-4 mt-lg-0'>
         <img src={icon} className='icon-conf justify-content-center'/>
         <p class="text-muted lh-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer took a galley 
            of type and scrambled it to make a type specimen book.
         </p>
      </div>
   </div>
   <p class="d-flex fs-6 text-dark mb-4">
      Lorem Ipsum is
   <div>
      <span class="divider-line"></span>                            
   </div>
   </p>
   <div class="d-flex justify-content-between flex-wrap m-1">
      <div class="placeholder-box"></div>
      <div class="placeholder-box"></div>
      <div class="placeholder-box"></div>
      <div class="placeholder-box"></div>
      <div class="placeholder-box"></div>
      <div class="placeholder-box"></div>
      <div class="placeholder-box"></div>
      <div class="placeholder-box"></div>
   </div>
</section>
</div>
<div className='w-100 p-4'>
   <div className="container-fluid">
      <div className='d-flex justify-content-between align-items-center mb-5 pt-4'>
         <h1 className='fs-1 fw-bold fst-italic text-dark m-0' style={{fontSize: 40}}>
         LOREM IPSUM
         </h1>
         <button className='btn px-4' style={{
         backgroundColor: "black",
         borderColor: "black",
         borderRadius: 0,
         color: "white"
         }}>
         VIEW ALL
         </button>
      </div>
   </div>
   <div className="container-fluid px-2">
      <div className="row">
         <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className='mt-2 mx-3'>
               <div style={{backgroundColor: "#c8c8c8", height: 200}}>
            </div>
            <div className="mt-3">
               <h5 className="fw-bold mb-3">Lorem Ipsum is simply dummy text of the</h5>
               <p className="text-muted mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
               <a href="#" className="text-danger text-decoration-none">Lorem Ipsum</a>
            </div>
         </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
         <div className='mt-2 mx-3'>
            <div style={{backgroundColor: "#c8c8c8", height: 200}}>
         </div>
         <div className="mt-3">
            <h5 className="fw-bold mb-3">Lorem Ipsum is simply dummy text of the</h5>
            <p className="text-muted mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
            <a href="#" className="text-danger text-decoration-none">Lorem Ipsum</a>
         </div>
      </div>
   </div>
   <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className='mt-2 mx-3'>
         <div style={{backgroundColor: "#c8c8c8", height: 200}}>
      </div>
      <div className="mt-3">
         <h5 className="fw-bold mb-3">Lorem Ipsum is simply dummy text of the</h5>
         <p className="text-muted mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
         <a href="#" className="text-danger text-decoration-none">Lorem Ipsum</a>
      </div>
   </div>
</div>
</div>
</div>
</div>
<div className='w-100 p-2 d-flex justify-content-center'>
   <div className='container-fluid'>
      <div className='row'>
         <div className='col-12 d-flex justify-content-center align-items-center mb-4'>
            <p className='fs1-text fw-bold text-dark m-0'>LATEST SEEN</p>
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
<div class="container py-5">
   <div class="text-center mb-4">
      <h1 class="fw-bold fst-italic">LOREM IPSUM IS SIMPLY DUMMY TEXT</h1>
      <h4 class="fw-bold">Lorem Ipsum is simplys</h4>
   </div>
   <div class="row justify-content-center px-3">
      <div class="col-lg-6 col-md-8 col-sm-10 d-flex p-0 border border-dark border-3">
         <input type="email" class="form-control rounded-0 p-3 border-0" placeholder="Lorem Ipsum"/>
         <button class="btn btn-dark fs-4 fw-bold rounded-0">With AS</button>
      </div>
   </div>
</div>
</div>  
);
}