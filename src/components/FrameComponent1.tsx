import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`frame-div ${className}`}>
      <div className="todays-special-group">
        <h3 className="todays-special3">Today’s Special</h3>
        <div className="frame-parent1">
          <div className="mushroom-flex-bacon-with-basil-wrapper">
            <header className="mushroom-flex-bacon-container3">
              <p className="mushroom-flex3">Mushroom Flex</p>
              <p className="bacon-with-basil">Bacon with basil</p>
              <p className="pepperoni-pizza3">Pepperoni Pizza</p>
              <p className="italian-pizza3">Italian Pizza</p>
            </header>
          </div>
          <div className="frame-wrapper1">
            <div className="savor-the-flavour-freshly-bak-container">
              <div className="savor-the-flavour-container3">
                <p className="savor-the-flavour3">
                  Savor the Flavour: Freshly Baked Pizzas Made Just for You.
                </p>
                <p className="blank-line3">&nbsp;</p>
                <p className="join-us-for3">
                  Join us for a Slice of Heven, Where Every Bite is a Delight.
                </p>
              </div>
              <div className="image-row2">
                <img className="image-1-icon" alt="" src="/image-1@2x.png" />
                <img className="icon3" loading="lazy" alt="" src="/3@2x.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
