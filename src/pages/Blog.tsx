import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  const onImageClick1 = useCallback(() => {
    navigate("/3");
  }, [navigate]);

  const onImageClick2 = useCallback(() => {
    navigate("/4");
  }, [navigate]);

  return (
    <div className="blog">
      <section className="header">
        <a className="about-us">ABOUT US</a>
        <a className="contact">CONTACT</a>
        <div className="rectangle-parent">
          <div className="frame-child" />
          <FrameComponent />
          <div className="frame-wrapper">
            <div className="todays-special-parent">
              <h3 className="todays-special">Today’s Special</h3>
              <div className="mushroom-flex-bacon-pizza-with-wrapper">
                <h1 className="mushroom-flex-bacon-container">
                  <p className="mushroom-flex">Mushroom Flex</p>
                  <p className="bacon-pizza-with">
                    Bacon Pizza with Basil and Cheese
                  </p>
                  <p className="pepperoni-pizza">Pepperoni Pizza</p>
                  <p className="italian-pizza">Italian Pizza</p>
                </h1>
              </div>
            </div>
          </div>
          <div className="separator" />
          <div className="savor-the-flavour-freshly-bak-parent">
            <div className="savor-the-flavour-container">
              <p className="savor-the-flavour">
                Savor the Flavour: Freshly Baked Pizzas Made Just for You.
              </p>
              <p className="blank-line">&nbsp;</p>
              <p className="join-us-for">
                Join us for a Slice of Heven, Where Every Bite is a Delight.
              </p>
            </div>
            <div className="footer-images">
              <div className="image-one">
                <img
                  className="image-icon"
                  loading="lazy"
                  alt=""
                  src="/03@2x.png"
                />
              </div>
              <div className="image-two">
                <img
                  className="image-icon1"
                  loading="lazy"
                  alt=""
                  src="/01@2x.png"
                  onClick={onImageClick}
                />
              </div>
              <div className="image-three">
                <img
                  className="image-icon2"
                  loading="lazy"
                  alt=""
                  src="/04@2x.png"
                  onClick={onImageClick1}
                />
              </div>
              <div className="image-four">
                <img
                  className="image-icon3"
                  alt=""
                  src="/image@2x.png"
                  onClick={onImageClick2}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pizza-rotator-parent">
        <img
          className="pizza-rotator-icon"
          alt=""
          src="/pizza-rotator@2x.png"
        />
        <img className="icon" loading="lazy" alt="" src="/4@2x.png" />
        <img className="icon1" alt="" src="/3@2x.png" />
        <img className="icon2" loading="lazy" alt="" src="/2@2x.png" />
      </div>
    </div>
  );
};

export default Blog;
