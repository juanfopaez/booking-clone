import { SearchParams } from "@/app/search/page";
import { resultData } from "@/constants";

interface Listing {
  id: number;
  src: string;
  link: string;
  title: string;
  description: string;
  rating_count: string;
  rating_word: string;
  rating?: string;
  price: string;
}
interface Result {
  content: {
    total_listings: number;
    listings: Listing[];
  };
}

export async function fetchResults({}: SearchParams) {
  const response = new Promise<Result>((resolve) =>
    setTimeout(
      () =>
        resolve({ content: { total_listings: 5, listings: [...resultData] } }),
      3500
    )
  );
  return response;
}
