import './ProductsSection.css';
import { useEffect, useState } from 'react';

import Axios from 'axios';

// Mock database - gerçek uygulamada bu veriler API'den gelecek
const productsDatabase = {
  trending: [
    {
      id: 1,
      title: "Dream Waves On",
      artist: "Lorem Ipsum",
      price: "$60.00",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      likes: 24,
      views: 156,
      category: "trending"
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      artist: "Lorem Ipsum",
      price: "$90.00",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
      likes: 18,
      views: 89,
      category: "trending"
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      artist: "Lorem Ipsum",  
      price: "$90.00",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop",
      likes: 32,
      views: 201,
      category: "trending"
    },
    {
      id: 4,
      title: "Lorem Ipsum",
      artist: "Lorem Ipsum",
      price: "$90.00", 
      image: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=300&h=300&fit=crop",
      likes: 15,
      views: 67,
      category: "trending"
    },
    {
      id: 5,
      title: "Lorem Ipsum",
      artist: "Lorem Ipsum",
      price: "$90.00",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
      likes: 28,
      views: 134,
      category: "trending"
    },
    {
      id: 6,
      title: "Lorem Ipsum", 
      artist: "Lorem Ipsum",
      price: "$90.00",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      likes: 41,
      views: 298,
      category: "trending"
    },
    {
      id: 7,
      title: "Lorem Ipsum",
      artist: "Lorem Ipsum", 
      price: "$90.00",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
      likes: 19,
      views: 76,
      category: "trending"
    },
    {
      id: 8,
      title: "Lorem Ipsum",
      artist: "Lorem Ipsum",
      price: "$90.00",
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
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
      followers: "12.5K",
      works: 45,
      category: "artists"
    },
    {
      id: 2,
      name: "Artist Name",
      specialty: "Lorem Ipsum",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      followers: "8.2K", 
      works: 32,
      category: "artists"
    },
    {
      id: 3,
      name: "Artist Name",
      specialty: "Lorem Ipsum",
      image: "https://images.unsplash.com/photo-1494790108755-2616c6a96820?w=400&h=500&fit=crop",
      followers: "15.7K",
      works: 67,
      category: "artists"
    }
  ]
};

export default function ProductCard() {

  const [likedItems, setLikedItems] = useState(new Set());
  const [products, setProducts] = useState([]);

  useEffect(() => {
        // Sayfa yüklendiğinde ürünleri getir
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
    <div className="products-section">
      {/* TRENDING Section */}
      <section className="trending-section">
        <div className="section-header">
          <h2 className="section-title">TRENDING</h2>
          <p className="section-subtitle">Lorem Ipsum in blandit</p>
        </div>
        
        <div className="products-grid">
          {products.map(products => (
            <div key={products.id} className="product-card">
              <div className="product-image-container">
                <img src={products.image} alt={products.title} className="product-image" />
                <div className="product-overlay">
                  <div className="product-actions">
                    <button 
                      className={`action-btn like-btn ${likedItems.has(products.id) ? 'liked' : ''}`}
                      onClick={() => handleLike(products.id)}
                    >
                      <i className="heart-icon">♡</i>
                    </button>
                    <button className="action-btn view-btn">
                      <i className="eye-icon">👁</i>
                    </button>
                    <button className="action-btn share-btn">
                      <i className="share-icon">⤴</i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-title">{products.title}</h3>
                <p className="product-artist">{products.artist}</p>
                <p className="product-price">{products.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="section-footer">
          <button className="view-all-btn">VIEW ALL</button>
        </div>
      </section>

      {/* ARTISTS Section */}
      <section className="artists-section">
        <div className="section-header">
          <h2 className="section-title">ARTISTS</h2>
          <p className="section-subtitle">Lorem Ipsum</p>
        </div>
        
        <div className="artists-grid">
          {productsDatabase.artists.map(artist => (
            <div key={artist.id} className="artist-card">
              <div className="artist-image-container">
                <img src={artist.image} alt={artist.name} className="artist-image" />
                <div className="artist-overlay">
                  <div className="artist-stats">
                    <div className="stat">
                      <span className="stat-number">{artist.followers}</span>
                      <span className="stat-label">Followers</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">{artist.works}</span>
                      <span className="stat-label">Works</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="artist-info">
                <h3 className="artist-name">{artist.name}</h3>
                <p className="artist-specialty">{artist.specialty}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="section-pagination">
          <div className="pagination-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </section>
    </div>
  );
}