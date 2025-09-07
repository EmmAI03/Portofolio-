import React from "react";

const VideoSection = () => {
  return (
    <section id="intro-video" className="w-full bg-slate-100">
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
            🎥 Introduction Video
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            A short introduction about my background, projects, and career goals.
          </p>
        </div>

        <video
          className="w-full rounded-2xl shadow-2xl border-4 border-white"
          src="/intro-video.mp4"
          controls
          autoPlay={false}
          playsInline
          aria-label="Introduction video with narration"
          title="Introduction Video - Emmy Rahmanisari"
        >
          Your browser does not support the video tag. Please{" "}
          <a href="/intro-video.mp4" className="text-blue-600 underline">
            download the video
          </a>{" "}
          to watch it.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;
