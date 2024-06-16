
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-secondary px-5 py-5 text-left mt-5">
      <div className="py-5 mt-5">
        <div className="col-lg-6 mx-auto mt-5">
          <h1 className="text-6xl font-bold text-white">
            Casey<br />
            Petersen
          </h1>
          <p className="text-2xl">
            Full Stack Developer, working with <br />
            <span className="text-green-500">Python, </span>
            <span className="text-blue-300">Flask,</span>
            <span className="text-orange-500">HTML5,</span>
            <span className="text-teal-500">CSS,</span>
            <span className="text-yellow-500">JS,</span> and
            <span className="gradient-text"> React</span>
          </p>

          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">
              Custom button
            </button>
            <button type="button" className="btn btn-outline-light btn-lg px-4">
              Secondary
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
