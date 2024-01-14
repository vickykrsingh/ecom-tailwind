import React from "react";
import { MdOutlineSearch } from "react-icons/md";

function Search() {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn bg-transparent shadow-none border-none"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        <MdOutlineSearch size={25} />
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex items-center justify-center flex-col gap-5 w-11/12 max-w-5xl">
            <form className="flex flex-col gap-4">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">What is your name?</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <button type="submit" className="btn btn-neutral">
                Search
              </button>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Search;
