import { FaStar } from "react-icons/fa";
import "./reviewsPopup.css";
const ReviewsPopup = ({ selected, closeModal }) => {
  const starArray = [...Array(5).keys()].map(i => i + 1)
  return (
    <div className="reviews-popup">
      <div className="popup-details">
        <button className="closeModal-btn" onClick={closeModal}>
          X
        </button>
        <h1 className="popup-name">{selected.name|| selected.display_name || "Client"}</h1>
        {selected.describe_yourself && (<small>{selected.describe_yourself}</small>)}
        <h1 className="popup-subtitle">{selected.comment}</h1>
        <div className="popup-rating">
        {starArray.map((item, index) => (
          <FaStar key={index} color= {selected.rating >= item ? "var(--primary-color)" : "lightgrey"} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPopup;
