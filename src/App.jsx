import { Card } from "./components/Card.jsx";
import useJoke from "./useJoke";

export default function App() {
  const { frase, error, refetch } = useJoke();
  return (
    <>
      <Card frase={frase} error={error} refetch={refetch} />
    </>
  );
}
