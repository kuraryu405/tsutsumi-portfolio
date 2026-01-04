import euphoniumImg from '../assets/img/euphonium.webp'
import karaokeImg from '../assets/img/karaoke.webp'
import pcImg from '../assets/img/pc.webp'
import uedaImg from '../assets/img/ueda.webp'

type HobbyItem = {
  img: string
  alt: string
  text: string
}

const HOBBIES: HobbyItem[] = [
  {
    img: uedaImg,
    alt: 'camera',
    text: '一眼レフを使って写真を撮るのが好き。\nもっといいカメラを使いたい。\n1DXとかいいなぁって思ってる。',
  },
  {
    img: pcImg,
    alt: 'pc',
    text:
      'パソコンで遊ぶのも好き。\n自作PC(windows/今後はArchLinuxの予定)\nMacBook Pro M4(macOS)\nVivoBook (Arch Linux/Omarchy)',
  },
  {
    img: euphoniumImg,
    alt: 'music',
    text:
      '大学の吹奏楽サークルでユーフォニアムを吹いています。\nYEP-642S/Bach 5G\n最近は大河ドラマのサントラをずっと聴いてる',
  },
  {
    img: karaokeImg,
    alt: 'karaoke',
    text: '歌を歌うことも好き。\n米津の曲を歌うのが好き。\nよく聴くのはオルタナティブだけど。',
  },
]

export default function Hobby() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full h-full px-4">
      {HOBBIES.map((item) => (
        <div key={item.alt} className="card glassmorphism w-full h-full overflow-hidden">
          <div className="card-body gap-3">
            <img
              src={item.img}
              alt={item.alt}
              className="w-full aspect-[4/3] object-cover rounded-2xl"
              loading="lazy"
              decoding="async"
            />
            <p className="card-text text-center text-sm md:text-base whitespace-pre-line">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}


