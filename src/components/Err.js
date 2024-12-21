function Err({ children, marginTop }) {
  return (
    <p
      style={{ color: "white", textAlign: "center", marginTop: { marginTop } }}
    >
      {children}
    </p>
  );
}

export default Err;
