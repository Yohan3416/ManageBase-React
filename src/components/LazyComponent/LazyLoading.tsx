export default function LazyLoading(props: { title: string }) {
  return (
    <div id="loadingRoot">
      <div className="loader-container">
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}
