

const likes = ["React", "Next.js", "Astro", "AWS", "Tailwind CSS", "Chakra UI"];
export default function About() {
  return (
    <div className=" bg-gray-800 py-8 px-4 sm:px-6 lg:px-8 xl:py-36 min-h-[calc(100vh-64px)]">
      <div className="mx-auto  lg:max-w-7xl">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="max-w-prose text-base lg:max-w-none">
            <h2 className="text-4xl sm:text-6xl font-semibold leading-6 tracking-wide text-yellow-200 sm:mb-12 sm:mt-12">
              About me
            </h2>
          </div>
        </div>
        <div className="relative">
          <div className="relative md:p-6">
            <div className="lg:grid lg:grid-cols-2 gap-6">
              <div className="prose-xl text-lg prose prose-indigo text-gray-200 lg:max-w-none">
                <p>
                  Re-bonjour ! Je m&apos;appelle Markus et j&apos;aime coder des
                  choses qui vivent sur l&apos;internet. J&apos;ai commencé au
                  début des années 2000... Vous souvenez-vous des débats Django
                  contre Rails ?
                </p>
                <p className="my-8">
                  Au début, je n&apos;ai fait des sites que pour moi-même et mes
                  amis, ainsi que pour les groupes de mes amis musiciens. Puis,
                  j&apos;ai été engagé de plus en plus souvent pour des projets
                  payants. Tout à coup, j&apos;étais devenu freelance.
                </p>
                <p>
                  Aujourd&apos;hui, je travaille encore principalement en
                  freelance, mais je cherche des opportunités avec une plus
                  grande complexité. Si vous avez une entreprise et que vous
                  pensez que je puis vous être utile, veuillez prendre contact !
                </p>
              </div>

              <div className="prose-indigo mt-4 text-lg flex justify-between font-mono text-gray-200 sm:ml-12 sm:justify-center">
                <div className="my-12 sm:my-0">
                  <p className="mb-4">
                    Voici quelques technologies
                    <br />
                    que j&apos;aime :
                  </p>
                  <ul>
                    {likes.map(like => (
                      <li key={like} className="mt-2">
                        ❤️ {like}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 inline-flex rounded-md shadow">
              <a
                href="mailto:hey@mrks.me"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
              >
                👋 Prenez Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
