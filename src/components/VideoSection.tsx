
const VideoSection = () => {
  const videos = [
    {
      type: "youtube",
      id: "dQw4w9WgXcQ",
      title: "Sample YouTube Video 1",
    },
    {
      type: "vk",
      id: "456239017_456239018",
      title: "Sample VK Video 1",
    },
  ];

  return (
    <section id="videos" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">ВИДЕО</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="aspect-video">
              {video.type === "youtube" ? (
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://vk.com/video_ext.php?oid=${video.id.split('_')[0]}&id=${video.id.split('_')[1]}&hd=1`}
                  title={video.title}
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
