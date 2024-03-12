import { SearchForm } from "@/components/SearchForm";
import { Card } from "@/components/Card";
import { Main } from "@/components/Main";

import { trendingData } from "@/constants";

export default function Home() {
  return (
    <Main>
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="font-bold text-5xl text-white lg:pt-5">
          Find your next stay
        </h2>
        <h3 className="pt-5 pb-6 lg:pb-8 text-xl text-white">
          Search low prices on hotels, homes and much more...
        </h3>
      </section>
      <section className="m-4 mt-0 px-2 lg:px-4 -mb-[88px] lg:-mb-[109px]">
        <SearchForm />
      </section>
      <section className="mx-auto max-w-7xl mt-10 p-6 lg:px-8 bg-white rounded-lg mb-10">
        <div className="pt-7">
          <h3 className="text-xl font-bold">Trending Destinations</h3>
          <p className="font-light">
            Most popular choices for travelers from around the world
          </p>
        </div>
        <div className="flex space-x-4 py-5 overflow-x-scroll">
          {trendingData.map((props) => (
            <Card key={props.id} {...props} />
          ))}
        </div>
      </section>
    </Main>
  );
}
