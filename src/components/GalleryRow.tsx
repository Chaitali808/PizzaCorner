import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./GalleryRow.css";

const GalleryRow = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGalleryItemImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGalleryImageClick = useCallback(() => {
    navigate("/3");
  }, [navigate]);

  const onGalleryImageClick1 = useCallback(() => {
    navigate("/4");
  }, [navigate]);

  return (
    <div className={`gallery-row1 ${className}`}>
      <img
        className="gallery-item-icon"
        loading="lazy"
        alt=""
        src="/031@2x.png"
        onClick={onGalleryItemImageClick}
      />
      <div className="gallery-item">
        <img
          className="gallery-image-icon"
          loading="lazy"
          alt=""
          src="/011@2x.png"
        />
      </div>
      <div className="gallery-item1">
        <img
          className="gallery-image-icon1"
          loading="lazy"
          alt=""
          src="/04@2x.png"
          onClick={onGalleryImageClick}
        />
      </div>
      <div className="gallery-item2">
        <div className="gallery-row2">
          <img
            className="gallery-image-icon2"
            alt=""
            src="/gallery-image@2x.png"
            onClick={onGalleryImageClick1}
          />
          <img
            className="gallery-image-icon3"
            alt=""
            src="/gallery-image@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

GalleryRow.propTypes = {
  className: PropTypes.string,
};

export default GalleryRow;
