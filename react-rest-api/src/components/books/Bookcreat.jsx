import { useContext, useEffect } from "react";
import BookContext from "../../Context/BookContext";

export const Bookcreat = () => {
  const { formValues, onChange, storeBook, errors, setErrors } =
    useContext(BookContext);
  useEffect(() => {
    setErrors({});
  }, []);
  return (
    <div className="mt-12">
      <form
        onSubmit={storeBook}
        className=" max-w-md mx-auto p-4 bg-white shadow-md rounded-sm"
      >
        <div className="space-y-6">
          <div className="mb-4">
            <label htmlFor="title" className="blockmb-2 text-sm font-medium">
              Title
            </label>
            <input
              name="title"
              value={formValues["title"]}
              onChange={onChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.title && (
              <span className="text-sm text-red-400">{errors.title[0]}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="author" className="blockmb-2 text-sm font-medium">
              Author
            </label>
            <input
              name="author"
              value={formValues["author"]}
              onChange={onChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.author && (
              <span className="text-sm text-red-400">{errors.author[0]}</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="publication_year"
              className="blockmb-2 text-sm font-medium"
            >
              Publication Year
            </label>
            <input
              name="publication_year"
              value={formValues["publication_year"]}
              onChange={onChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.publication_year && (
              <span className="text-sm text-red-400">
                {errors.publication_year[0]}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="ISBN" className="blockmb-2 text-sm font-medium">
              ISBN
            </label>
            <input
              name="ISBN"
              value={formValues["ISBN"]}
              onChange={onChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.ISBN && (
              <span className="text-sm text-red-400">{errors.ISBN[0]}</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="no_in_stock"
              className="blockmb-2 text-sm font-medium"
            >
              No In Stock
            </label>
            <input
              name="no_in_stock"
              value={formValues["no_in_stock"]}
              onChange={onChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.no_in_stock && (
              <span className="text-sm text-red-400">
                {errors.no_in_stock[0]}
              </span>
            )}
          </div>
          <div className="my-4">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md"
            >
              Store
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
