import { SearchParams } from "@/app/search/page";

export async function fetchResults({}: SearchParams) {
  const response = new Promise<string>((resolve) =>
    setTimeout(() => resolve("Hola"), 3500)
  );
  return response;
}
