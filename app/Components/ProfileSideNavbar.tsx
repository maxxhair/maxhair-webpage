import React from "react";

interface Props {
  activeOption: string;
  setNavOption: (option: string) => void;
}

const ProfileSideNavbar: React.FC<Props> = ({ activeOption, setNavOption }) => {
  const NavOptions = ["orders", "addresses", "wishlists", "account settings"];

  return (
    <div className="w-1/4 h-36 sticky top-40 flex flex-col">
      <table className="w-full border border-gray-200">
        <tbody>
          {NavOptions.map((option) => (
            <tr
              className={
                option === activeOption
                  ? "bg-pink-100 cursor-pointer"
                  : "border-t border-gray-200 cursor-pointer"
              }
              key={option}
              onClick={() => setNavOption(option)}
            >
              <td className="p-4">
                <p className="capitalize">{option}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileSideNavbar;
