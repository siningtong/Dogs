import React, { Component } from "react";
import { Link } from "react-router-dom";
class DogDetials extends Component {
  render() {
    let { dog } = this.props;
    return (
      <div className="container">
        <div className="DogDetials row justify-content-center">
          <div className="col-11 col-lg-5">
            <div className="DogDetials-card card">
              <img src={dog.src} class="card-img-top" alt={dog.name}></img>
              <div class="card-body">
                <h2 class="card-title">{dog.name}</h2>
                <h4 className="card-subtitle text-muted">
                  {dog.age} years old
                </h4>
              </div>
              <ul class="list-group list-group-flush">
                {dog.facts.map((f, i) => (
                  <li class="list-group-item" key={i}>
                    {f}
                  </li>
                ))}
              </ul>
              <div class="card-body">
                <Link to="/dogs" className="btn btn-info">
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DogDetials;
