import React, { useState } from 'react';
// import './Reviews.css'; // Import the CSS file

// Sample array of review data
const reviews = [
  { name: "Nisar Sulthan", date: "November 8, 2024", stars: 5, review: "Excellent service! Highly recommend. The team was very professional and delivered on time." },
  { name: "Mohammed Bakkar", date: "October 25, 2024", stars: 4, review: "Great experience overall. The product quality was good, but there was a slight delay in delivery." },
  { name: "Sathu Lee", date: "September 30, 2024", stars: 3, review: "Average experience. The service was decent but not exceptional." },
  { name: "Selvaraj", date: "August 15, 2024", stars: 5, review: "Fantastic! Couldn’t have asked for a better experience. Will use their services again." },
//   { name: "Rajesh", date: "July 10, 2024", stars: 2, review: "Not satisfied with the service. There were too many issues that needed resolving." },
//   { name: "Michael", date: "June 20, 2024", stars: 4, review: "Good service overall, but there is room for improvement." },
//   { name: "Rangaraj", date: "May 5, 2024", stars: 5, review: "Absolutely amazing experience! Highly recommended." },
  { name: "vasanth", date: "April 15, 2024", stars: 3, review: "It was okay. Some parts of the service were good, others not so much." },
  { name: "Mohammad Fahad", date: "March 30, 2024", stars: 4, review: "Very good service, but a bit expensive." },
  { name: "Jahir Hussain", date: "February 14, 2024", stars: 5, review: "Exceptional! Will definitely come back." },
];

// Main component to display reviews
const Reviews = () => {
  const [visibleReviews, setVisibleReviews] = useState(5); // State to manage the number of visible reviews

  // Helper function to display stars
  const renderStars = (stars) => {
    return "★".repeat(stars) + "☆".repeat(5 - stars);
  };

  // Function to load more reviews
  const loadMoreReviews = () => {
    setVisibleReviews((prev) => prev + 5);
  };

  // Function to hide reviews and reset to initial five
  const hideReviews = () => {
    setVisibleReviews(5);
  };

  return (
    <div className="reviews-container">
      {reviews.slice(0, visibleReviews).map((review, index) => (
        <div key={index} className="review-card">
          <div className="header">
            <h3 className="name">{review.name}</h3>
            <span className="date">{review.date}</span>
          </div>
          <div className="stars">{renderStars(review.stars)}</div>
          <p className="review-text ">{review.review}</p>
        </div>
      ))}
      <div className="button-container">
        {visibleReviews < reviews.length && (
          <button onClick={loadMoreReviews} className="load-more-button">
            Load More Reviews
          </button>
        )}
        {visibleReviews > 5 && (
          <button onClick={hideReviews} className="hide-reviews-button">
            Hide Reviews
          </button>
        )}
      </div>
    </div>
  );
};

export default Reviews;