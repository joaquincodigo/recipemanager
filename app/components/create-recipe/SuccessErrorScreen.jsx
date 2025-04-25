export default function SuccessErrorScreen({ status }) {
  const styles = {};

  return <div>{status === "success" ? <p>Sucess</p> : <p>Error</p>}</div>;
}
