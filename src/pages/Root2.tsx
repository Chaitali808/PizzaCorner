import { useCallback } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import { useNavigate } from "react-router-dom";
import "./Root2.css";

const Root2 = () => {
  const navigate = useNavigate();

  const onGalleryImageOneClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGalleryImageTwoClick = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  const onGalleryImageThreeClick = useCallback(() => {
    navigate("/3");
  }, [navigate]);

  return (
    <div className="root2">
      <img className="pizza-rotator-icon3" alt="" src="/pizza-rotator@2x.png" />
      <section className="about-contact">
        <a className="about-us3">ABOUT US</a>
        <a className="contact3">CONTACT</a>
        <div className="rectangle-group">
          <div className="frame-item" />
          <div className="frame-parent">
            <div className="streamline-emojispizza-1-parent">
              <img
                className="streamline-emojispizza-1-icon2"
                alt=""
                src="/streamlineemojispizza1.svg"
              />
              <img
                className="streamline-emojispizza-1-icon3"
                alt=""
                src="/streamlineemojispizza1.svg"
              />
            </div>
            <div className="home-speciality-wrapper">
              <div className="home-speciality">
                <a className="home1">HOME</a>
                <a className="speciality1">SPECIALITY</a>
              </div>
            </div>
          </div>
          <FrameComponent1 />
          <div className="gallery-row-wrapper">
            <div className="gallery-row">
              <div className="gallery-image-one-wrapper">
                <img
                  className="gallery-image-one"
                  loading="lazy"
                  alt=""
                  src="/033@2x.png"
                  onClick={onGalleryImageOneClick}
                />
              </div>
              <div className="gallery-image-two-wrapper">
                <img
                  className="gallery-image-two"
                  loading="lazy"
                  alt=""
                  src="/01@2x.png"
                  onClick={onGalleryImageTwoClick}
                />
              </div>
              <div className="gallery-image-three-wrapper">
                <img
                  className="gallery-image-three"
                  loading="lazy"
                  alt=""
                  src="/042@2x.png"
                  onClick={onGalleryImageThreeClick}
                />
              </div>
              <div className="gallery-image-four-parent">
                <img
                  className="gallery-image-four"
                  alt=""
                  src="/gallery-image-four@2x.png"
                />
                <div className="frame-inner" />
                <img className="image-icon10" alt="" src="/image@2x.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Root2;
