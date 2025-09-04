import type { Route } from "./+types/search";
import { Gallery } from "./gallery/gallery";

export function meta({}: Route.MetaArgs) {
  const title = "Mock Recruitment App - Search";
  return [
    { title: title },
    { name: "description", content:  + title },
  ];
}

export default function Search() {
  return <Gallery />;
}