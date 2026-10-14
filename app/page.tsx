import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";


export default function Home() {
  return (
    <main>
      <h1 className="text-2xl">Welcome to the Home page </h1>
      <Link href="/users" className="border-2 border-indigo-600  px-4 py-2 my-8 rounded btn btn-primary">Users</Link> <br />
      <ProductCard />
      <main >
    </main>
    </main>
  );
}
