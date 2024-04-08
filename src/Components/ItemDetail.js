import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from './Header';

function ItemDetail(props) {
  const { id } = useParams();
  const selectedItem = props.items.find(item => item.id === parseInt(id, 10));

  if (!selectedItem) {
    return <div>Товар не найден.</div>;
  }

  return (
    <div>
        <Header/>
        <div className='ImagesPageItem'>
        <img className='PageItem' src={selectedItem.img} alt={selectedItem.name} />
        <img className='PageItem2' src={selectedItem.img2} alt={selectedItem.alt2} />
        <img className='PageItem2' src={selectedItem.img3} alt={selectedItem.alt3} />
        </div>
        <div className='TextDiv'>
      <h1 className='NameItemPage'>{selectedItem.name}</h1> 
      <p className='TextItemPage'>{selectedItem.text}</p>
      <p className='PriceItemPage'>{selectedItem.price}</p>
      <Link to={'/PageItem'} >  
      <button className='TovarButtonPage'>
        <text className='TovarButtonText'> Связаться для заказа</text>
      </button>
      </Link>
      
    </div>
    <div className='TechnicalСharacteristics'>
    <p className='TechnicalСharacteristicstext' dangerouslySetInnerHTML={{__html: selectedItem.TCH}}></p>
    </div>
      </div>
  
  );
}

export default ItemDetail;