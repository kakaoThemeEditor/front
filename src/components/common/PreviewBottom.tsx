import MaintabBgImage from "../../assets/Images/maintabBgImage@2x.png";
import MainTabIcon1 from "../../assets/Images/maintabIcoFriends@2x.png";
import MainTabIcon2 from "../../assets/Images/maintabIcoShopping@2x.png";
import MainTabIcon3 from "../../assets/Images/maintabIcoCall@2x.png";
import MainTabIcon4 from "../../assets/Images/maintabIcoMore@2x.png";
import MainTabIcon5 from "../../assets/Images/maintabIcoView@2x.png";
export function PreviewBottom() {
  const imageList = [MainTabIcon1, MainTabIcon2, MainTabIcon3, MainTabIcon4, MainTabIcon5];
  return (
    <div
      className="relative flex h-16 xl:h-18 p-4 justify-between items-center w-full mt-auto rounded-b-2xl"
      style={{
        backgroundImage: `url(${MaintabBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute -left-4 top-2 w-6 h-6"></div>
      {imageList.map((image, index) => (
        <div
          key={index}
          className="relative w-8 h-8 xl:w-9 xl:h-9  rounded-full"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
    </div>
  );
}
