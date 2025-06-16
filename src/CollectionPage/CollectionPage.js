import React, { useState, useEffect,useRef, useCallback } from 'react';

const EcommerceCollectionPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(35);
  const [sortBy, setSortBy] = useState('position');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedSections, setExpandedSections] = useState({
    genre: true,
    price: true,
    format: true,
    artist: true,
    types: true,
    other: true
  });

  // Filter states
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedFormats, setSelectedFormats] = useState([]);
  const [selectedArtists, setSelectedArtists] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedOther, setSelectedOther] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 50 });
  const [artistSearch, setArtistSearch] = useState('');

const [isDragging, setIsDragging] = useState(null);
const sliderRef = useRef(null);

  // Sample product data
  const products = [
    {
      id: 1,
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEwIiBoZWlnaHQ9IjMxMCIgdmlld0JveD0iMCAwIDMxMCAzMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMTAiIGhlaWdodD0iMzEwIiBmaWxsPSIjRkY4QzAwIi8+CjxwYXRoIGQ9Ik0yMCAxMEgxNDBWMzBIMjBWMTBaIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjIwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+SEVBUTE8L3RleHQ+Cjx0ZXh0IHg9IjIwIiB5PSI0NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSIjRkZGIj5ERVNJUUUKS1MgT048L3RleHQ+CjxyZWN0IHg9IjIwIiB5PSI2MCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiNGRkYiIG9wYWNpdHk9IjAuMiIvPgo8Y2lyY2xlIGN4PSI5NSIgY3k9IjEzNSIgcj0iNDAiIGZpbGw9IiMzMzMiLz4KPGNpcmNsZSBjeD0iMjEwIiBjeT0iMTM1IiByPSI0MCIgZmlsbD0iIzMzMyIvPgo8L3N2Zz4=",
      name: 'Desire Walks On',
      artist: 'Heart',
      format: 'Vinyl',
      price: 25.99,
      genre: 'Rock',
      type: 'Classic',
      isNew: false,
      onSale: false
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1518113067859-a4d5e0d5dc81?w=310&h=310&fit=crop',
      name: 'Classic Rock Album',
      artist: 'Rock Band',
      format: 'CD',
      price: 15.99,
      genre: 'Rock',
      type: 'Classic',
      isNew: false,
      onSale: true
    },
    {
      id: 3,
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEwIiBoZWlnaHQ9IjMxMCIgdmlld0JveD0iMCAwIDMxMCAzMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMTAiIGhlaWdodD0iMzEwIiBmaWxsPSIjRkY4QzAwIi8+CjxwYXRoIGQ9Ik0yMCAxMEgxNDBWMzBIMjBWMTBaIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjIwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+SEVBUTE8L3RleHQ+Cjx0ZXh0IHg9IjIwIiB5PSI0NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSIjRkZGIj5ERVNJUUUKS1MgT048L3RleHQ+CjxyZWN0IHg9IjIwIiB5PSI2MCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiNGRkYiIG9wYWNpdHk9IjAuMiIvPgo8Y2lyY2xlIGN4PSI5NSIgY3k9IjEzNSIgcj0iNDAiIGZpbGw9IiMzMzMiLz4KPGNpcmNsZSBjeD0iMjEwIiBjeT0iMTM1IiByPSI0MCIgZmlsbD0iIzMzMyIvPgo8L3N2Zz4=",
      name: 'Jazz Collection',
      artist: 'Miles Davis',
      format: 'Vinyl',
      price: 35.99,
      genre: 'Jazz',
      type: 'Elegant',
      isNew: false,
      onSale: false
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1518113067859-a4d5e0d5dc81?w=310&h=310&fit=crop',
      name: 'Electronic Vibes',
      artist: 'Daft Punk',
      format: 'Digital',
      price: 9.99,
      genre: 'Electronic',
      type: 'Casual',
      isNew: true,
      onSale: false
    },
    {
      id: 5,
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEwIiBoZWlnaHQ9IjMxMCIgdmlld0JveD0iMCAwIDMxMCAzMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMTAiIGhlaWdodD0iMzEwIiBmaWxsPSIjRkY4QzAwIi8+CjxwYXRoIGQ9Ik0yMCAxMEgxNDBWMzBIMjBWMTBaIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjIwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+SEVBUTE8L3RleHQ+Cjx0ZXh0IHg9IjIwIiB5PSI0NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSIjRkZGIj5ERVNJUUUKS1MgT048L3RleHQ+CjxyZWN0IHg9IjIwIiB5PSI2MCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiNGRkYiIG9wYWNpdHk9IjAuMiIvPgo8Y2lyY2xlIGN4PSI5NSIgY3k9IjEzNSIgcj0iNDAiIGZpbGw9IiMzMzMiLz4KPGNpcmNsZSBjeD0iMjEwIiBjeT0iMTM1IiByPSI0MCIgZmlsbD0iIzMzMyIvPgo8L3N2Zz4=",
      name: 'Pop Hits',
      artist: 'Taylor Swift',
      format: 'CD',
      price: 18.99,
      genre: 'Pop',
      type: 'Casual',
      isNew: true,
      onSale: false
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1518113067859-a4d5e0d5dc81?w=310&h=310&fit=crop',
      name: 'Blues Legend',
      artist: 'B.B. King',
      format: 'Vinyl',
      price: 28.99,
      genre: 'Blues',
      type: 'Classic',
      isNew: false,
      onSale: true
    },
    {
      id: 7,
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEwIiBoZWlnaHQ9IjMxMCIgdmlld0JveD0iMCAwIDMxMCAzMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMTAiIGhlaWdodD0iMzEwIiBmaWxsPSIjRkY4QzAwIi8+CjxwYXRoIGQ9Ik0yMCAxMEgxNDBWMzBIMjBWMTBaIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjIwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+SEVBUTE8L3RleHQ+Cjx0ZXh0IHg9IjIwIiB5PSI0NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSIjRkZGIj5ERVNJUUUKS1MgT048L3RleHQ+CjxyZWN0IHg9IjIwIiB5PSI2MCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiNGRkYiIG9wYWNpdHk9IjAuMiIvPgo8Y2lyY2xlIGN4PSI5NSIgY3k9IjEzNSIgcj0iNDAiIGZpbGw9IiMzMzMiLz4KPGNpcmNsZSBjeD0iMjEwIiBjeT0iMTM1IiByPSI0MCIgZmlsbD0iIzMzMyIvPgo8L3N2Zz4=",
      name: 'Country Roads',
      artist: 'Johnny Cash',
      format: 'CD',
      price: 22.99,
      genre: 'Country',
      type: 'Classic',
      isNew: false,
      onSale: false
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1518113067859-a4d5e0d5dc81?w=310&h=310&fit=crop',
      name: 'Hip Hop Classics',
      artist: 'Wu-Tang Clan',
      format: 'Vinyl',
      price: 31.99,
      genre: 'Hip Hop',
      type: 'Sport',
      isNew: false,
      onSale: false
    },
    {
      id: 9,
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEwIiBoZWlnaHQ9IjMxMCIgdmlld0JveD0iMCAwIDMxMCAzMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMTAiIGhlaWdodD0iMzEwIiBmaWxsPSIjRkY4QzAwIi8+CjxwYXRoIGQ9Ik0yMCAxMEgxNDBWMzBIMjBWMTBaIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjIwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+SEVBUTE8L3RleHQ+Cjx0ZXh0IHg9IjIwIiB5PSI0NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSIjRkZGIj5ERVNJUUUKS1MgT048L3RleHQ+CjxyZWN0IHg9IjIwIiB5PSI2MCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiNGRkYiIG9wYWNpdHk9IjAuMiIvPgo8Y2lyY2xlIGN4PSI5NSIgY3k9IjEzNSIgcj0iNDAiIGZpbGw9IiMzMzMiLz4KPGNpcmNsZSBjeD0iMjEwIiBjeT0iMTM1IiByPSI0MCIgZmlsbD0iIzMzMyIvPgo8L3N2Zz4=",
      name: 'Reggae Roots',
      artist: 'Bob Marley',
      format: 'CD',
      price: 19.99,
      genre: 'Reggae',
      type: 'Casual',
      isNew: false,
      onSale: true
    }
  ];

  // Get unique values for filters
  const genres = [...new Set(products.map(p => p.genre))];
  const formats = [...new Set(products.map(p => p.format))];
  const artists = [...new Set(products.map(p => p.artist))];
  const types = [...new Set(products.map(p => p.type))];

  // Filter and search products
 useEffect(() => {
  let filtered = products.filter(product => {
    // Genre filter
    const matchesGenre = selectedGenres.length === 0 || selectedGenres.includes(product.genre);

    // Format filter
    const matchesFormat = selectedFormats.length === 0 || selectedFormats.includes(product.format);

    // Artist filter
    const matchesArtist = selectedArtists.length === 0 || selectedArtists.includes(product.artist);

    // Type filter
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(product.type);

    // Price filter
    const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;

    // Other filters
    const matchesOther = selectedOther.length === 0 || 
                        (selectedOther.includes('On sale') && product.onSale) ||
                        (selectedOther.includes('New') && product.isNew);
      
      return matchesGenre && matchesFormat && matchesArtist && 
             matchesType && matchesPrice && matchesOther ;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Keep original order (position)
        break;
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [ sortBy, selectedGenres, selectedFormats, selectedArtists, selectedTypes, selectedOther, priceRange, artistSearch]);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleGenreFilter = (genre) => {
    setSelectedGenres(prev => 
      prev.includes(genre) 
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  const handleFormatFilter = (format) => {
    setSelectedFormats(prev => 
      prev.includes(format) 
        ? prev.filter(f => f !== format)
        : [...prev, format]
    );
  };

  const handleArtistFilter = (artist) => {
    setSelectedArtists(prev => 
      prev.includes(artist) 
        ? prev.filter(a => a !== artist)
        : [...prev, artist]
    );
  };

  const handleTypeFilter = (type) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleOtherFilter = (option) => {
    setSelectedOther(prev => 
      prev.includes(option) 
        ? prev.filter(o => o !== option)
        : [...prev, option]
    );
  };
  //
  const handlePriceInputChange = (type, value) => {
  const numValue = parseInt(value.replace('$', '')) || 0;
  
  if (type === 'min') {
    setPriceRange(prev => ({
      ...prev,
      min: Math.max(0, Math.min(numValue, prev.max - 1))
    }));
  } else if (type === 'max') {
    setPriceRange(prev => ({
      ...prev,
      max: Math.min(50, Math.max(numValue, prev.min + 1))
    }));
  }
};

const handleInputKeyPress = (e, type) => {
  if (e.key === 'Enter') {
    e.target.blur();
  }
};

const formatPriceInput = (value) => {
  return value.toString().replace(/[^0-9]/g, '');
};
//
  const handleMouseDown = useCallback((thumb) => (e) => {
  e.preventDefault();
  setIsDragging(thumb);
}, []);

const handleMouseMove = useCallback((e) => {
  if (!isDragging || !sliderRef.current) return;

  const rect = sliderRef.current.getBoundingClientRect();
  const percentage = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  const value = Math.round(0 + percentage * (50 - 0));

  if (isDragging === 'min') {
    setPriceRange(prev => ({ 
      ...prev, 
      min: Math.min(value, prev.max - 1) 
    }));
  } else if (isDragging === 'max') {
    setPriceRange(prev => ({ 
      ...prev, 
      max: Math.max(value, prev.min + 1) 
    }));
  }
}, [isDragging, setPriceRange]);

const handleMouseUp = useCallback(() => {
  setIsDragging(null);
}, []);

useEffect(() => {
  if (isDragging) {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }
}, [isDragging, handleMouseMove, handleMouseUp]);
//
  const addToCart = (product) => {
    console.log('Added to cart:', product);
  };

  const quickView = (product) => {
    console.log('Quick view:', product);
  };

  const addToWishlist = (product) => {
    console.log('Added to wishlist:', product);
  };

  const ProductCard = ({ product, addToCart, addToWishlist, quickView }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
        />
        <div className="product-actions">
          <button 
            className="action-btn"
            onClick={() =>  addToCart(product)}
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
            onClick={() => quickView(product)}
            title="Quick View"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
          <button 
            className={`action-btn ${product.isWishlisted ? 'wishlisted' : ''}`}
            onClick={() => addToWishlist(product)}
            title="Add to Wishlist"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill={product.isWishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-artist">{product.artist}</p>
        <p className="product-format">{product.format}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

  const FilterSection = ({ title, id, children }) => (
    <div className="filter-section">
      <div className="filter-section-title" onClick={() => toggleSection(id)}>
        <span>{title}</span>
        <i className={`fas ${expandedSections[id] ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
      </div>
      {expandedSections[id] && (
        <div className="filter-content">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="container-fluid py-4">
      <style jsx>{`
        :root {
          --primary-red: #dc3545;
          --light-gray: #f8f9fa;
          --medium-gray: #6c757d;
          --dark-gray: #495057;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #fff;
        }

        .page-title {
          font-size: 2rem;
          font-weight: 300;
          color: var(--dark-gray);
          border-left: 4px solid var(--primary-red);
          padding-left: 15px;
          margin-bottom: 30px;
        }

        .filter-sidebar {
          background-color: var(--light-gray);
          padding: 20px;
          border-radius: 8px;
          height: fit-content;
        }

        .filter-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid #dee2e6;
        }

        .filter-title {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--dark-gray);
        }

        .filter-section {
          margin-bottom: 25px;
          border-bottom: 1px solid #e9ecef;
          padding-bottom: 20px;
        }

        .filter-section:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }

        .filter-section-title {
          font-size: 1rem;
          font-weight: 500;
          color: var(--dark-gray);
          margin-bottom: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }

        .filter-content {
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .filter-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          color: var(--medium-gray);
          cursor: pointer;
          transition: color 0.2s;
        }

        .filter-item:hover {
          color: var(--dark-gray);
        }

        .filter-item.active {
          color: var(--primary-red);
          font-weight: 500;
        }

        .price-range {
          margin: 20px 0;
        }

        .price-inputs {
          display: flex;
          gap: 10px;
          margin-top: 15px;
          box-sizing: border-box;
          
        }

        .price-input {
          flex: 1;
          padding: 8px 12px;
          border: 1px solid #dee2e6;
          border-radius: 4px;
          font-size: 0.9rem;
          text-align: center;
          transition: all 0.2s ease;
          min-width: 0;
          max-width: calc(50% - 4px);
        }

        .form-check {
          margin-bottom: 10px;
        }

        .form-check-input:checked {
          background-color: var(--primary-red);
          border-color: var(--primary-red);
        }

        .form-check-label {
          color: var(--medium-gray);
          cursor: pointer;
        }

        .search-input {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #dee2e6;
          border-radius: 4px;
          margin-bottom: 15px;
        }

        .products-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e9ecef;
          gap: 20px;
        }

        .search-bar {
          flex: 1;
          max-width: 400px;
        }

        .search-bar input {
          width: 100%;
          padding: 8px 15px;
          border: 1px solid #dee2e6;
          border-radius: 4px;
          font-size: 0.9rem;
        }

        .products-controls {
          display: flex;
          gap: 15px;
          align-items: center;
          flex-shrink: 0;
        }

        .products-controls select {
          padding: 8px 12px;
          border: 1px solid #dee2e6;
          border-radius: 4px;
          font-size: 0.9rem;
          min-width: 120px;
        }

        .product-card {
          width: 310px;
          height: 445px;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }

        .product-image-container {
          position: relative;
          width: 310px;
          height: 310px;
          overflow: hidden;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .product-card:hover .product-image {
          transform: scale(1.05);
        }

       .product-actions {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .product-card:hover .product-actions {
          opacity: 1;
          
        }

         .action-btn {
          width: 40px;
          height: 40px;
          border: none;
          border-radius: 50%;
          background: #fff;
          color: #333;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          transition: all 0.3s;
        }

        .action-btn:hover {
          background: var(--primary-red);
          color: white;
          transform: scale(1.1);
        }

        .product-info {
          padding: 20px;
          height: 135px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .product-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--dark-gray);
          margin-bottom: 5px;
          line-height: 1.3;
          text-align: center;
        }

        .product-artist {
          font-size: 0.9rem;
          color: var(--dark-gray);
          margin-bottom: 3px;
          text-align: center;
        }

        .product-format {
          font-size: 0.85rem;
          color: var(--medium-gray);
          margin-bottom: 10px;
          text-align: center;
        }

        .product-price {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--primary-red);
          text-align: center;
        }

        .pagination {
          justify-content: center;
          margin-top: 50px;
        }

        .page-link {
          color: var(--medium-gray);
          border: 1px solid #dee2e6;
          padding: 8px 12px;
        }

        .page-link:hover {
          color: var(--primary-red);
          background-color: var(--light-gray);
          border-color: var(--primary-red);
        }

        .page-item.active .page-link {
          background-color: var(--primary-red);
          border-color: var(--primary-red);
        }

        .aligned-row {
          align-items: flex-start;
          
        }
          .dual-range-container {
  position: relative;
  margin: 20px 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
}

.dual-range-track {
  position: relative;
  height: 6px;
  background-color: #e9ecef;
  border-radius: 3px;
  cursor: pointer;
  width: 100%;
  margin: 0 10px;
  box-sizing: border-box;
}

        .dual-range-fill {
          position: absolute;
          height: 100%;
          background-color: #E2352E;
          border-radius: 3px;
          top: 0;
        }

        .dual-range-thumb {
          position: absolute;
          width: 20px;
          height: 20px;
          background-color: #E2352E;
          border: 3px solid white;
          border-radius: 50%;
          cursor: grab;
          top: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          transition: all 0.2s ease;
          z-index: 2;

          
        }

        .dual-range-thumb:hover {
          transform: translate(-50%, -50%) scale(1.1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }

        .dual-range-thumb:active {
          cursor: grabbing;
          transform: translate(-50%, -50%) scale(1.2);
        }

        .price-labels {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          font-size: 0.8rem;
          color: #6c757d;
        }

        .price-input.editable {
          background-color: white;
          cursor: text;
        }

        .price-input.editable:hover {
          border-color: #E2352E;
        }

        .price-input.editable:focus {
          outline: none;
          border-color: #E2352E;
          box-shadow: 0 0 0 2px rgba(226, 53, 46, 0.2);
          background-color: white;
        }

        @media (max-width: 768px) {
          .filter-sidebar {
            margin-bottom: 30px;
          }
          
          .product-card {
            width: 100%;
            max-width: 310px;
            margin: 0 auto;
          }
          
          .products-header {
            flex-direction: column;
            gap: 15px;
            align-items: stretch;
          }

          .search-bar {
            max-width: 100%;
          }

          .products-controls {
            justify-content: space-between;
          }
            
  
}
          


}
        }
      `}</style>

      {/* Page Title */}
      <h1 className="page-title">NEW ARRIVAL</h1>

      <div className="row aligned-row">
        {/* Filter Sidebar */}
        <div className="col-lg-3 col-md-4">
          <div className="filter-sidebar">
            <div className="filter-header">
              <span className="filter-title">Filter</span>
              <i className="fas fa-sliders-h text-danger"></i>
            </div>

            <FilterSection title="Genre" id="genre">
              {genres.map(genre => (
                <div key={genre} className={`filter-item ${selectedGenres.includes(genre) ? 'active' : ''}`} onClick={() => handleGenreFilter(genre)}>
                  <span>{genre}</span>
                  <i className="fas fa-chevron-right"></i>
                </div>
              ))}
            </FilterSection>

<FilterSection title="Price" id="price">
  <div className="dual-range-container">
    <div className="dual-range-track" ref={sliderRef}>
      <div 
        className="dual-range-fill"
        style={{
          left: `${((priceRange.min - 0) / (50 - 0)) * 100}%`,
          width: `${((priceRange.max - priceRange.min) / (50 - 0)) * 100}%`
        }}
      />
      <div
        className="dual-range-thumb min-thumb"
        style={{ left: `${((priceRange.min - 0) / (50 - 0)) * 100}%` }}
        onMouseDown={handleMouseDown('min')}
      />
      <div
        className="dual-range-thumb max-thumb"
        style={{ left: `${((priceRange.max - 0) / (50 - 0)) * 100}%` }}
        onMouseDown={handleMouseDown('max')}
      />
    </div>
    
    <div className="price-labels">
      <span>$0</span>
      <span>$50</span>
    </div>
    
    <div className="price-inputs">
  <input 
    type="text" 
    className="price-input editable" 
    value={`$${priceRange.min}`}
    onChange={(e) => handlePriceInputChange('min', e.target.value)}
    onKeyPress={(e) => handleInputKeyPress(e, 'min')}
    placeholder="Min"
  />
  <input 
    type="text" 
    className="price-input editable" 
    value={`$${priceRange.max}`}
    onChange={(e) => handlePriceInputChange('max', e.target.value)}
    onKeyPress={(e) => handleInputKeyPress(e, 'max')}
    placeholder="Max"
  />
</div>
  </div>
</FilterSection>

            <FilterSection title="Format" id="format">
              {formats.map(format => (
                <div key={format} className="form-check">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id={format}
                    checked={selectedFormats.includes(format)}
                    onChange={() => handleFormatFilter(format)}
                  />
                  <label className="form-check-label" htmlFor={format}>{format}</label>
                </div>
              ))}
            </FilterSection>

            <FilterSection title="Artist" id="artist">
  <input 
    type="text" 
    className="search-input" 
    placeholder="Search artists" 
    value={artistSearch}
    onChange={(e) => setArtistSearch(e.target.value)}
  />
  {artists
    .filter(artist => 
      artistSearch === '' || 
      artist.toLowerCase().includes(artistSearch.toLowerCase())
    )
    .map(artist => (
      <div key={artist} className="form-check">
        <input 
          className="form-check-input" 
          type="checkbox" 
          id={`artist-${artist}`}
          checked={selectedArtists.includes(artist)}
          onChange={() => handleArtistFilter(artist)}
        />
        <label className="form-check-label" htmlFor={`artist-${artist}`}>{artist}</label>
      </div>
    ))
  }
</FilterSection>

            <FilterSection title="Types" id="types">
              {types.map(type => (
                <div key={type} className={`filter-item ${selectedTypes.includes(type) ? 'active' : ''}`} onClick={() => handleTypeFilter(type)}>
                  <span>{type}</span>
                  <i className="fas fa-chevron-right"></i>
                </div>
              ))}
            </FilterSection>

            <FilterSection title="Other" id="other">
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="onsale2"
                  checked={selectedOther.includes('On sale')}
                  onChange={() => handleOtherFilter('On sale')}
                />
                <label className="form-check-label" htmlFor="onsale2">On sale</label>
              </div>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="new2"
                  checked={selectedOther.includes('New')}
                  onChange={() => handleOtherFilter('New')}
                />
                <label className="form-check-label" htmlFor="new2">New</label>
              </div>
            </FilterSection>
          </div>
        </div>

        {/* Products Section */}
        <div className="col-lg-9 col-md-8">
          <div className="products-header">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="products-controls">
              <span>Show:</span>
              <select value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))}>
                <option value={35}>35 per page</option>
                <option value={50}>50 per page</option>
                <option value={100}>100 per page</option>
              </select>
              <span>Sort By:</span>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="position">Position</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
          </div>

          {/* Products Grid (ürün dizilimini kaydırmak için marginleft ekledim oradan ayarlanıyor*/}
           
<div className="row" style={{marginLeft: '15px'}}>
  {filteredProducts
    .filter(product => {
      // Search filter burada yapılıyor
      return product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
             product.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
             product.format.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .length > 0 ? (
      filteredProducts
        .filter(product => {
          return product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                 product.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
                 product.format.toLowerCase().includes(searchTerm.toLowerCase());
        })
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
    ) : (
      <div className="col-12 text-center py-5">
        <h4 className="text-muted">No products found matching your search.</h4>
      </div>
    )}
</div>

          {/* Pagination */}
          {filteredProducts.length > 0 && (
            <nav aria-label="Product pagination">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <i className="fas fa-chevron-left"></i> Previous
                  </a>
                </li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><span className="page-link">...</span></li>
                <li className="page-item"><a className="page-link" href="#">67</a></li>
                <li className="page-item"><a className="page-link" href="#">68</a></li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    Next <i className="fas fa-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};

export default EcommerceCollectionPage;
