import { SquarePlay } from "lucide-react";
import { curve } from "../../assets";

function YoutubePage() {
  const videos = [
    {
      id: 1,
      embedUrl: "https://www.youtube.com/embed/BlaMOs6M0Vc?si=NLvbC2EG7m18U8tZ",
      title: "YouTube video player",
    },
    {
      id: 2,
      embedUrl: "https://www.youtube.com/embed/VauT0qli4kQ?si=syHEleNotb1CIN-9",
      title: "YouTube video player",
    },
    {
      id: 3,
      embedUrl: "https://www.youtube.com/embed/9lzPvbrUnAs?si=fiYjG6GVIrBYBrCN",
      title: "YouTube video player",
    },
    {
      id: 4,
      embedUrl: "https://www.youtube.com/embed/utCKzcL6IWw?si=VUEP36hYHzLhE3D6",
      title: "YouTube video player",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Header */}
      <header className=" shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center mb-16">
            <div className="inline-block relative text-center ">
              <h3 className="text-4xl font-semibold py-5">
                Charitai Solutions YouTube
              </h3>
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2 -mt-4"
                width={624}
                height={28}
                alt="Curve"
              />
            </div>
            <p className="text-gray-600 leading-relaxed mt-5">
              Watch our latest videos and tutorials on AI solutions, technology
              trends, and more.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* YouTube Channel Section */}
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4"> 
              Our YouTube Channel 
            </h2>
            <p className="text-gray-600 mb-4">
              Check out our latest videos and tutorials on our YouTube channel.
            </p>
            <a
              href="https://www.youtube.com/@CharitAISolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              Visit Our Channel <SquarePlay  className="ml-2"/>
            </a>
          </div>

          {/* Video Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    width="100%"
                    height="315"
                    src={video.embedUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default YoutubePage;
