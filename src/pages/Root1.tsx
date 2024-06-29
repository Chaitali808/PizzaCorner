import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";
import "./Root1.css";

const Root1 = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onImageClick1 = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  const onImageClick2 = useCallback(() => {
    navigate("/4");
  }, [navigate]);

  return (
    <div className="root1">
      <div className="navigation1">
        <div className="info">
          <img
            className="pizza-rotator-icon2"
            alt=""
            src="/pizza-rotator@2x.png"
          />
          <a className="about-us2">ABOUT US</a>
          <a className="contact2">CONTACT</a>
        </div>
        <img
          className="separator-icon"
          loading="lazy"
          alt=""
          src="/gallery-image@2x.png"
        />
      </div>
      <section className="content1">
        <div className="content-item" />
        <FrameComponent specialityWidth="638.8px" />
        <div className="content-inner" />
        <div className="promotion">
          <div className="special1">
            <h3 className="todays-special2">Today’s Special</h3>
          </div>
          <div className="pizza-description">
            <h1 className="mushroom-flex-bacon-container2">
              <p className="mushroom-flex2">Mushroom Flex</p>
              <p className="bacon-pizza-with2">Bacon Pizza with Basil</p>
              <p className="pepperoni-pizza2">Pepperoni Pizza</p>
              <p className="italian-pizza2">Italian Pizza</p>
            </h1>
          </div>
        </div>
        <div className="description1">
          <div className="savor-the-flavour-freshly-bak-group">
            <div className="savor-the-flavour-container2">
              <p className="savor-the-flavour2">
                Savor the Flavour: Freshly Baked Pizzas Made Just for You.
              </p>
              <p className="blank-line2">&nbsp;</p>
              <p className="join-us-for2">
                Join us for a Slice of Heven, Where Every Bite is a Delight.
              </p>
            </div>
            <div className="images">
              <div className="image-row">
                <div className="image-column">
                  <div className="image-placeholder">
                    <img
                      className="image-icon5"
                      loading="lazy"
                      alt=""
                      src="/032@2x.png"
                      onClick={onImageClick}
                    />
                  </div>
                  <div className="image-placeholder1">
                    <img
                      className="image-icon6"
                      loading="lazy"
                      alt=""
                      src="/012@2x.png"
                      onClick={onImageClick1}
                    />
                  </div>
                  <img
                    className="image-icon7"
                    loading="lazy"
                    alt=""
                    src="/041@2x.png"
                  />
                </div>
                <div className="image-row1">
                  <div className="image-column1">
                    <img
                      className="image-icon8"
                      alt=""
                      src="/image@2x.png"
                      onClick={onImageClick2}
                    />
                    <img className="image-icon9" alt="" src="/image@2x.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="separator-icon1" alt="" src="/3@2x.png" />
      </section>
    </div>
  );
};

export default Root1;
