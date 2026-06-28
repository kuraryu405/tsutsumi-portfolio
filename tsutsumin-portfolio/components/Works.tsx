type Work = {
  href: string;
  title: string;
  img: string;
  alt: string;
  description: string;
};

const WORKS: Work[] = [
  {
    href: "https://kuraryu.jp",
    title: "portfolio",
    img: "/img/portfolio.png",
    alt: "portfolio",
    description:
      "Next.jsで作ったポートフォリオサイト。今思うとReactで十分だった。",
  },
  {
    href: "https://kuraryu.jp/Happa",
    title: "Happa",
    img: "/img/Happalogo.png",
    alt: "Happa",
    description:
      "匿名質問webゲームです。友達との飲み会や合宿や打ち上げなどの余興にお使いください",
  },
  //   {
  //     href:,
  //     title:,
  //     img:,
  //     alt:,
  //     description:
  //   },
];

export default function Works() {
  if (!WORKS.length) {
    return (
      <div className="text-white/60 text-center px-4">
        <p>Coming soon...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 w-full max-w-4xl px-4 sm:px-6">
      {WORKS.map((work) => (
        <a
          key={work.href}
          href={work.href}
          target="_blank"
          rel="noreferrer"
          className="block group"
        >
          <div className="glassmorphism p-4 sm:p-5 rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:bg-white/15">
            <img
              src={work.img}
              alt={work.alt}
              className="w-full aspect-video object-cover rounded-xl mb-4"
              loading="lazy"
              decoding="async"
            />
            <h3 className="text-base sm:text-lg font-bold text-white/90">
              {work.title}
            </h3>
            <p className="text-sm text-white/60">{work.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
