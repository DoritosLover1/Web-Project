import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronRight, Search, Filter } from 'lucide-react';

const EcommerceFilter = () => {
  const [expandedSections, setExpandedSections] = useState({
    genre: true,
    price: true,
    format: true,
    artist: true,
    types: true,
    other: true
  });

  const [priceRange, setPriceRange] = useState([70, 600]);
  const [selectedFilters, setSelectedFilters] = useState({
    genre: [],
    format: [],
    artist: ['Formal (evening)'],
    types: [],
    other: []
  });

  const [searchTerm, setSearchTerm] = useState('');

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleCheckboxChange = (section, item) => {
    setSelectedFilters(prev => ({
      ...prev,
      [section]: prev[section].includes(item)
        ? prev[section].filter(i => i !== item)
        : [...prev[section], item]
    }));
  };

  const handlePriceRangeChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(value);
    setPriceRange(newRange);
  };

  const genreItems = [
    'Tops', 'Printed T-shirts', 'Plain T-shirts', 'Kurti', 'Boxers',
    'Full sleeve T-shirts', 'Joggers', 'Payjamas', 'Jeans'
  ];

  const genreSubItems = {
    'Tops': ['Casual tops', 'Formal tops', 'Party wear'],
    'Printed T-shirts': ['Graphics', 'Text prints', 'Abstract'],
    'Plain T-shirts': ['Solid colors', 'Basic', 'Premium cotton'],
    'Kurti': ['Traditional', 'Modern', 'Party wear'],
    'Boxers': ['Cotton', 'Modal', 'Bamboo'],
    'Full sleeve T-shirts': ['Crew neck', 'V-neck', 'Henley'],
    'Joggers': ['Track pants', 'Slim fit', 'Regular fit'],
    'Payjamas': ['Cotton', 'Silk', 'Flannel'],
    'Jeans': ['Skinny', 'Regular', 'Relaxed fit']
  };

  const formatItems = [
    'Vinyl', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'
  ];

  const artistItems = [
    'Classic', 'Casual', 'Business', 'Sport', 'Elegant', 'Formal (evening)'
  ];

  const artistSubItems = {
    'Classic': ['Premium', 'Standard', 'Budget'],
    'Casual': ['Weekend', 'Daily wear', 'Relaxed fit'],
    'Business': ['Professional', 'Meeting wear', 'Office casual'],
    'Sport': ['Athletic', 'Training', 'Performance'],
    'Elegant': ['Luxury', 'Designer', 'Premium quality'],
    'Formal (evening)': ['On sale', 'New', 'Lorem ipsum']
  };

  const typesItems = [
    'Classic', 'Casual', 'Business', 'Sport', 'Elegant', 'Formal (evening)'
  ];

  const otherItems = [
    'On sale', 'New', 'Lorem ipsum', 'Lorem ipsum'
  ];

  const FilterSection = ({ title, items, section, hasSubItems = false, subItems = {} }) => (
    <div className="border-bottom pb-3 mb-3">
      <div className="row">
        <div className="col-12">
          <button
            onClick={() => toggleSection(section)}
            className="btn btn-link p-0 text-start w-100 d-flex justify-content-between align-items-center text-decoration-none"
            style={{ color: '#6c757d' }}
          >
            <h6 className="mb-0 fw-normal">{title}</h6>
            {expandedSections[section] ? 
              <ChevronUp size={16} className="text-muted" /> : 
              <ChevronDown size={16} className="text-muted" />
            }
          </button>
        </div>
      </div>
      
      {expandedSections[section] && (
        <div className="row mt-2">
          <div className="col-12">
            {items.map((item, index) => (
              <div key={index} className="mb-2">
                <div className="row">
                  <div className="col-12">
                    <div className="form-check d-flex justify-content-between align-items-center pe-2">
                      <div className="d-flex align-items-center flex-grow-1">
                        <input
                          type="checkbox"
                          className="form-check-input me-2"
                          id={`${section}-${index}`}
                          checked={selectedFilters[section].includes(item)}
                          onChange={() => handleCheckboxChange(section, item)}
                          style={{ accentColor: '#dc3545' }}
                        />
                        <label className="form-check-label small text-muted flex-grow-1" htmlFor={`${section}-${index}`}>
                          {item}
                        </label>
                      </div>
                      {hasSubItems && subItems[item] && (
                        <ChevronRight size={14} className="text-muted flex-shrink-0" />
                      )}
                    </div>
                  </div>
                </div>
                
                {hasSubItems && subItems[item] && selectedFilters[section].includes(item) && (
                  <div className="row mt-1">
                    <div className="col-12 ps-5">
                      {subItems[item].map((subItem, subIndex) => (
                        <div key={subIndex} className="form-check mb-1">
                          <input
                            type="checkbox"
                            className="form-check-input form-check-input-sm me-2"
                            id={`${section}-${index}-${subIndex}`}
                            style={{ accentColor: '#dc3545' }}
                          />
                          <label className="form-check-label " htmlFor={`${section}-${index}-${subIndex}`} style={{ fontSize: '0.75rem', color: '#6c757d' }}>
                            {subItem}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet" />
      <style>
        {`
          .price-slider {
            position: relative;
            height: 6px;
            background-color: #e9ecef;
            border-radius: 3px;
            margin: 15px 0;
          }
          .price-slider-track {
            position: absolute;
            height: 100%;
            background-color: #dc3545;
            border-radius: 3px;
          }
          .price-slider-thumb {
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: #dc3545;
            border: 2px solid #fff;
            border-radius: 50%;
            cursor: pointer;
            top: -7px;
            transform: translateX(-50%);
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }
          .price-slider-thumb:hover {
            background-color: #c82333;
          }
          .filter-arrow {
            min-width: 16px;
            flex-shrink: 0;
          }
        `}
      </style>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-12 col-md-3 col-lg-2">
            <div className="card border shadow-sm " style={{ width: '280px', maxWidth: '100%' }}>
              <div className="card-body p-4">
                {/* Header */}
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="card-title mb-0">Filter</h5>
                      <Filter size={20} className="text-danger" />
                    </div>
                  </div>
                </div>

                {/* Genre Section */}
                <FilterSection 
                  title="Genre" 
                  items={genreItems} 
                  section="genre" 
                  hasSubItems={true}
                  subItems={genreSubItems}
                />

                {/* Price Section */}
                <div className="border-bottom pb-3 mb-3">
                  <div className="row">
                    <div className="col-12">
                      <button
                        onClick={() => toggleSection('price')}
                        className="btn btn-link p-0 text-start w-100 d-flex justify-content-between align-items-center text-decoration-none"
                        style={{ color: '#6c757d' }}
                      >
                        <h6 className="mb-0 fw-normal">Price</h6>
                        {expandedSections.price ? 
                          <ChevronUp size={16} className="text-muted" /> : 
                          <ChevronDown size={16} className="text-muted" />
                        }
                      </button>
                    </div>
                  </div>
                  
                  {expandedSections.price && (
                    <div className="row mt-3">
                      <div className="col-12">
                        <div className="mb-3 position-relative">
                          <div 
                            className="price-slider"
                            onClick={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              const percentage = (e.clientX - rect.left) / rect.width;
                              const newValue = Math.round(percentage * 1000);
                              const newRange = [...priceRange];
                              
                              // Determine which thumb is closer
                              const distanceToMin = Math.abs(newValue - priceRange[0]);
                              const distanceToMax = Math.abs(newValue - priceRange[1]);
                              
                              if (distanceToMin < distanceToMax) {
                                newRange[0] = Math.min(newValue, priceRange[1] - 10);
                              } else {
                                newRange[1] = Math.max(newValue, priceRange[0] + 10);
                              }
                              
                              setPriceRange(newRange);
                            }}
                          >
                            <div 
                              className="price-slider-track"
                              style={{
                                left: `${(priceRange[0] / 1000) * 100}%`,
                                width: `${((priceRange[1] - priceRange[0]) / 1000) * 100}%`
                              }}
                            ></div>
                            <div 
                              className="price-slider-thumb"
                              style={{ left: `${(priceRange[0] / 1000) * 100}%` }}
                              onMouseDown={(e) => {
                                e.preventDefault();
                                const startX = e.clientX;
                                const startValue = priceRange[0];
                                
                                const handleMouseMove = (e) => {
                                  const deltaX = e.clientX - startX;
                                  const sliderWidth = e.target.closest('.price-slider').offsetWidth;
                                  const deltaValue = (deltaX / sliderWidth) * 1000;
                                  const newValue = Math.max(0, Math.min(priceRange[1] - 10, startValue + deltaValue));
                                  setPriceRange([Math.round(newValue), priceRange[1]]);
                                };
                                
                                const handleMouseUp = () => {
                                  document.removeEventListener('mousemove', handleMouseMove);
                                  document.removeEventListener('mouseup', handleMouseUp);
                                };
                                
                                document.addEventListener('mousemove', handleMouseMove);
                                document.addEventListener('mouseup', handleMouseUp);
                              }}
                            ></div>
                            <div 
                              className="price-slider-thumb"
                              style={{ left: `${(priceRange[1] / 1000) * 100}%` }}
                              onMouseDown={(e) => {
                                e.preventDefault();
                                const startX = e.clientX;
                                const startValue = priceRange[1];
                                
                                const handleMouseMove = (e) => {
                                  const deltaX = e.clientX - startX;
                                  const sliderWidth = e.target.closest('.price-slider').offsetWidth;
                                  const deltaValue = (deltaX / sliderWidth) * 1000;
                                  const newValue = Math.max(priceRange[0] + 10, Math.min(1000, startValue + deltaValue));
                                  setPriceRange([priceRange[0], Math.round(newValue)]);
                                };
                                
                                const handleMouseUp = () => {
                                  document.removeEventListener('mousemove', handleMouseMove);
                                  document.removeEventListener('mouseup', handleMouseUp);
                                };
                                
                                document.addEventListener('mousemove', handleMouseMove);
                                document.addEventListener('mouseup', handleMouseUp);
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="row g-2">
                          <div className="col-6">
                            <div className="input-group input-group-sm">
                              <span className="input-group-text">$</span>
                              <input
                                type="number"
                                className="form-control form-control-sm"
                                value={priceRange[0]}
                                onChange={(e) => handlePriceRangeChange(0, e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="input-group input-group-sm">
                              <span className="input-group-text">$</span>
                              <input
                                type="number"
                                className="form-control form-control-sm"
                                value={priceRange[1]}
                                onChange={(e) => handlePriceRangeChange(1, e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Format Section */}
                <FilterSection 
                  title="Format" 
                  items={formatItems} 
                  section="format" 
                />

                {/* Artist Section */}
                <div className="border-bottom pb-3 mb-3">
                  <div className="row">
                    <div className="col-12">
                      <button
                        onClick={() => toggleSection('artist')}
                        className="btn btn-link p-0 text-start w-100 d-flex justify-content-between align-items-center text-decoration-none"
                        style={{ color: '#6c757d' }}
                      >
                        <h6 className="mb-0 fw-normal">Artist</h6>
                        {expandedSections.artist ? 
                          <ChevronUp size={16} className="text-muted" /> : 
                          <ChevronDown size={16} className="text-muted" />
                        }
                      </button>
                    </div>
                  </div>
                  
                  {expandedSections.artist && (
                    <div className="row mt-2">
                      <div className="col-12">
                        <div className="input-group input-group-sm mb-3">
                          <span className="input-group-text">
                            <Search size={14} />
                          </span>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Search artists"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                        </div>
                        
                        <div>
                          {artistItems
                            .filter(item => 
                              item.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              (artistSubItems[item] && artistSubItems[item].some(subItem => 
                                subItem.toLowerCase().includes(searchTerm.toLowerCase())
                              ))
                            )
                            .map((item, index) => (
                              <div key={index} className="mb-2">
                                <div className="row">
                                  <div className="col-12">
                                    <div className="form-check d-flex justify-content-between align-items-center pe-2">
                                      <div className="d-flex align-items-center flex-grow-1">
                                        <input
                                          type="checkbox"
                                          className="form-check-input me-2"
                                          id={`artist-${index}`}
                                          checked={selectedFilters.artist.includes(item)}
                                          onChange={() => handleCheckboxChange('artist', item)}
                                          style={{ accentColor: '#dc3545' }}
                                        />
                                        <label className="form-check-label small text-muted flex-grow-1" htmlFor={`artist-${index}`}>
                                          {item}
                                        </label>
                                      </div>
                                      {artistSubItems[item] && (
                                        <ChevronRight size={14} className="text-muted filter-arrow" />
                                      )}
                                    </div>
                                  </div>
                                </div>
                                
                                {artistSubItems[item] && selectedFilters.artist.includes(item) && (
                                  <div className="row mt-1">
                                    <div className="col-12 ps-5">
                                      {artistSubItems[item]
                                        .filter(subItem => 
                                          searchTerm === '' || 
                                          subItem.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                          item.toLowerCase().includes(searchTerm.toLowerCase())
                                        )
                                        .map((subItem, subIndex) => (
                                          <div key={subIndex} className="form-check mb-1">
                                            <input
                                              type="checkbox"
                                              className="form-check-input form-check-input-sm me-2"
                                              id={`artist-${index}-${subIndex}`}
                                              style={{ accentColor: '#dc3545' }}
                                            />
                                            <label className="form-check-label " htmlFor={`artist-${index}-${subIndex}`} style={{ fontSize: '0.75rem', color: '#6c757d' }}>
                                              {subItem}
                                            </label>
                                          </div>
                                        ))
                                      }
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))
                          }
                          {artistItems.filter(item => 
                            item.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            (artistSubItems[item] && artistSubItems[item].some(subItem => 
                              subItem.toLowerCase().includes(searchTerm.toLowerCase())
                            ))
                          ).length === 0 && searchTerm && (
                            <div className="text-muted small py-2">No artists found</div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Types Section */}
                <FilterSection 
                  title="Types" 
                  items={typesItems} 
                  section="types" 
                />

                {/* Other Section */}
                <FilterSection 
                  title="Other" 
                  items={otherItems} 
                  section="other" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EcommerceFilter;