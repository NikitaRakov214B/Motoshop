import React from "react";
import Header from "../Components/Header";
import ItemVisibility from "../Components/ItemVisibility";

class ListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          img: 'image1.png',
          name: 'KTM 250 SX F 2020',
          price: '1 369 900P',
        },
        {
          id: 2,
          img: 'image4.png',
          name: '1290 SUPER ADV R',
          price: '2 599 900P',
        },
        {
          id: 3,
          img: 'image9.png',
          name: '690 ENDURO R',
          price: '1 499 900P',
        },
      ]
    };
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <ItemVisibility items={this.state.items} />
      </div>
    );
  }}

export default ListItems;