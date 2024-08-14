import React, { useState } from 'react';
import axios from 'axios';
import '../index.css'; 

interface AddProductProps {
  addingTo: string;
  onAddProduct: (name: string, description: string, country: string, picturePath: string) => void; // Added picturePath
  onCancel: () => void;
}

const AddProduct: React.FC<AddProductProps> = ({ addingTo, onAddProduct, onCancel }) => {
  const [newProductName, setNewProductName] = useState('');
  const [newProductDescription, setNewProductDescription] = useState('');
  const [newProductCountry, setNewProductCountry] = useState('');
  const [picture, setPicture] = useState<File | null>(null);
  const [picturePreview, setPicturePreview] = useState<string | ArrayBuffer | null>(null);

  const handleAddProduct = async () => {
    if (!newProductName || (addingTo === 'globalFavorites' && (!newProductDescription || !newProductCountry))) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', newProductName);
      formData.append('description', newProductDescription);
      formData.append('country', newProductCountry);
      if (picture) {
        formData.append('picture', picture);
      }
  
      const response = await axios.post('http://85.241.217.184:3001/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Pass picturePath to onAddProduct
      onAddProduct(response.data.name, response.data.description, response.data.country, response.data.picturePath);
  
      // Reset form
      setNewProductName('');
      setNewProductDescription('');
      setNewProductCountry('');
      setPicture(null);
      setPicturePreview(null);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error message:', error.message);
        console.error('Axios error response data:', error.response?.data);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPicture(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPicturePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div>
          <h3 className="modal-title">Add New Product</h3>
          <div className="picture-upload inline-flex">            
            <input className='avatar'
              type="file"
              id="file-input"
              accept="image/*"
              style={{ display: 'none'}}
              onChange={handleFileChange}
            />
            <button className="upload-button" onClick={() => document.getElementById('file-input')?.click()}>
              Upload Picture
            </button>
            {picturePreview && (
              <img
                src={picturePreview as string}
                alt="Product Preview"
                className="picture-preview"
              />
            )}
          </div>
        </div>
        <div className="modal-body">
          <input
            type="text"
            placeholder="Product Name"
            className="input"
            value={newProductName}
            onChange={(e) => setNewProductName(e.target.value)}
          />
          {addingTo === 'globalFavorites' && (
            <>
              <input
                type="text"
                placeholder="Description"
                className="input"
                value={newProductDescription}
                onChange={(e) => setNewProductDescription(e.target.value)}
              />
              <input
                type="text"
                placeholder="Country"
                className="input"
                value={newProductCountry}
                onChange={(e) => setNewProductCountry(e.target.value)}
              />
            </>
          )}
        </div>
        <div className="modal-footer">
          <button className="add-button" onClick={handleAddProduct}>
            Add Product
          </button>
          <button className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
