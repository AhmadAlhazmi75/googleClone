import WebSearchResults from "@/components/WebSearchResults";
import Link from "next/link";

async function WebSearchPage({ searchParams }) {
  const startIndex = searchParams.start || "1";
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=AIzaSyCS0WTTUi0H4Kzn_dnPkr1UJX9TITDsvjA&cx=8431191e24439478b
    &q=${searchParams.searchTerm}&start=${startIndex}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try searching for something else or go back to the homepage.{" "}
        </p>
        <Link className="text-blue-500" href="/">
          Home
        </Link>
      </div>
    );
  }
  return <>{results && <WebSearchResults results={data} />}</>;
}

export default WebSearchPage;
