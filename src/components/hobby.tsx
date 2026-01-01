export default function Hobby() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full h-full px-4">
                <div className="card glassmorphism w-full h-full grid-item">
                    <div className="card-body">
                        <img src="src/assets/img/fish.JPG" alt="photo" className="w-full h-full object-cover" />
                        <p className="card-text">カメラを使って写真を撮ることが好きです。</p>
                    </div>
                </div>
            </div>
        </>
    );
}