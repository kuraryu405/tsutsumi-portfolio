export default function Hobby() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full h-full px-4">
                <div className="card glassmorphism w-full h-full grid-item">
                    <div className="card-body">
                        <img src="src/assets/img/ueda.jpg" alt="photo" className="w-full h-full object-cover" />
                        <p className="card-text text-center">一眼レフを使って写真を撮るのが好き、<br />もっといいカメラを使いたい。<br /> 1DXとかいいなぁって思ってる。
                        </p>
                    </div>
                </div>
                <div className="card glassmorphism w-full h-full grid-item">
                    <div className="card-body">
                        <img src="src/assets/img/pc.jpg" alt="pc" className="w-full h-full object-cover" />
                        <p className="card-text text-center">パソコンで游ぶのも好き。<br />自作PC(windows/今後はArchLinuxの予定) <br /> MacBook Pro M4(macOS) <br /> VivoBook (Arch Linux/Omarchy)</p>
                    </div>
                </div>
                <div className="card glassmorphism w-full h-full grid-item">
                    <div className="card-body">
                        <img src="src/assets/img/euphonium.jpg" alt="music" className="w-full h-full object-cover" />
                        <p className="card-text text-center">大学の吹奏楽サークルでユーフォニアムを吹いています。<br />YEP-642S/Bach 5G<br />最近は大河ドラマのサントラをずっと聴いてる</p>
                    </div>
                </div>
                <div className="card glassmorphism w-full h-full grid-item">
                    <div className="card-body">
                        <img src="src/assets/img/karaoke.jpg" alt="travel" className="w-full h-full object-cover" />
                        <p className="card-text text-center">歌を歌うことも好き。<br />米津の曲を歌うのが好き。<br />よく聴くのはオルタナティブだけど。</p>
                    </div>
                </div>
            </div>
        </>
    );
}