export default () => {
  return (
    <div className="container">
      <div>
        <h1>Now</h1>
        <p>All there is.</p>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          height: 100vh;
          overflow-y: scroll;
          padding: 150.2px 40px 0;
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }
        h1 {
          font-size: var(--fs-lg);
          color: var(--grey-8);
        }
        p {
          font-size: var(--fs-md);
          color: var(--grey-6);
        }
      `}</style>
    </div>
  )
}
