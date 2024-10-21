import foto from"../foto.jpg";

export default function Hero(){
    return(
        <div className="container mx-auto p-2 text-center">
        <h1 className="text-gray-300 font-bold">CV Online</h1>
        <h2 className="text3x1">Fikry Aiman Munadhil</h2>
      <Profile />
      <p>
        Saya adalah anak baik dan sangat baik selalu dan sekali
      </p>
      </div>
    )
}

function Profile() {
    return <img src={foto.src} alt="Fikry Aiman M" className="fotoku" />;
  }