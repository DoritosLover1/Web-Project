/**
 * Cart utility functions for managing cart operations
 */

/**
 * Update the quantity of a specific item in the cart
 * @param {Array} items - Current cart items
 * @param {number} id - Item ID to update
 * @param {number} newQuantity - New quantity value
 * @returns {Array} Updated cart items array
 */
export const updateQuantity = (items, id, newQuantity) => {
  if (newQuantity < 1) return items;
  
  return items.map(item =>
    item.id === id ? { ...item, quantity: newQuantity } : item
  );
};

/**
 * Remove an item from the cart
 * @param {Array} items - Current cart items
 * @param {number} id - Item ID to remove
 * @returns {Array} Updated cart items array without the removed item
 */
export const removeItem = (items, id) => {
  return items.filter(item => item.id !== id);
};

/**
 * Calculate the subtotal of all items in the cart
 * @param {Array} items - Cart items array
 * @returns {number} Subtotal amount
 */
export const calculateSub = (items) => {
  return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
};

/**
 * Calculate the total shipping cost for all items
 * @param {Array} items - Cart items array
 * @returns {number} Total shipping cost
 */
export const calculateTotalShipping = (items) => {
  return items.reduce((sum, item) => 
    sum + (typeof item.shipping === 'number' ? item.shipping : 0), 0
  );
};

/**
 * Calculate the grand total (subtotal + shipping)
 * @param {number} subtotal - Subtotal amount
 * @param {number} shipping - Total shipping cost
 * @returns {number} Grand total amount
 */
export const calculateGrandTotal = (subtotal, shipping) => {
  return subtotal + shipping;
};

/**
 * Apply a discount coupon to the cart
 * @param {string} couponCode - Coupon code to apply
 * @param {number} subtotal - Current subtotal
 * @returns {Object} Object containing discount amount and new total
 */
export const applyCoupon = (couponCode, subtotal) => {
  // Predefined coupon codes and their discount percentages
  const coupons = {
    'SAVE10': 0.10,
    'SAVE20': 0.20,
    'WELCOME': 0.15,
    'STUDENT': 0.25
  };

  const discountPercentage = coupons[couponCode.toUpperCase()] || 0;
  const discountAmount = subtotal * discountPercentage;
  const newSubtotal = subtotal - discountAmount;

  return {
    isValid: discountPercentage > 0,
    discountPercentage: discountPercentage * 100,
    discountAmount,
    newSubtotal: Math.max(0, newSubtotal)
  };
};

/**
 * Format price to display with proper currency formatting
 * @param {number} price - Price to format
 * @param {string} currency - Currency symbol (default: '$')
 * @returns {string} Formatted price string
 */
export const formatPrice = (price, currency = '$') => {
  return `${currency}${price.toFixed(2)}`;
};

/**
 * Validate cart item data
 * @param {Object} item - Cart item to validate
 * @returns {boolean} True if item is valid
 */
export const validateCartItem = (item) => {
  return (
    item &&
    typeof item.id === 'number' &&
    typeof item.name === 'string' &&
    typeof item.price === 'number' &&
    typeof item.quantity === 'number' &&
    item.price > 0 &&
    item.quantity > 0
  );
};

/**
 * Get cart statistics
 * @param {Array} items - Cart items array
 * @returns {Object} Cart statistics object
 */
export const getCartStats = (items) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const uniqueItems = items.length;
  const subtotal = calculateSub(items);
  const shipping = calculateTotalShipping(items);
  const total = calculateGrandTotal(subtotal, shipping);

  return {
    totalItems,
    uniqueItems,
    subtotal,
    shipping,
    total,
    isEmpty: items.length === 0
  };
};

/**
 * Save cart to localStorage (for persistence)
 * @param {Array} items - Cart items to save
 */
export const saveCartToStorage = (items) => {
  try {
    localStorage.setItem('shopping_cart', JSON.stringify(items));
  } catch (error) {
    console.error('Failed to save cart to localStorage:', error);
  }
};

/**
 * Load cart from localStorage
 * @returns {Array} Cart items from storage or empty array
 */
export const loadCartFromStorage = () => {
  try {
    const saved = localStorage.getItem('shopping_cart');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Failed to load cart from localStorage:', error);
    return [];
  }
};

/**
 * Clear cart from localStorage
 */
export const clearCartFromStorage = () => {
  try {
    localStorage.removeItem('shopping_cart');
  } catch (error) {
    console.error('Failed to clear cart from localStorage:', error);
  }
};