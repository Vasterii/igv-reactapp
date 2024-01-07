import React, { useState } from 'react';
import Modal from 'react-modal';
import './GenomeVisualiser.css';
import IGVBrowser from './IGVBrowser';
import GenomeLoadModal from './GenomeLoadModal'

const GenomeVisualiser = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [genomeOptions, setGenomeOptions] = useState({});

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const loadGenomeByURL = (genomeURL, indexURL) => {
    let genomeOptions = {
      fastaURL: genomeURL,
      indexURL: indexURL
    }
    setGenomeOptions(genomeOptions);
  };

  React.useEffect(() => {
    loadGenomeByURL("http://bacregdb.bsu.by/tmp/NZ_CP024842.1_sequence.fasta", 
    "http://bacregdb.bsu.by/tmp/NZ_CP024842.1_sequence.fasta.fai");
  }, [])

  return (
    <div>
      <button onClick={openModal}>Загрузить URL генома</button>
      <Modal
        className="igv-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <GenomeLoadModal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          loadGenomeByURL={loadGenomeByURL}
        />
      </Modal>
      <IGVBrowser genomeOptions={genomeOptions} />
    </div>
  );
};

export default GenomeVisualiser;