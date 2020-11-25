import { useState } from 'react'

const CodeSandbox = ({ src, height = '600px' }: { src: string; height: string }) => {
  const [showSandbox, setShowSandbox] = useState<boolean>(false)

  const treatedSrc = src.split('?').length
    ? `${src.split('?')[0]}?fontsize=14&hidenavigation=1&theme=dark`
    : `${src}?fontsize=14&hidenavigation=1&theme=dark`

  return (
    <div className="container">
      <div className="placeholder" />
      {showSandbox ? (
        <div className="sandbox-container">
          <iframe
            src={treatedSrc}
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </div>
      ) : (
        <div className="sandbox-loader">
          <p>
            This is a CodeSandbox. I don't load it upfront because it may be
            heavy.
          </p>
          <button onClick={() => setShowSandbox(true)}>Load Sandbox</button>
        </div>
      )}
      <style jsx>{`
        .container {
          margin: 20px 0;
        }
        .placeholder {
          height: ${showSandbox ? `calc(${height} + 40px)` : 'fit-content'};
        }
        .sandbox-container {
          width: 100vw;
          padding: 0 5%;
          position: absolute;
          left: 0;
          margin-top: calc(-${height} - 40px);
        }
        iframe {
          width: 100%;
          height: ${height};
          border: 0;
          border-radius: 4px;
          overflow: hidden;
        }
        .sandbox-loader {
          color: var(--grey-9);
          text-align: center;
        }
        .sandbox-loader {
          margin: 20px 0;
          padding: 60px 20px;
          background: var(--grey-1);
        }
        .sandbox-loader button {
          padding: 8px 14px;
          font-size: var(--fs-sm);
          border: none;
          background: rgb(64, 169, 243);
          color: white;
          cursor: pointer;
          margin-top: 20px;
        }
        .sandbox-loader button:hover {
          background: rgb(46, 150, 223);
        }
      `}</style>
    </div>
  )
};

export default CodeSandbox;
