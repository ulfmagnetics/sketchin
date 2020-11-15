class Matrix {
  state = {
    data: []
  };

  initialize() {
    console.log("matrix initialized");
  }

  render() {
    const { data } = this.state;

    return <h1>this is your matrix</h1>;
  }
}

export default Matrix;
