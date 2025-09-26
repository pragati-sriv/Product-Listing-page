import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Product Listing Page
        </h1>
        <ProductList />
      </main>
    </>
  );
}
