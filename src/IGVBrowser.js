import igv from 'igv/dist/igv.esm.js';
import React from 'react';
import './GenomeVisualiser.css';

const IGVBrowser = ({ genomeOptions }) => {
    const igvContainerRef = React.useRef(null);
    const igvBrowserRef = React.useRef(null);
    const [browserLoaded, setBrowserLoaded] = React.useState(false);
    
    React.useEffect(() => {  
      const igvOptions = {
        ...genomeOptions,
      };
      
      if (igvBrowserRef.current === null) {
        igvBrowserRef.current = igv
          .createBrowser(igvContainerRef.current, igvOptions)
          .then(function (browser) {
            igv.browser = browser;
          setBrowserLoaded(true)
        });
      } else if (browserLoaded && genomeOptions.fastaURL && genomeOptions.indexURL) {
        igv.browser.loadGenome({
          "fastaURL": genomeOptions.fastaURL,
          "indexURL": genomeOptions.indexURL
        })
      }
    }, [genomeOptions, browserLoaded]);
  
    return (
      <div className="igv-browser-component">
        <div className="igv-container" ref={igvContainerRef}></div>
      </div>
    );
  };

  export default IGVBrowser;