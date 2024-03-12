import { Content } from "@/components/Content";
import { fetchResults } from "@/lib/fetchResults";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <Content>
      <section>
        <div className="mx-auto max-w-7xl p-6 lg:px-8">
          <h1 className="text-4xl font-bold pb-3">Your Trip Results</h1>

          <h2 className="pb-3">
            Dates of trip:
            <span className="italic ml-2">
              {searchParams.checkin} to {searchParams.checkout}
            </span>
          </h2>

          <hr className="mb-5" />

          <h3 className="font-semibold text-xl">
            {results.content.total_listings} properties available
          </h3>

          <div className="space-y-2 mt-5">
            {results.content.listings.map(
              (
                {
                  src,
                  link,
                  title,
                  description,
                  rating_count,
                  rating_word,
                  rating,
                  price,
                },
                i
              ) => (
                <div
                  key={i}
                  className="flex space-y-2 justify-between space-x-4 p-5 border rounded-lg"
                >
                  <Image
                    src={src}
                    height={450}
                    width={450}
                    alt="image of property"
                    className="h-44 w-44 rounded-lg"
                  />

                  <div className="flex flex-1 space-x-5 justify-between">
                    <div className="flex flex-col gap-y-2.5">
                      <Link
                        href={link}
                        className="font-bold text-blue-500 hover:text-blue-600 hover:underline"
                      >
                        {title}
                      </Link>
                      <p className="text-xs max-w-lg">{description}</p>
                    </div>

                    <div className="flex flex-col justify-between">
                      <div className="flex items-start justify-end space-x-2 text-right">
                        <div>
                          <p className="font-bold">{rating_word}</p>
                          <p className="text-xs">{rating_count} reviews</p>
                        </div>

                        <p className="flex items-center justify-center font-bold text-sm w-10 h-10 text-white bg-blue-900 rounded-lg flex-shrink-0">
                          {rating || "N/A"}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-xs ">
                          {searchParams.group_adults} adults,{" "}
                          {searchParams.group_children || 0} children
                        </p>
                        <p className="text-2xl font-bold">{price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </Content>
  );
}
