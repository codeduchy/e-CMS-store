import { cn } from "@/libs/utils";
import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import Image from "next/image";

type GalleryTabProps = {
  image: ImageType;
};

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center">
      {({ selected }) => (
        <span
          className={cn(
            "absolute inset-0 ring-2 ring-offset-2 rounded-sm overflow-hidden",
            selected
              ? " inset-0 ring-2 ring-offset-2 ring-black/90"
              : "ring-transparent"
          )}
        >
          <Image
            fill
            src={image.url}
            alt=""
            className="object-cover object-center rounded-md"
          />
        </span>
      )}
    </Tab>
  );
};

export default GalleryTab;
