import seacrhIcon from "../images/seacrhIcon.svg";
import addIcon from "../images/addIcon.svg";
import trashIcon from "../images/trashIcon.svg";
import { Link } from "@remix-run/react";

function createNote() {
  console.log("click");
}

export default function Index() {
  return (
    <>
      <h1 className="text-4xl font-bold">My Notes</h1>
      <label className="relative">
        <input
          type="search"
          className="w-full px-5 py-3 pr-10 mt-8 text-sm rounded-md bg-lightSecondary text-lightPlaceholder"
          placeholder="Search your notes here ..."
        ></input>
        <img
          src={seacrhIcon}
          className="absolute top-[50%] translate-y-[-50%] right-4"
          alt="search icon"
        />
      </label>
      <h2 className="mt-6 text-2xl font-semibold">Note List</h2>
      <div className="flex flex-col gap-5 mt-6">
        <div className="px-5 py-6 rounded-md bg-lightSecondary">
          <h3 className="text-lg font-medium">About this day</h3>
          <p className="mt-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            ultrices vehicula iaculis. Aliquam at accumsan leo. Proin in diam
            quam. Pellentesque habitant morbi ...
          </p>
        </div>
        <div className="px-5 py-6 rounded-md bg-lightSecondary">
          <h3 className="text-lg font-medium">About this day</h3>
          <p className="mt-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            ultrices vehicula iaculis. Aliquam at accumsan leo. Proin in diam
            quam. Pellentesque habitant morbi ...
          </p>
        </div>
      </div>
      <div className="fixed flex gap-5 bottom-3 right-5">
        <Link className="p-3 rounded-full bg-greenAccent" to={"/newNote"}>
          <img src={addIcon} alt="add icon" />
        </Link>
        <button className="p-3 rounded-full bg-redAccent">
          <img src={trashIcon} alt="trash icon" />
        </button>
      </div>
    </>
  );
}
