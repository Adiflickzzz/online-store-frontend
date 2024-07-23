import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/uitls/api";

export default function Home({ products }) {
  return (
    <main className=" mt-4 md:mt-0">
      <div className="px-0 md:px-5">
        <Banner />
      </div>
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-[40px] md:my-[50px]">
          <div className="text-[28px] md:text-[34px] mb-3 font-bold leading-tight">
            Cushioning for Your Miles
          </div>
          <div className="text-md font-smeibold text-gray-600 md:text-xl">
            A lightweight Nike ZoomX midesole is combined with increased stack
            heights to help provide cushioning during extendted stretches of
            Running .
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 my-14 md:px-0">
          {products?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
        </div>
      </Wrapper>
    </main>
  );
}

export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  return {
    props: { products },
  };
}
