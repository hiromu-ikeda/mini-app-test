import { NewspaperIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";

export const Navigation = () => {
  return (
    <div className="flex justify-around py-2">
      <div className="flex flex-col items-center">
        <HomeIcon className="w-7 h-7 text-gray-700 p-1 rounded-[50%]" />
        <p className="text-[12px] text-gray-700">ホーム</p>
      </div>
      <div className="flex flex-col items-center text-gray-300">
        <NewspaperIcon className="w-7 h-7 p-1" />
        <p className="text-[12px]">コラム</p>
      </div>
      <div className="flex flex-col items-center text-gray-300">
        <ShoppingCartIcon className="w-7 h-7 p-1" />
        <p className="text-[12px]">通販</p>
      </div>
    </div>
  );
};
