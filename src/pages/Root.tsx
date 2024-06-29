import GalleryRow from "../components/GalleryRow";
import "./Root.css";

const Root = () => {
  return (
    <div className="root">
      <section className="navigation">
        <img
          className="pizza-rotator-icon1"
          alt=""
          src="/pizza-rotator@2x.png"
        />
        <a className="about-us1">ABOUT US</a>
        <a className="contact1">CONTACT</a>
      </section>
      <section className="content">
        <div className="content-child" />
        <header className="header1">
          <div className="logo">
            <img
              className="streamline-emojispizza-1-icon"
              alt=""
              src="/streamlineemojispizza1.svg"
            />
            <img
              className="streamline-emojispizza-1-icon1"
              alt=""
              src="/streamlineemojispizza1.svg"
            />
          </div>
          <div className="menu">
            <div className="menu-options">
              <a className="home">HOME</a>
              <a className="speciality">SPECIALITY</a>
            </div>
            <img className="image-icon4" alt="" src="/image@2x.png" />
          </div>
        </header>
        <div className="special">
          <h3 className="todays-special1">Today’s Special</h3>
        </div>
        <div className="description">
          <div className="description-container">
            <h1 className="mushroom-flex-bacon-container1">
              <p className="mushroom-flex1">Mushroom Flex</p>
              <p className="bacon-pizza-with1">Bacon Pizza with Basil</p>
              <p className="pepperoni-pizza1">Pepperoni Pizza</p>
              <p className="italian-pizza1">Italian Pizza</p>
            </h1>
          </div>
        </div>
        <div className="savor-the-flavour-freshly-bak-wrapper">
          <div className="savor-the-flavour-container1">
            <p className="savor-the-flavour1">
              Savor the Flavour: Freshly Baked Pizzas Made Just for You.
            </p>
            <p className="blank-line1">&nbsp;</p>
            <p className="join-us-for1">
              Join us for a Slice of Heven, Where Every Bite is a Delight.
            </p>
          </div>
        </div>
        <div className="hero-background" />
        <div className="gallery">
          <GalleryRow />
        </div>
      </section>
    </div>
  );
};

export default Root;
