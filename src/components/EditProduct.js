import React, { Component } from "react";

class EditProduct extends Component {
  constructor(props) {
    super(props);
    const { id, name, description, price } = props.location.state.product;
    this.state = {
      id,
      name,
      description,
      price,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Name and price fields are mandatory!");
      return;
    }
    this.props.updateProductHandler(this.state);
    this.setState({ name: "", description: "", price: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="ui main add">
        <h2>Edit Product</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Description</label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Price</label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={this.state.price}
              onChange={(e) => this.setState({ price: e.target.value })}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditProduct;
