import type { Route } from "./+types/home";
//import { Welcome } from "../welcome/welcome";
import { Dashboard } from "./dashboard/Dashboard";

export function meta({}: Route.MetaArgs) {
  const title = "Mock Recruitment App";
  return [
    { title: title },
    { name: "description", content: "Welcome to " + title },
  ];
}

export default function Home() {
  return <Dashboard />;
}
