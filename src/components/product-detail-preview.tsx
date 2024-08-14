import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  country: string;
  category: string;
  votes: number;
  image: string;
  rating: number;
  reviewCount: number;
  price: string;
  availability: string;
}

interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

interface SimilarProduct {
  id: number;
  name: string;
  country: string;
  votes: number;
  image: string;
}

const ProductDetailPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [similarProducts, setSimilarProducts] = useState<SimilarProduct[]>([]);
  const [isVoted, setIsVoted] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    // Fetch product data (replace with actual data fetching)
    setProduct({
      id: 1,
      name: "Pastéis de Nata",
      description: "A delicious Portuguese egg tart pastry.",
      country: "Portugal",
      category: "Dessert",
      votes: 1234,
      image: "/api/placeholder/300/200",
      rating: 4.8,
      reviewCount: 102,
      price: "$5",
      availability: "In Stock"
    });

    // Fetch reviews (replace with actual data fetching)
    setReviews([
      { id: 1, user: "TravelLover", rating: 5, comment: "Absolutely delicious! A must-try when in Portugal.", date: "2023-06-15" },
      { id: 2, user: "FoodieExplorer", rating: 4, comment: "Great taste, but a bit too sweet for me.", date: "2023-06-10" },
    ]);

    // Fetch similar products (replace with actual data fetching)
    setSimilarProducts([
      { id: 2, name: "Francesinha", country: "Portugal", votes: 4567, image: "/api/placeholder/100/100" },
      { id: 3, name: "Bacalhau", country: "Portugal", votes: 4123, image: "/api/placeholder/100/100" },
    ]);
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div style={styles.productGrid}>
        <div>
          <img src={product.image} alt={product.name} style={styles.productImage} />
        </div>
        <div>
          <h1 style={styles.productName}>{product.name}</h1>
          <p style={styles.productCountry}>{product.country}</p>
          <div style={styles.ratingContainer}>
            <span style={styles.starIcon}>★</span>
            <span style={styles.rating}>{product.rating}</span>
            <span style={styles.reviewCount}>({product.reviewCount} reviews)</span>
          </div>
          <p style={styles.description}>{product.description}</p>
          <div style={styles.buttonContainer}>
            <button style={isVoted ? styles.votedButton : styles.voteButton}>
              👍 {isVoted ? 'Voted' : 'Vote'} ({product.votes})
            </button>
            <button style={isWishlisted ? styles.wishlistedButton : styles.wishlistButton}>
              ❤️ {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
            </button>
            <button style={styles.outlineButton}>Buy Now - {product.price}</button>
          </div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Product Details</h2>
            <div style={styles.productDetailsGrid}>
              <div>
                <p style={styles.detailLabel}>Category</p>
                <p>{product.category}</p>
              </div>
              <div>
                <p style={styles.detailLabel}>Price</p>
                <p>{product.price}</p>
              </div>
              <div>
                <p style={styles.detailLabel}>Availability</p>
                <p>{product.availability}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Customer Reviews</h2>
        {reviews.map(review => (
          <div key={review.id} style={styles.review}>
            <div style={styles.reviewHeader}>
              <div style={styles.avatar}>{review.user[0]}</div>
              <div>
                <p style={styles.reviewUser}>{review.user}</p>
                <div style={styles.reviewRating}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={i < review.rating ? styles.starIcon : styles.emptyStar}>★</span>
                  ))}
                  <span style={styles.reviewDate}>{review.date}</span>
                </div>
              </div>
            </div>
            <p style={styles.reviewComment}>{review.comment}</p>
          </div>
        ))}
        <button style={styles.reviewButton}>💬 Write a Review</button>
      </div>

      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Similar Products</h2>
        {similarProducts.map(product => (
          <div key={product.id} style={styles.similarProduct}>
            <img src={product.image} alt={product.name} style={styles.similarProductImage} />
            <div>
              <p style={styles.similarProductName}>{product.name}</p>
              <p style={styles.similarProductCountry}>{product.country}</p>
              <div style={styles.similarProductVotes}>
                👍 {product.votes}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  productGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  productName: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  productCountry: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '10px',
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  starIcon: {
    color: '#ffd700',
    marginRight: '5px',
  },
  rating: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginRight: '5px',
  },
  reviewCount: {
    fontSize: '14px',
    color: '#666',
  },
  description: {
    fontSize: '16px',
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  voteButton: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  votedButton: {
    backgroundColor: '#ccc',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
  },
  wishlistButton: {
    backgroundColor: '#ff7f50',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  wishlistedButton: {
    backgroundColor: '#ccc',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
  },
  outlineButton: {
    backgroundColor: 'white',
    color: '#333',
    border: '1px solid #ccc',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    marginTop: '20px',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  productDetailsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
  },
  detailLabel: {
    fontWeight: 'bold',
  },
  review: {
    borderBottom: '1px solid #ddd',
    paddingBottom: '15px',
    marginBottom: '15px',
  },
  reviewHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#007bff',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10px',
    fontWeight: 'bold',
    fontSize: '18px',
  },
  reviewUser: {
    fontWeight: 'bold',
  },
  reviewRating: {
    display: 'flex',
    alignItems: 'center',
  },
  emptyStar: {
    color: '#ddd',
    marginRight: '5px',
  },
  reviewDate: {
    fontSize: '12px',
    color: '#666',
    marginLeft: '10px',
  },
  reviewComment: {
    fontSize: '14px',
    color: '#333',
  },
  reviewButton: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  similarProduct: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #ddd',
    paddingBottom: '15px',
    marginBottom: '15px',
  },
  similarProductImage: {
    width: '60px',
    height: '60px',
    borderRadius: '8px',
    marginRight: '10px',
  },
  similarProductName: {
    fontWeight: 'bold',
    fontSize: '16px',
    marginBottom: '5px',
  },
  similarProductCountry: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '5px',
  },
  similarProductVotes: {
    display: 'flex',
    alignItems: 'center',
  },
};

export default ProductDetailPage;
