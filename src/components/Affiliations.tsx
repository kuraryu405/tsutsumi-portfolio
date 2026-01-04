import geekenIniadImg from '../assets/img/tekunotes.jpg'
import tekunotesImg from '../assets/img/tekunotes.jpg'
import tgrImg from '../assets/img/tgr-color.min.svg'

type Affiliation = {
  href: string
  title: string
  img: string
  alt: string
}

const AFFILIATIONS: Affiliation[] = [
  {
    href: 'https://tekunotes.com',
    title: 'TEKUNOTES',
    img: tekunotesImg,
    alt: 'tekunotes',
  },
  {
    href: 'https://tgrgroup.jp',
    title: 'TGR',
    img: tgrImg,
    alt: 'tgrgroup',
  },
  {
    href: 'https://github.com/geeken-iniad',
    title: '情報技術メディア研究会',
    img: geekenIniadImg,
    alt: 'geeken-iniad',
  },
]

export default function Affiliations() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full px-4">
      {AFFILIATIONS.map((a) => (
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


