import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const ProductCard = ({ product, onAddToCart, onToggleWishlist, onQuickView }) => {
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
            onClick={() => onAddToCart(product)}
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
            onClick={() => onQuickView(product)}
            title="Quick View"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
          <button 
            className={`action-btn ${product.isWishlisted ? 'wishlisted' : ''}`}
            onClick={() => onToggleWishlist(product)}
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

const CollectionPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(35);
  const [sortBy, setSortBy] = useState('Position');
  const [currentPage, setCurrentPage] = useState(1);

  // Sample product data
  const [products] = useState([
    {
      id: 1,
      name: "Desire Walks On",
      artist: "Heart",
      format: "Vinyl",
      price: 0.00,
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEwIiBoZWlnaHQ9IjMxMCIgdmlld0JveD0iMCAwIDMxMCAzMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMTAiIGhlaWdodD0iMzEwIiBmaWxsPSIjRkY4QzAwIi8+CjxwYXRoIGQ9Ik0yMCAxMEgxNDBWMzBIMjBWMTBaIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjIwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+SEVBUTE8L3RleHQ+Cjx0ZXh0IHg9IjIwIiB5PSI0NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSIjRkZGIj5ERVNJUUUKS1MgT048L3RleHQ+CjxyZWN0IHg9IjIwIiB5PSI2MCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiNGRkYiIG9wYWNpdHk9IjAuMiIvPgo8Y2lyY2xlIGN4PSI5NSIgY3k9IjEzNSIgcj0iNDAiIGZpbGw9IiMzMzMiLz4KPGNpcmNsZSBjeD0iMjEwIiBjeT0iMTM1IiByPSI0MCIgZmlsbD0iIzMzMyIvPgo8L3N2Zz4=",
      isWishlisted: false
    },
    {
      id: 2,
      name: "Lorem Ipsum",
      artist: "Lorem Ipsum",
      format: "Lorem Ipsum",
      price: 0.00,
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEwIiBoZWlnaHQ9IjMxMCIgdmlld0JveD0iMCAwIDMxMCAzMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMTAiIGhlaWdodD0iMzEwIiBmaWxsPSIjRjVGNUY1Ii8+Cjx0ZXh0IHg9IjE1NSIgeT0iMTU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4=",
      isWishlisted: false
    },
    {
      id: 3,
      name: "Lorem Ipsum",
      artist: "Lorem Ipsum",
      format: "Lorem Ipsum",
      price: 0.00,
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEwIiBoZWlnaHQ9IjMxMCIgdmlld0JveD0iMCAwIDMxMCAzMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMTAiIGhlaWdodD0iMzEwIiBmaWxsPSIjRjVGNUY1Ii8+Cjx0ZXh0IHg9IjE1NSIgeT0iMTU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4=",
      isWishlisted: false
    },
    {
      id: 4,
      name: "Lorem Ipsum",
      artist: "Lorem Ipsum",
      format: "Lorem Ipsum",
      price: 0.00,
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEwIiBoZWlnaHQ9IjMxMCIgdmlld0JveD0iMCAwIDMxMCAzMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMTAiIGhlaWdodD0iMzEwIiBmaWxsPSIjRjVGNUY1Ii8+Cjx0ZXh0IHg9IjE1NSIgeT0iMTU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4=",
      isWishlisted: false
    },
    {
      id: 5,
      name: "Lorem Ipsum",
      artist: "Lorem Ipsum",
      format: "Lorem Ipsum",
      price: 0.00,
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEwIiBoZWlnaHQ9IjMxMCIgdmlld0JveD0iMCAwIDMxMCAzMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMTAiIGhlaWdodD0iMzEwIiBmaWxsPSIjRjVGNUY1Ii8+Cjx0ZXh0IHg9IjE1NSIgeT0iMTU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4=",
      isWishlisted: false
    },
    {
      id: 6,
      name: "Lorem Ipsum",
      artist: "Lorem Ipsum",
      format: "Lorem Ipsum",
      price: 0.00,
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEwIiBoZWlnaHQ9IjMxMCIgdmlld0JveD0iMCAwIDMxMCAzMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMTAiIGhlaWdodD0iMzEwIiBmaWxsPSIjRjVGNUY1Ii8+Cjx0ZXh0IHg9IjE1NSIgeT0iMTU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4=",
      isWishlisted: false
    },
    {
      id: 7,
      name: "Desire Walks On",
      artist: "Heart",
      format: "Vinyl",
      price: 0.00,
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEwIiBoZWlnaHQ9IjMxMCIgdmlld0JveD0iMCAwIDMxMCAzMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMTAiIGhlaWdodD0iMzEwIiBmaWxsPSIjRkY4QzAwIi8+CjxwYXRoIGQ9Ik0yMCAxMEgxNDBWMzBIMjBWMTBaIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjIwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRiI+SEVBUTE8L3RleHQ+Cjx0ZXh0IHg9IjIwIiB5PSI0NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSIjRkZGIj5ERVNJUUUKS1MgT048L3RleHQ+CjxyZWN0IHg9IjIwIiB5PSI2MCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiNGRkYiIG9wYWNpdHk9IjAuMiIvPgo8Y2lyY2xlIGN4PSI5NSIgY3k9IjEzNSIgcj0iNDAiIGZpbGw9IiMzMzMiLz4KPGNpcmNsZSBjeD0iMjEwIiBjeT0iMTM1IiByPSI0MCIgZmlsbD0iIzMzMyIvPgo8L3N2Zz4=",
      isWishlisted: false
    },
    {
      id: 8,
      name: "Lorem Ipsum",
      artist: "Lorem Ipsum",
      format: "Lorem Ipsum",
      price: 0.00,
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEwIiBoZWlnaHQ9IjMxMCIgdmlld0JveD0iMCAwIDMxMCAzMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMTAiIGhlaWdodD0iMzEwIiBmaWxsPSIjRjVGNUY1Ii8+Cjx0ZXh0IHg9IjE1NSIgeT0iMTU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4=",
      isWishlisted: false
    },
    {
      id: 9,
      name: "Lorem Ipsum",
      artist: "Lorem Ipsum",
      format: "Lorem Ipsum",
      price: 0.00,
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEwIiBoZWlnaHQ9IjMxMCIgdmlld0JveD0iMCAwIDMxMCAzMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMTAiIGhlaWdodD0iMzEwIiBmaWxsPSIjRjVGNUY1Ii8+Cjx0ZXh0IHg9IjE1NSIgeT0iMTU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4=",
      isWishlisted: false
    }
  ]);

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
  };

  const handleToggleWishlist = (product) => {
    console.log('Toggled wishlist:', product);
  };

  const handleQuickView = (product) => {
    console.log('Quick view:', product);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPaginationItems = () => {
    const items = [];
    const maxVisible = 5;
    
    // Previous button
    items.push(
      <button
        key="prev"
        className={`page-btn ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt; Previous
      </button>
    );

    // Page numbers
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);

    if (endPage - startPage + 1 < maxVisible) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <button
          key={i}
          className={`page-btn ${i === currentPage ? 'active' : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    // Add ellipsis and last page if needed
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        items.push(<span key="ellipsis" className="page-ellipsis">...</span>);
      }
      items.push(
        <button
          key={totalPages}
          className={`page-btn ${totalPages === currentPage ? 'active' : ''}`}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    // Next button
    items.push(
      <button
        key="next"
        className={`page-btn ${currentPage === totalPages ? 'disabled' : ''}`}
        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next &gt;
      </button>
    );

    return items;
  };

  return (
    <div className="collection-page">
      <style jsx>{`
      
        .collection-page {
        
          font-family: Arial, sans-serif;
          width: 100%;
          min-height: 100vh;
          padding: 20px;
          background-color: white;
          box-sizing: border-box;
        }

        .page-header {
          margin-bottom: 30px;
        }

        .page-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #333;
          margin: 0;
          position: relative;
          padding-left: 15px;
        }

        .page-title::before {
        
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 4px;
          height: 100%;
          background-color: #e74c3c;
        }

        .filters-container {
        padding-left: 300px;  
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          gap: 20px;
          flex-wrap: wrap;
        }

        .search-container {
          flex: 1;
          max-width: 400px;
          position: relative;
        }

        .search-input {
          width: 100%;
          padding: 12px 20px 12px 45px;
          border: 1px solid #ddd;
          border-radius: 25px;
          font-size: 14px;
          background-color: #fff;
          outline: none;
          transition: border-color 0.3s;
        }

        .search-input:focus {
          border-color: #E2352E;
        }

        .search-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #999;
        }

        .filter-controls {
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .filter-label {
          font-size: 14px;
          color: #666;
          white-space: nowrap;
        }

        .filter-select {
          padding: 8px 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
          background-color: #fff;
          cursor: pointer;
          outline: none;
        }

        .products-grid {
        padding-left: 300px; 
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 40px;
          justify-content: flex-start;
        }

        .product-card {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
          width: 310px;
          height: 445px;
          flex-shrink: 0;
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
          width: 310px;
          height: 310px;
          object-fit: cover;
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
          background: #E2352E;
          color: #fff;
          transform: scale(1.1);
        }

        .action-btn.wishlisted {
          background: #e74c3c;
          color: #fff;
        }

        .action-btn svg {
          width: 18px;
          height: 18px;
        }

        .product-info {
          padding: 20px;
          height: 135px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .product-name {
          font-size: 16px;
          font-weight: bold;
          color: #333;
          margin: 0 0 5px 0;
          text-align: center;
        }

        .product-artist {
          font-size: 14px;
          color: #666;
          margin: 0 0 5px 0;
          text-align: center;
        }

        .product-format {
          font-size: 12px;
          color: #999;
          margin: 0 0 10px 0;
          text-align: center;
        }

        .product-price {
          font-size: 18px;
          font-weight: bold;
          color: #E2352E;
          margin: 0;
          text-align: center;
        }

        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
          margin-top: 40px;
        }

        .page-btn {
          padding: 8px 12px;
          border: 1px solid #ddd;
          background: #fff;
          color: #333;
          cursor: pointer;
          border-radius: 4px;
          font-size: 14px;
          transition: all 0.3s;
        }

        .page-btn:hover:not(.disabled) {
          background: #;
          color: #fff;
          border-color: #E2352E;
        }

        .page-btn.active {
          background: #e74c3c;
          color: #fff;
          border-color: #e74c3c;
        }

        .page-btn.disabled {
          background: #f8f9fa;
          color: #999;
          cursor: not-allowed;
        }

        .page-ellipsis {
          padding: 8px 4px;
          color: #999;
        }

        @media (max-width: 768px) {
          .filters-container {
            flex-direction: column;
            align-items: stretch;
          }

          .filter-controls {
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 10px;
          }

          .products-grid {
            justify-content: center;
          }
        }

        @media (min-width: 769px) {
          .products-grid {
            justify-content: flex-start;
          }
        }

        /* Responsive grid - calculate how many cards fit per row */
        @media (min-width: 350px) and (max-width: 689px) {
          .products-grid {
            justify-content: center;
          }
        }

        @media (min-width: 690px) and (max-width: 1019px) {
          .products-grid {
            justify-content: flex-start;
          }
        }

        @media (min-width: 1020px) and (max-width: 1349px) {
          .products-grid {
            justify-content: flex-start;
          }
        }

        @media (min-width: 1350px) {
          .products-grid {
            justify-content: flex-start;
          }
        }
      `}</style>

      <div className="page-header">
        <h1 className="page-title">NEW ARRIVAL</h1>
      </div>

      <div className="filters-container">
        <div className="search-container">
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="filter-controls">
          <div className="filter-group">
            <span className="filter-label">Show:</span>
            <select 
              className="filter-select"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
            >
              <option value={15}>15 per page</option>
              <option value={25}>25 per page</option>
              <option value={35}>35 per page</option>
              <option value={50}>50 per page</option>
            </select>
          </div>

          <div className="filter-group">
            <span className="filter-label">Sort By:</span>
            <select 
              className="filter-select"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="Position">Position</option>
              <option value="Name">Name</option>
              <option value="Price">Price</option>
              <option value="Date">Date</option>
            </select>
          </div>
        </div>
      </div>

      <div className="products-grid">
        {currentProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            onQuickView={handleQuickView}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {renderPaginationItems()}
        </div>
      )}
    </div>
  );
};

export default CollectionPage;