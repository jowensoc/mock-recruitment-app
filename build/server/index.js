import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createContext, useContext, useState, useEffect } from "react";
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
function useConsultantContext() {
  const context = useContext(ConsultantContext);
  if (!context) {
    throw new Error("useConsultantContext must be used within a ConsultantContext");
  }
  return context;
}
const Consultant = ({ children, consultant }) => {
  return /* @__PURE__ */ jsx(ConsultantContext.Provider, { value: { consultant }, children });
};
const getAvailabilityClass = (val) => {
  if (!val) {
    return "";
  }
  let results = "";
  switch (val.trim().toLowerCase()) {
    case "immediate":
      results = "availability-immediate";
      break;
    case "pending":
      results = "availability-pending";
      break;
    case "unavailable":
      results = "availability-unavailable";
      break;
    default:
      results = "";
      break;
  }
  return results;
};
const ConsultantPortrait = () => {
  var _a;
  const { consultant } = useConsultantContext();
  const thumbnail = "/app/assets/images/" + consultant.thumbnail;
  return /* @__PURE__ */ jsxs(ConsultantContext.Provider, { value: { consultant }, children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      "img",
      {
        src: thumbnail,
        alt: consultant.name,
        title: consultant.name,
        className: "h-46 object-center border-3 border-blue-600 rounded-md m-auto"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h2", { children: consultant.name }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Location: ",
        consultant.location
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs("p", { children: [
      "Role: ",
      consultant.role
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs("p", { children: [
      "Skills: ",
      (_a = consultant == null ? void 0 : consultant.skills) == null ? void 0 : _a.join(", ")
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs("p", { children: [
      "Availablity: ",
      /* @__PURE__ */ jsx("span", { className: getAvailabilityClass(consultant == null ? void 0 : consultant.availability), children: consultant == null ? void 0 : consultant.availability })
    ] }) })
  ] });
};
const ConsultantRowDetails = () => {
  var _a;
  const { consultant } = useConsultantContext();
  const thumbnail = "/app/assets/images/" + consultant.thumbnail;
  return /* @__PURE__ */ jsx(ConsultantContext.Provider, { value: { consultant }, children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-200 p-3 rounded-md mb-4 grid grid-cols-5 gap-4", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      "img",
      {
        src: thumbnail,
        alt: consultant.name,
        title: consultant.name,
        className: "h-28 object-contain border-3 border-blue-600 rounded-md m-auto"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "col-span-3", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { children: consultant.name }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Location: ",
          consultant.location
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { children: [
        "Role: ",
        consultant.role
      ] }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { children: [
        "Skills: ",
        (_a = consultant == null ? void 0 : consultant.skills) == null ? void 0 : _a.join(", ")
      ] }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { children: [
        "Availablity: ",
        /* @__PURE__ */ jsx("span", { className: getAvailabilityClass(consultant == null ? void 0 : consultant.availability), children: consultant == null ? void 0 : consultant.availability })
      ] }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: " Experience: Vivamus at accumsan ligula. Donec tempus sagittis risus quis elementum. Praesent facilisis elementum ipsum a accumsan. Etiam mi justo, iaculis tempus eros lobortis, tempus varius ante. Phasellus risus lorem, tincidunt non justo eu, ultricies accumsan est. Pellentesque vehicula a lorem vel varius. Curabitur non dolor condimentum, accumsan odio ac, rutrum tortor." }) })
    ] })
  ] }) });
};
const ConsultantRow = () => {
  var _a;
  const { consultant } = useConsultantContext();
  "/app/assets/images/" + consultant.thumbnail;
  return /* @__PURE__ */ jsx(ConsultantContext.Provider, { value: { consultant }, children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-200 p-3 rounded-md mb-1 grid grid-cols-5 gap-2", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: consultant.name }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: consultant.location }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: consultant.role }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: (_a = consultant == null ? void 0 : consultant.skills) == null ? void 0 : _a.join(", ") }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("span", { className: getAvailabilityClass(consultant == null ? void 0 : consultant.availability), children: consultant == null ? void 0 : consultant.availability }) }) })
  ] }) });
};
const ConsultantRowHeaders = () => {
  return /* @__PURE__ */ jsxs("div", { className: "bg-gray-300 p-3 rounded-md mb-1 grid grid-cols-5 gap-2", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "Name" }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "Location" }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "Role" }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "Skills" }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "Availability" }) })
  ] });
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
  const searchConsultants = (name, location, skills, availability) => {
    let searchResults = data;
    const locationList = location ? location.toLowerCase().split(", ") : [];
    const skillsList = skills ? skills.toLowerCase().split(", ") : [];
    if (locationList.length > 0) {
      searchResults = searchResults.filter((item) => locationList.includes(item.location.toLowerCase()));
    }
    if (skillsList.length > 0) {
      searchResults = searchResults.filter((item) => item.skills.some((item2) => skillsList.includes(item2.toLowerCase().trim())));
    }
    if (availability && availability.trim().toLowerCase() !== "any") {
      searchResults = searchResults.filter((item) => item.availability.trim().toLowerCase() === availability.trim().toLowerCase());
    }
    return searchResults;
  };
  const searchConsultantsSkills = (skills) => {
    const skillsList = skills ? skills.toLowerCase().split(", ") : [];
    const results1 = data.filter((item) => item.skills.some((item2) => skillsList.includes(item2.toLowerCase().trim())));
    return {
      "results1": results1
    };
  };
  return {
    getAllConsultants,
    getConsultantByID,
    getNextConsultant,
    searchConsultants,
    searchConsultantsSkills
  };
};
const data = [
  {
    "id": 1,
    "name": "Sarah",
    "role": "Senior Consultant",
    "skills": [
      "Java",
      "Play Framework",
      "React"
    ],
    "thumbnail": "001.png",
    "location": "Newcastle",
    "availability": "Immediate"
  },
  {
    "id": 2,
    "name": "Brian",
    "role": "Senior Consultant",
    "skills": [
      "CSharp",
      "React",
      "AWS"
    ],
    "thumbnail": "002.png",
    "location": "Newcastle",
    "availability": "Pending"
  },
  {
    "id": 3,
    "name": "Jane",
    "role": "Consultant",
    "skills": [
      "ExpressJS",
      "HTML",
      "CSS",
      "Azure"
    ],
    "thumbnail": "003.png",
    "location": "Bristol",
    "availability": "Unavailable"
  },
  {
    "id": 4,
    "name": "Samantha",
    "role": "Consultant",
    "skills": [
      "Java",
      "React",
      "AWS"
    ],
    "thumbnail": "004.png",
    "location": "Glasgow",
    "availability": "Immediate"
  },
  {
    "id": 5,
    "name": "Gary",
    "role": "Consultant",
    "skills": [
      "Java",
      "React",
      "AWS"
    ],
    "thumbnail": "005.png",
    "location": "Edinburgh",
    "availability": "Immediate"
  },
  {
    "id": 6,
    "name": "Kirsty",
    "role": "Consultant",
    "skills": [
      "Python",
      "React",
      "PHP"
    ],
    "thumbnail": "006.png",
    "location": "Newcastle",
    "availability": "Pending"
  },
  {
    "id": 7,
    "name": "Abigail",
    "role": "Consultant",
    "skills": [
      "Cloudfront",
      "Azure",
      "AWS",
      "DevOps",
      "Octopus"
    ],
    "thumbnail": "007.png",
    "location": "London",
    "availability": "Immediate"
  },
  {
    "id": 8,
    "name": "David",
    "role": "Consultant",
    "skills": [
      "Rust",
      "CPlusPlus",
      "SQL"
    ],
    "thumbnail": "008.png",
    "location": "Birmingham",
    "availability": "Unavailable"
  },
  {
    "id": 9,
    "name": "Kevin",
    "role": "Consultant",
    "skills": [
      "Swift",
      "React Native",
      "Go"
    ],
    "thumbnail": "009.png",
    "location": "London",
    "availability": "Immediate"
  },
  {
    "id": 10,
    "name": "Chris",
    "role": "Consultant",
    "skills": [
      "Ruby",
      "Javascript",
      "ASP.net"
    ],
    "thumbnail": "010.png",
    "location": "Newcastle",
    "availability": "Immediate"
  },
  {
    "id": 11,
    "name": "Dani",
    "role": "Consultant",
    "skills": [
      "Visual Basic",
      "CSharp",
      "Apache Server"
    ],
    "thumbnail": "011.png",
    "location": "Newcastle",
    "availability": "Immediate"
  },
  {
    "id": 12,
    "name": "Jacqui",
    "role": "Consultant",
    "skills": [
      "Java Applets",
      "Java Beans",
      "EmberJS",
      "Google Cloud Platform"
    ],
    "thumbnail": "012.png",
    "location": "Newcastle",
    "availability": "Immediate"
  },
  {
    "id": 13,
    "name": "Amira",
    "role": "Consultant",
    "skills": [
      "Java",
      "Mocha",
      "Cypress",
      "Junit"
    ],
    "thumbnail": "013.png",
    "location": "London",
    "availability": "Immediate"
  },
  {
    "id": 14,
    "name": "Lexi",
    "role": "Consultant",
    "skills": [
      "Kotlin",
      "Pearl",
      "GoLang"
    ],
    "thumbnail": "014.png",
    "location": "Newcastle",
    "availability": "Immediate"
  }
];
const Gallery = () => {
  const [searchResults, setSearchResults] = useState();
  const [displayResults, setDisplayResults] = useState("portrait");
  const [rowHeaderStyles, setRowHeadersStyles] = useState("grid grid-cols-5 gap-5");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchSkills, setSearchSkills] = useState("");
  const [searchAvailabilty, setSearchAvailabilty] = useState("Any");
  const searchConsultants = () => {
    const data2 = DataService().searchConsultants("", searchLocation, searchSkills, searchAvailabilty);
    if (data2) {
      setSearchResults(data2);
    }
  };
  const renderSearchResults = (displayResults2) => {
    setDisplayResults(displayResults2);
    let tempStyles = "";
    switch (displayResults2) {
      case "portrait":
        tempStyles = "grid grid-cols-5 gap-5";
        break;
      case "row-details":
        tempStyles = "grid grid-cols-5";
        break;
      case "row":
        tempStyles = "";
        break;
      default:
        tempStyles = "";
        break;
    }
    setRowHeadersStyles(tempStyles);
  };
  const handleSearchLocation = (e) => {
    setSearchLocation(e.target.value);
  };
  const handleSearchSkills = (e) => {
    setSearchSkills(e.target.value);
  };
  const handleSearchAvailability = (e) => {
    setSearchAvailabilty(e.target.value);
  };
  const handleReset = (e) => {
    setSearchLocation("");
    setSearchSkills("");
    setSearchAvailabilty("Any");
    searchConsultants();
  };
  useEffect(() => {
    searchConsultants();
  }, []);
  return /* @__PURE__ */ jsxs("main", { className: "grid grid-row p-7", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-2", children: /* @__PURE__ */ jsx("h2", { children: "Consultants" }) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mb-2", role: "alert", children: [
      /* @__PURE__ */ jsx("p", { className: "font-bold", children: "Informational message" }),
      /* @__PURE__ */ jsx("p", { children: "Please note that those people who appear in those search results are not real. Pictures of indivduals were taken from Unsplash, a royalty free picture." }),
      /* @__PURE__ */ jsx("p", { children: "Names and locations were randomly assigned to those profiles. Those personal details are fake and does not represent the person in the search results." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gray-100 grid grid-cols-4 rounded-md p-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        "Location ",
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            className: "border-1 bg-white",
            "aria-label": "location",
            value: searchLocation,
            onChange: handleSearchLocation
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        "Skills ",
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            className: "border-1 bg-white",
            "aria-label": "skills",
            value: searchSkills,
            onChange: handleSearchSkills
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        "Availability ",
        /* @__PURE__ */ jsxs(
          "select",
          {
            className: "border-1 bg-white",
            "aria-label": "availability",
            role: "combobox",
            value: searchAvailabilty,
            onChange: handleSearchAvailability,
            children: [
              /* @__PURE__ */ jsx("option", { children: "Any" }),
              /* @__PURE__ */ jsx("option", { children: "Immediate" }),
              /* @__PURE__ */ jsx("option", { children: "Pending" }),
              /* @__PURE__ */ jsx("option", { children: "Unavailable" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "bg-gray-500 p-2 rounded-m w-20 text-white cursor-pointer mr-4",
            onClick: () => searchConsultants(),
            children: "Search"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "bg-gray-500 p-2 rounded-m w-20 text-white cursor-pointer",
            onClick: handleReset,
            children: "Reset"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-gray-100 rounded-md p-2", children: /* @__PURE__ */ jsxs("p", { children: [
      "Display Results:",
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "display-results-button",
          onClick: () => renderSearchResults("portrait"),
          children: "Portrait"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "display-results-button",
          onClick: () => renderSearchResults("row"),
          children: "Row"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "display-results-button",
          onClick: () => renderSearchResults("details"),
          children: "Details"
        }
      )
    ] }) }),
    searchResults && searchResults.length > 0 ? /* @__PURE__ */ jsxs("div", { className: rowHeaderStyles, children: [
      displayResults === "row" ? /* @__PURE__ */ jsx(ConsultantRowHeaders, {}) : /* @__PURE__ */ jsx(Fragment, {}),
      searchResults.map((consultant) => /* @__PURE__ */ jsxs(
        Consultant,
        {
          consultant: {
            id: consultant.id,
            name: consultant.name,
            role: consultant.role,
            skills: consultant.skills,
            thumbnail: consultant.thumbnail,
            location: consultant.location,
            availability: consultant.availability
          },
          children: [
            displayResults === "portrait" ? /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ConsultantPortrait, {}) }) : /* @__PURE__ */ jsx(Fragment, {}),
            displayResults === "details" ? /* @__PURE__ */ jsx(ConsultantRowDetails, {}) : /* @__PURE__ */ jsx(Fragment, {}),
            displayResults === "row" ? /* @__PURE__ */ jsx(ConsultantRow, {}) : /* @__PURE__ */ jsx(Fragment, {})
          ]
        },
        consultant.id
      ))
    ] }) : /* @__PURE__ */ jsx("p", { children: "No records found" })
  ] });
};
function meta({}) {
  const title = "Mock Recruitment App - Search";
  return [{
    title
  }, {
    name: "description",
    content: +title
  }];
}
const search = UNSAFE_withComponentProps(function Search() {
  return /* @__PURE__ */ jsx(Gallery, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: search,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-tKC4XhlV.js", "imports": ["/assets/chunk-UH6JLGW7-BnjEZNfp.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-B_Q_TMRP.js", "imports": ["/assets/chunk-UH6JLGW7-BnjEZNfp.js"], "css": ["/assets/root-B2T77wIM.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/search": { "id": "routes/search", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/search-C7gjH5nT.js", "imports": ["/assets/chunk-UH6JLGW7-BnjEZNfp.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-c036e38c.js", "version": "c036e38c", "sri": void 0 };
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
  "routes/search": {
    id: "routes/search",
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
