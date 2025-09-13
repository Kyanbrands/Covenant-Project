import Link from "next/link";

type SubItem = {
  text: string;
  route: string;
};

type ProductDropdownProps = {
  items: SubItem[];
  isOpen: boolean;
};

const ProductDropdown = ({ items, isOpen }: ProductDropdownProps) => {
  return (
    <div
      className={`
        absolute top-full mt-3 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
        transition-all duration-300 ease-in-out
        ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }
      `}
    >
      <div className="py-1">
        {items.map((item) => (
          <Link
            key={item.route}
            href={item.route}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductDropdown;
