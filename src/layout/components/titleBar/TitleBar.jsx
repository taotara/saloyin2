import './titleBar.css';
// import PropTypes from "prop-types";

function TitleBar({ titleBg, title }) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1)),url(${titleBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="page-title"
    >
      <div className="container">
        <div className="title">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default TitleBar