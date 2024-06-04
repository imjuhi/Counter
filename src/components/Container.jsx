const Container = ({ children }) => {
  return (
    <div className="my-container">
      <div class="card" style={{ width: "40%" }}>
        <div class="card-body">{children}</div>
      </div>
    </div>
  );
};
export default Container;
