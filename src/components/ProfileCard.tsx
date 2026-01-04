import iconGithub from '../assets/img/icon_github.webp'

export default function ProfileCard() {
  return (
    <div className="card glassmorphism w-11/12 md:w-4/5 lg:w-3/5 xl:w-1/2 shadow-xl mx-auto items-center justify-center">
      <div className="card-body flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8">
        <img
          src={iconGithub}
          alt="github icon"
          className="rounded-full w-32 h-32 md:w-36 md:h-36 lg:w-48 lg:h-48 xl:w-52 xl:h-52 object-cover shadow-lg border-4 border-white flex-shrink-0"
          loading="lazy"
          decoding="async"
        />
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
          <h2 className="card-title text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold mb-2 lg:mb-3">
            つつみん
          </h2>
          <p className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-400 mb-2 md:mb-3 lg:mb-4">
            そこらへんの情報系大学生
          </p>
          <p className="text-xs md:text-sm lg:text-base xl:text-lg leading-relaxed">
            東京の情報系の学部に所属している大学生です。
            <br />
            主にフロントエンドの興味があります。
            <br />
            最近はGNU/Linuxの勉強をしています。
            <br />
            まだまだ初学者なので精進したいところ。
            <br />
          </p>
        </div>
      </div>
    </div>
  )
}


