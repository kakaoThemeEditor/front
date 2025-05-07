import ProfileImg01 from "../../assets/Images/profileImg01@3x.png";

interface PreviewProfileProps {
  imageUrl?: string;
  name: string;
  size?: "sm" | "md" | "lg";
  description?: string;
  children?: React.ReactNode;
  avartarRounded?: string;
  descriptionColor?: string;
  nameColor?: string;
  isBottomBorder?: boolean;
  onClick?: () => void;
}

export const PreviewProfile = ({
  imageUrl = ProfileImg01,
  name,
  size = "lg",
  description,
  children,
  avartarRounded = "rounded-2xl",
  descriptionColor,
  nameColor,
  onClick,
}: PreviewProfileProps) => {
  let profileSize = "";
  if (size === "sm") {
    profileSize = "w-8 h-8";
  } else if (size === "md") {
    profileSize = "w-7 h-7 xl:w-8 xl:h-8";
  } else if (size === "lg") {
    profileSize = "w-8 h-8 xl:w-10 xl:h-10";
  }

  let nameSize = "";
  if (size === "sm") {
    nameSize = "text-xs";
  } else if (size === "md") {
    nameSize = "text-[10px] xl:text-xs";
  } else if (size === "lg") {
    nameSize = "text-xs xl:text-sm";
  }

  let descriptionSize = "";
  if (size === "sm") {
    descriptionSize = "text-[8px] xl:text-[10px]";
  } else if (size === "md") {
    descriptionSize = "text-[8px] xl:text-[10px] ";
  } else if (size === "lg") {
    descriptionSize = "text-[8px] xl:text-[10px]";
  }

  return (
    <>
      <div className="relative flex items-center gap-2" onClick={onClick}>
        <div className={`${profileSize} ${avartarRounded}`}>
          <img src={imageUrl} alt={name} className={`size-full object-cover ${avartarRounded}`} />
        </div>
        <div className="flex flex-col">
          <span className={`${nameSize} `} style={{ color: nameColor }}>
            {name}
          </span>
          {description && (
            <span className={`${descriptionSize} text-gray-500`} style={{ color: descriptionColor }}>
              {description}
            </span>
          )}
        </div>
        {children}
      </div>
    </>
  );
};
