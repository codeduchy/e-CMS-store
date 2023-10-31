import { Billboard as BillboardType } from "@/types";

type BillboardProps = {
  data: BillboardType;
};

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square sm:aspect md:aspect-[2.4/1] bg-cover"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="h-full flex justify-center items-center ">
          <h2 className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
