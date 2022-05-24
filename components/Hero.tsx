/* This example requires Tailwind CSS v2.0+ */
import Link from "next/link";

export default function Hero() {
  return (
    <div className=" bg-gray-800">
      <div className="flex justify-center">
        <div className="mt-24 px-4 text-left sm:ml-0 sm:mt-48 sm:max-w-4xl">
          <div className="mb-8 font-mono text-yellow-200">
            Bonjour, je m&apos;appelle
          </div>
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">
              <span className="mb-8 block text-blue-400 sm:text-6xl  tracking-wide">
                mrks
              </span>
              <span className=" text-yellow-200 sm:text-4xl">
                Je crée pour le web.
              </span>
            </h2>
          </div>
          <div className="text-blue-200 sm:w-96">
            <p className="mt-16">
              Je suis un développeur full-stack qui crée des sites performants
              avec une interactivité claire et fluide.{" "}
            </p>
            <p className="mt-4">
              En ce moment, je cherche de nouvelles opportunités. Si vous pensez
              que je peux être utile à votre entreprise,{" "}
              <a className="text-yellow-200" href="mailto:hey@mrks.me">
                contactez-moi
              </a>
              .
            </p>
          </div>
          <div className="relative my-16">
            <div className="inline-flex rounded-md shadow">
              <Link href="/projects">
                <a className="bg-indigo-600 inline-flex items-center justify-center rounded-md border border-transparent px-5 py-3 text-base font-medium text-white transition-colors duration-500 hover:bg-gray-700 hover:text-yellow-100">
                  Quelques Projets{' '}&nbsp;🛠
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
