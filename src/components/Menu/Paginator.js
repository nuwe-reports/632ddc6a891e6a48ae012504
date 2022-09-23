const Paginator = ({ prev, next, onPrev, onNext }) => {
    const handlePrev = () => {
      onPrev();
    };
    const handleNext = () => {
      onNext();
    };
  
    return (
      <nav>
        <ul className="paginator">
          {prev ? (
            <li className="page-item">
              <button className="login-button" onClick={handlePrev}>
                ANTERIOR
              </button>
            </li>
          ) : null}
          {next ? (
            <li className="page-item">
              <button className="login-button" onClick={handleNext}>
                SIGUIENTE
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    );
  };
  
  export default Paginator;
  