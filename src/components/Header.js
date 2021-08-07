import "./Header.css";

const Header = ({ backgroundImage }) => {
  let bgStyle = {
    backgroundImage: `url('${backgroundImage}')`,
  };
  return (
    <div>
      <div
        id="background"
        style={backgroundImage === undefined ? null : bgStyle}
        key={backgroundImage}
      />
      <div id="title-text" className="text-center">
        Local Weather App
      </div>
    </div>
  );
};

export default Header;
