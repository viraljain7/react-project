import { useEffect, useState } from "react";
import { Star, ShoppingCart, RefreshCw } from "lucide-react";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/randomproducts",
      );

      const data = await res.json();

      setProducts(data?.data?.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f7f7] px-8 py-14">
      {/* Header */}
      <div className="mx-auto mb-14 flex max-w-7xl items-center justify-between">
        <div>
          <h1 className="text-5xl font-black tracking-tight text-zinc-900">
            Premium Products
          </h1>

          <p className="mt-3 text-zinc-500">
            Modern ecommerce product showcase UI
          </p>
        </div>

        <button
          onClick={fetchProducts}
          disabled={loading}
          className="
            flex items-center gap-3
            rounded-2xl
            border border-zinc-200
            bg-white
            px-6 py-3
            text-sm font-semibold
            text-zinc-700
            shadow-sm
            transition-all duration-300
            hover:scale-105
            hover:shadow-lg
          "
        >
          <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </button>
      </div>

      {/* Products Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products?.slice(0, 8).map((product) => (
          <div
            key={product.id}
            className="
              group
              overflow-hidden
              rounded-[30px]
              bg-white
              shadow-[0_10px_40px_rgba(0,0,0,0.08)]
              transition-all duration-500
              hover:-translate-y-2
              hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)]
            "
          >
            {/* Image */}
            <div className="relative overflow-hidden bg-[#fafafa] p-8">
              {/* Discount */}
              <div
                className="
                  absolute left-5 top-5 z-20
                  rounded-full
                  bg-red-500
                  px-4 py-2
                  text-xs font-bold
                  text-white
                "
              >
                -{product.discountPercentage}%
              </div>

              {/* Product Image */}
              <img
                src={product.thumbnail}
                alt={product.title}
                className="
                  mx-auto
                  h-56
                  object-contain
                  transition-all duration-[5000ms]
                  group-hover:scale-110
                  group-hover:rotate-6
                "
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Brand */}
              <p className="text-xs font-semibold uppercase tracking-[4px] text-zinc-400">
                {product.brand}
              </p>

              {/* Title */}
              <h2
                className="
                  mt-3
                  line-clamp-2
                  text-2xl
                  font-black
                  leading-tight
                  tracking-tight
                  text-zinc-900
                "
              >
                {product.title}
              </h2>

              {/* Description */}
              <p className="mt-4 line-clamp-2 text-sm leading-6 text-zinc-500">
                {product.description}
              </p>

              {/* Rating */}
              <div className="mt-5 flex items-center gap-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                <span className="text-sm font-semibold text-zinc-700">
                  {product.rating}
                </span>

                <span className="text-sm text-zinc-400">
                  ({product.stock} left)
                </span>
              </div>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between">
                {/* Price */}
                <div>
                  <p className="text-3xl font-black text-zinc-900">
                    ${product.price}
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-[3px] text-zinc-400">
                    {product.category}
                  </p>
                </div>

                {/* Cart */}
                <button
                  className="
                    flex h-14 w-14 items-center justify-center
                    rounded-full
                    bg-zinc-900
                    text-white
                    transition-all
                    hover:scale-110
                  "
                >
                  <ShoppingCart className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty */}
      {!loading && products.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-zinc-500">No products found.</p>
        </div>
      )}
    </div>
  );
}

export default Products;
