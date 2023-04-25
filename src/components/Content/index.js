import React from 'react';
import { useParedeData } from '../../config/Parades';
import Card from '../card/Card';
import Modal from '../Modal';
import './style.css';

function Content() {
  const { paredes } = useParedeData();

  return (
    <div className="content">
      {paredes.map(parede =>
        <Card paredeId={parede.id} key={parede.id} />
      )}
      <div className="div-modal">
        <Modal />
      </div>
    </div>
  )
}

export default Content