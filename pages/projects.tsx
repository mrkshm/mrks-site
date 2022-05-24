/* This example requires Tailwind CSS v2.0+ */
import { GlobeAltIcon, SparklesIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function Projects2() {
  return (
    <div className="relative overflow-hidden bg-gray-800 pt-16 pb-32">
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div className="flex gap-4 text-lg text-yellow-200 ">
                <Link
                  href="https://groupomania-rho.vercel.app/"
                  target="_blank"
                >
                  <span className="hover:text-blue-200 flex items-center justify-start gap-2 rounded-md">
                    <GlobeAltIcon className="h-6 w-6 " aria-hidden="true" />
                    <a target="_blank" rel="noreferrer">
                      Live
                    </a>
                  </span>
                </Link>
                <Link href="https://github.com/mrkshm" target="_blank">
                  <span className="hover:text-blue-200 hover:fill-blue-200 fill-yellow-200 ml-4 flex items-center text-lg">
                    <div className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="h-6 w-6"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                    <a className="my-5 flex text-lg">GitHub</a>
                  </span>
                </Link>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-yellow-200">
                  Proof-of-concept pour un réseau social
                </h2>
                <p className="mt-4 text-lg text-blue-200">
                  Le project final pour la formation Developpeur Web d&apos;
                  <span className="text-blue-400">
                    <a href="http://openclassrooms.com">OpenClassrooms</a>
                  </span>
                  , un réseau social pour une entreprise imaginaire.
                </p>
                <p className="mt-4 text-lg text-blue-200">
                  Une version live du projet est déployé sur Vercel et AWS.
                </p>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="font-mono text-base text-gray-200">
                    Le site utilise Google, Github or email sign-in.
                    <br />
                    Google News Api, Markdown, a real nice dark mode, Next.js,
                    TypeScript, PostgreSQL, Chakra UI.
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3"></div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/groupomania.png"
                alt="capture écran du projet"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600">
                  <SparklesIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-yellow-200">
                  Bientôt plus de projets...
                </h2>
                <p className="mt-4 text-lg text-gray-500">...</p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
