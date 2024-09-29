import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [profile, setProfile] = useState({});
  const [products, setProducts] = useState([]);
  const [businesses, setBusinesses] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', quantity: '', bulkPrice: '', discountPrice: '' });

  useEffect(() => {
    // Fetch farmer profile, products, and businesses (mocked)
    const fetchData = async () => {
      // Replace with actual API calls
      const fetchedProfile = { name: 'John Doe', farmName: 'Doe Farms' };
      const fetchedProducts = [
        { id: 1, name: 'Tomatoes', description: 'Fresh organic tomatoes', quantity: 100, bulkPrice: 1.00, discountPrice: 0.80 },
        // Add more products
      ];
      const fetchedBusinesses = [
        { id: 1, name: 'Local Grocery', interest: 'Looking for fresh produce' },
        // Add more businesses
      ];

      setProfile(fetchedProfile);
      setProducts(fetchedProducts);
      setBusinesses(fetchedBusinesses);
    };

    fetchData();
  }, []);

  const handleAddProduct = () => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setNewProduct({ name: '', description: '', quantity: '', bulkPrice: '', discountPrice: '' });
  };

  return (
    <div className="dashboard">
      <h1>Welcome to CuisineToCrop, {profile.name}!</h1>
      <h2>Your Farm: {profile.farmName}</h2>
      
      <section>
        <h3>Add New Product</h3>
        <input 
          type="text" 
          placeholder="Product Name" 
          value={newProduct.name} 
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Description" 
          value={newProduct.description} 
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} 
        />
        <input 
          type="number" 
          placeholder="Quantity" 
          value={newProduct.quantity} 
          onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })} 
        />
        <input 
          type="number" 
          placeholder="Bulk Price" 
          value={newProduct.bulkPrice} 
          onChange={(e) => setNewProduct({ ...newProduct, bulkPrice: e.target.value })} 
        />
        <input 
          type="number" 
          placeholder="Discount Price" 
          value={newProduct.discountPrice} 
          onChange={(e) => setNewProduct({ ...newProduct, discountPrice: e.target.value })} 
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </section>

      <section>
        <h3>Your Products</h3>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong> - {product.description} <br />
              Quantity: {product.quantity} <br />
              Bulk Price: ${product.bulkPrice} | Discount Price: ${product.discountPrice}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Matched Businesses</h3>
        <ul>
          {businesses.map((business) => (
            <li key={business.id}>
              {business.name}: {business.interest}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
