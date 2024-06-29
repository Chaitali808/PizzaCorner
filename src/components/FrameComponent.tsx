import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "", specialityWidth }) => {
  const frameHeaderStyle = useMemo(() => {
    return {
      width: specialityWidth,
    };
  }, [specialityWidth]);

  return (
    <header className={`frame-container ${className}`} style={frameHeaderStyle}>
      <div className="frame-group">
        <div className="streamline-emojispizza-1-group">
          <img
            className="streamline-emojispizza-1-icon4"
            alt=""
            src="/streamlineemojispizza1.svg"
          />
          <img
            className="streamline-emojispizza-1-icon5"
            alt=""
            src="/streamlineemojispizza1.svg"
          />
        </div>
        <div className="speciality-wrapper">
          <div className="speciality2">
            <a className="home2">HOME</a>
            <a className="speciality3">SPECIALITY</a>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  specialityWidth: PropTypes.any,
};

export default FrameComponent;
