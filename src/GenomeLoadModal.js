import React, { useState } from 'react';
import './GenomeVisualiser.css';

const GenomeLoadModal = ({ isOpen, closeModal, loadGenomeByURL }) => {
  const [genomeURL, setGenomeURL] = useState('');
  const [indexURL, setIndexURL] = useState('');

  const handleGenomeURLChange = (event) => {
    setGenomeURL(event.target.value);
  };

  const handleIndexURLChange = (event) => {
    setIndexURL(event.target.value);
  };

  const handleLoadGenome = () => {
    loadGenomeByURL(genomeURL, indexURL);
    closeModal();
  };

  return (
    <div className="genome-load-modal">
      <span className="modal-name-span">Загрузить геном</span>
      <div>
        <div className="genome-url-container">
          <span>Genome URL</span>
          <input
            className="genome-url"
            type="text"
            placeholder=".fasta file link..."
            value={genomeURL}
            onChange={handleGenomeURLChange}
          ></input>
        </div>
        <div className="index-url-container">
          <span>Index URL</span>
          <input
            className="index-url"
            type="text"
            placeholder=".fai file link..."
            value={indexURL}
            onChange={handleIndexURLChange}
          ></input>
        </div>
      </div>
      <div className="btn-group">
        <button onClick={handleLoadGenome}>Загрузить</button>
        <button onClick={closeModal}>Отмена</button>
      </div>
    </div>
  );
};

export default GenomeLoadModal;