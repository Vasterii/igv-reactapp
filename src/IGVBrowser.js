import igv from 'igv/dist/igv.esm.js';
import React from 'react';
import './GenomeVisualiser.css';

const IGVBrowser = ({ loadGenomeByURL, genomeOptions }) => {
    const igvContainerRef = React.useRef(null);
    const igvBrowserRef = React.useRef(null);
  
    React.useEffect(() => {
      const igvOptions = {
        ...genomeOptions,
      };
  
      if (igvBrowserRef.current === null) {
        igvBrowserRef.current = igv
          .createBrowser(igvContainerRef.current, igvOptions)
          .then(function (browser) {
            igv.browser = browser;
          });
      }

      if (igvBrowserRef.current !== null && genomeOptions.fastaURL && genomeOptions.indexURL) {
        igv.browser.loadGenome({
            "fastaURL": genomeOptions.fastaURL,
            "indexURL": genomeOptions.indexURL
        })
      }

    }, [genomeOptions]);
  
    return (
      <div className="igv-browser-component">
        <div className="igv-container" ref={igvContainerRef}></div>
      </div>
    );
  };

  export default IGVBrowser;