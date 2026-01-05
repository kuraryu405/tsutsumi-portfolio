import twitterImg from '../assets/img/x.svg'
import githubImg from '../assets/img/github.svg'
import qitaImg from '../assets/img/qiita-icon.png'

type Links = {
  href: string
  title: string
  img: string
  alt: string
}

const LINKS: Links[] = [
  {
    href: 'https://x.com/tsutsumin_dev',
    title: 'Twitter(X)',
    img: twitterImg,
    alt: 'tekunotes',
  },
  {
    href: 'https://github.com/kuraryu405',
    title: 'GitHub',
    img: githubImg,
    alt: 'tgrgroup',
  },
  {
    href: 'https://qiita.com/kuraryu405',
    title: 'Qiita',
    img: qitaImg,
    alt: 'qita-icon',
  },
]

export default function Links() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full px-4">
      {LINKS.map((a) => (
        <a key={a.href} href={a.href} target="_blank" rel="noreferrer" className="block">
          <div className="card glassmorphism w-full h-full overflow-hidden">
            <div className="card-body gap-3">
              <img
                src={a.img}
                alt={a.alt}
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
                decoding="async"
              />
              <h3 className="card-title justify-center text-center text-lg font-bold">{a.title}</h3>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}


