import { fetchResults } from "@/lib/fetchResults";
import { notFound } from "next/navigation";

export interface SearchParams {
  url: URL;
  ss: string;
  checkin: string;
  checkout: string;
  src: string;
  group_adults: string;
  group_children: string;
  no_rooms: string;
}

interface SearchPageProps {
  searchParams: SearchParams;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  if (!searchParams.url) return notFound();

  const results = await fetchResults(searchParams);

  if (!results) return notFound();

  return <div>{results}</div>;
}
