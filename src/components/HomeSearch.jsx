"use client";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useState } from "react";

async function wordFetch() {
  const res = await fetch("https://random-word-api.herokuapp.com/word");
  return await res.json();
}

function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false); // [1]
  const router = useRouter();

  async function randomSearch() {
    setRandomSearchLoading(true);
    const randomWord = await wordFetch();
    if (!randomWord) return;
    router.push(`/search/web?searchTerm=${randomWord}`);
    setRandomSearchLoading(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim) return;
    router.push(`/search/web?searchTerm=${input}`);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border focus-within:shadow-md sm:max-w-xl lg:max-w-2xl border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow duration-300"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow focus:outline-none "
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity-80"
        >
          {randomSearchLoading ? (
            <img src="spinner.svg" className="h-6 text-center " />
          ) : (
            "I'm Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}

export default HomeSearch;
