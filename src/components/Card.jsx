export function Card({ frase, error, refetch }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <h1>{frase}</h1>
      {error && <p>{error}</p>}
      <button onClick={refetch}>New Joke</button>
    </div>
  );
}
