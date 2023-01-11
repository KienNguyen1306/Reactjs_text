import { useSelector } from "react-redux";

function Header() {
  const nameUser = useSelector((state) => state.user);
  const qlyProduct = useSelector((state) => state.cart);
  return (
    <>
      <h1>ten:{nameUser.name}</h1>
      <h2>qly:{qlyProduct.qly}</h2>
    </>
  );
}

export default Header;
