import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createContext, useState, useEffect } from "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const ConsultantContext = createContext(void 0);
const Consultant = ({ children, consultant }) => {
  return /* @__PURE__ */ jsx(ConsultantContext.Provider, { value: { consultant }, children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("p", { children: consultant.id }),
    /* @__PURE__ */ jsx("p", { children: consultant.name }),
    /* @__PURE__ */ jsx("p", { children: consultant.role }),
    /* @__PURE__ */ jsx("p", { children: consultant.skills }),
    /* @__PURE__ */ jsx("div", { children })
  ] }) });
};
const DataService = () => {
  const getAllConsultants = () => {
    return data;
  };
  const getConsultantByID = (id) => {
    const results = data.find((item) => item.id == id);
    return results;
  };
  const getNextConsultant = (id) => {
    id += 1;
    const results = data.find((item) => item.id == id);
    if (!results) {
      return data[0];
    }
    return results;
  };
  return {
    getAllConsultants,
    getConsultantByID,
    getNextConsultant
  };
};
const data = [
  {
    "id": 1,
    "name": "Kermit",
    "role": "Senior Consultant",
    "skills": [
      "Java",
      "React",
      "AWS"
    ],
    "thumbnail": "kermit.png"
  },
  {
    "id": 2,
    "name": "Miss Piggy",
    "role": "Senior Consultant",
    "skills": [
      "Java",
      "React",
      "AWS"
    ],
    "thumbnail": "miss-piggy.png"
  },
  {
    "id": 3,
    "name": "Gonzo",
    "role": "Consultant",
    "skills": [
      "Java",
      "React",
      "AWS"
    ],
    "thumbnail": "gonzo.png"
  },
  {
    "id": 4,
    "name": "Elmo",
    "role": "Consultant",
    "skills": [
      "Java",
      "React",
      "AWS"
    ],
    "thumbnail": "elmo.png"
  },
  {
    "id": 5,
    "name": "Animal",
    "role": "Consultant",
    "skills": [
      "Java",
      "React",
      "AWS"
    ],
    "thumbnail": "animal.png"
  },
  {
    "id": 6,
    "name": "Fozzie Bear",
    "role": "Consultant",
    "skills": [
      "Java",
      "React",
      "AWS"
    ],
    "thumbnail": "fozzie-bear.png"
  },
  {
    "id": 7,
    "name": "Rowlf the Dog",
    "role": "Consultant",
    "skills": [
      "Java",
      "React",
      "AWS"
    ],
    "thumbnail": "rowlf-the-dog.png"
  },
  {
    "id": 8,
    "name": "Rizzo the Rat",
    "role": "Consultant",
    "skills": [
      "Java",
      "React",
      "AWS"
    ],
    "thumbnail": "rizzo-the-rat.png"
  },
  {
    "id": 9,
    "name": "Dr. Bunsen",
    "role": "Consultant",
    "skills": [
      "Java",
      "React",
      "AWS"
    ],
    "thumbnail": "dr-bunsen.png"
  },
  {
    "id": 10,
    "name": "Beaker",
    "role": "Consultant",
    "skills": [
      "Java",
      "React",
      "AWS"
    ],
    "thumbnail": "beaker.png"
  },
  {
    "id": 11,
    "name": "The Swedish Chef",
    "role": "Consultant",
    "skills": [
      "Java",
      "React",
      "AWS"
    ],
    "thumbnail": "the-swedish-chef.png"
  },
  {
    "id": 12,
    "name": "Statler",
    "role": "Consultant",
    "skills": [
      "Java",
      "React",
      "AWS"
    ],
    "thumbnail": "statler.png"
  },
  {
    "id": 13,
    "name": "Waldorf",
    "role": "Consultant",
    "skills": [
      "Java",
      "React",
      "AWS"
    ],
    "thumbnail": "waldorf.png"
  },
  {
    "id": 14,
    "name": "Scooter",
    "role": "Consultant",
    "skills": [
      "Java",
      "React",
      "AWS"
    ],
    "thumbnail": "scooter.png"
  }
];
const Dashboard = () => {
  const [consultantID, setConsultantID] = useState(0);
  const [consultant, setConsultant] = useState();
  const getNextConsultant = () => {
    const data2 = DataService().getNextConsultant(consultantID);
    if (data2) {
      setConsultantID(data2.id);
      setConsultant(data2);
    }
  };
  useEffect(() => {
    getNextConsultant();
  }, []);
  const handleClick = () => {
    getNextConsultant();
  };
  return /* @__PURE__ */ jsxs("main", { className: "flex items-center justify-center pt-16 pb-4", children: [
    /* @__PURE__ */ jsx("div", { children: "Dashboard" }),
    consultant ? /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Consultant, { consultant: {
        id: consultant.id,
        name: consultant.name,
        role: consultant.role,
        skills: consultant.skills
      } }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("button", { onClick: () => handleClick(), children: "Next" }) })
    ] }) : /* @__PURE__ */ jsx("p", { children: "No Consultant details" })
  ] });
};
function meta({}) {
  const title = "Mock Recruitment App";
  return [{
    title
  }, {
    name: "description",
    content: "Welcome to " + title
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(Dashboard, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-tKC4XhlV.js", "imports": ["/assets/chunk-UH6JLGW7-BnjEZNfp.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-ChEgYsfT.js", "imports": ["/assets/chunk-UH6JLGW7-BnjEZNfp.js"], "css": ["/assets/root-Sc4dxR23.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-BdkNQNiu.js", "imports": ["/assets/chunk-UH6JLGW7-BnjEZNfp.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-2697c9b8.js", "version": "2697c9b8", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
