import {
  HomeIcon,
  NewspaperIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

export const Navigation = () => {
  return (
    <div className="flex justify-around">
      <div className="flex flex-col items-center">
        <HomeIcon className="w-8 h-8 text-gray-800" />
        <p className="text-[12px]">ホーム</p>
      </div>
      <div className="flex flex-col items-center text-gray-300">
        <NewspaperIcon className="w-8 h-8" />
        <p className="text-[12px]">コラム</p>
      </div>
      <div className="flex flex-col items-center text-gray-300">
        <ShoppingCartIcon className="w-8 h-8" />
        <p className="text-[12px]">通販</p>
      </div>
    </div>
  );
};
