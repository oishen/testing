function Com({ fh1, lh1, span, p }) {
  return (
    <div id="div">
      <div>
        <h1>{fh1}</h1>
        <h1>
          <span>{span}</span> {lh1}
        </h1>
        <p>{p}</p>
      </div>
    </div>
  );
}

export default Com;
