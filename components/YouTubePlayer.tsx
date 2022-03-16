import Image from "next/image";
import { useState } from "react";

export const YouTubePlayer = ({ video }: { video: string }) => {
  // http://www.get-youtube-thumbnail.com/
  const videoCoverMatches = video.match(
    /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
  );
  const maxresdefault = videoCoverMatches
    ? `https://i3.ytimg.com/vi/${videoCoverMatches[1]}/maxresdefault.jpg`
    : null;

  const [playerLoaded, setPlayerLoaded] = useState(false);
  const [videoSources, setVideoSources] = useState<
    {
      width: number;
      height: number;
      container: string | undefined;
      codec: string | undefined;
      url: string;
    }[]
  >([]);

  const loadPlayer = async () => {
    let json: WistiaResponse | undefined;

    try {
      const res = await fetch(
        `https://fast.wistia.com/embed/medias/mhl6s7sb6u.json`
      );
      json = await res.json();
    } catch (err) {
      console.error(err);
    }

    if (!json) {
      // fallback
      return window.open(
        `https://player.vimeo.com/video/681285700?h=e50ad696f5&autoplay=1&title=0&byline=0&like=0&share=0&portrait=0&logo=0`
      );
    }

    const sources = json.media.assets
      .filter((asset) => /^\d+p$/.test(asset.display_name))
      .map((asset) => ({
        width: asset.width,
        height: asset.height,
        container: asset.container,
        codec: asset.codec,
        url: asset.url,
      }))
      .sort((a, b) => b.height - a.height);

    setVideoSources(sources);
    setPlayerLoaded(true);
  };

  if (!videoCoverMatches || !maxresdefault) {
    return null;
  }

  return (
    <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
      {playerLoaded ? (
        <div className="aspect-w-16 aspect-h-9">
          <video
            controls
            className="w-full h-full"
            autoPlay={true}
            muted={false}
            controlsList="nodownload"
            crossOrigin="anonymous"
            playsInline={true}
            src={videoSources[0].url}
          >
            {videoSources.map((s) => (
              <source
                key={s.url}
                src={s.url}
                type={`video/${s.container || "mp4"}`}
                media={`(min-width: ${s.width})`}
              />
            ))}
          </video>
        </div>
      ) : (
        <button
          type="button"
          className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          onClick={loadPlayer}
        >
          <span className="sr-only">Obejrzyj pierwszą lekcję za darmo</span>
          <Image
            className="w-full"
            layout="responsive"
            width={1920}
            height={1080}
            src={maxresdefault}
            alt=""
          />
          <span
            className="absolute inset-0 w-full h-full flex items-center justify-center"
            aria-hidden="true"
          >
            <svg
              className="h-20 w-20 text-pink-500"
              fill="currentColor"
              viewBox="0 0 84 84"
            >
              <circle opacity="0.9" cx={42} cy={42} r={42} fill="white" />
              <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
};

export interface WistiaResponse {
  media: Media;
  options: Options;
}

interface Media {
  assets: Asset[];
  distilleryUrl: string;
  accountKey: string;
  mediaKey: string;
  type: string;
  mediaType: string;
  progress: number;
  status: number;
  name: string;
  duration: number;
  hashedId: string;
  branding: boolean;
  enableCustomerLogo: boolean;
  seoDescription: string;
  preloadPreference: null;
  flashPlayerUrl: string;
  showAbout: boolean;
  createdAt: number;
  firstEmbedForAccount: boolean;
  firstShareForAccount: boolean;
  keyframeAlign: boolean;
  useMediaDataHostLogic: boolean;
  projectId: number;
  stats: Stats;
  trackingTransmitInterval: number;
  integrations: Options;
  hls_enabled: boolean;
  embed_options: EmbedOptions;
}

interface Asset {
  type: string;
  slug: string;
  display_name: string;
  details: Options;
  width: number;
  height: number;
  size: number;
  bitrate: number;
  public: boolean;
  status: number;
  progress: number;
  metadata: Metadata;
  url: string;
  created_at: number;
  container?: string;
  codec?: string;
  ext?: string;
  segment_duration?: number;
  opt_vbitrate?: number;
}

interface Options {}

interface Metadata {
  served_by_media_api?: number;
  max_bitrate?: number;
  early_max_bitrate?: number;
  average_bitrate?: number;
  av_stream_metadata?: string;
  frame_width?: number;
  frame_height?: number;
  frame_count?: number;
  aspect_ratio?: number;
}

interface EmbedOptions {
  volumeControl: string;
  fullscreenButton: string;
  controlsVisibleOnLoad: string;
  playerColor: string;
  bpbTime: string;
  plugin: Options;
  vulcan: boolean;
  branding: string;
  showCustomerLogo: string;
  stillUrl: string;
  unalteredStillImageAsset: UnalteredStillImageAsset;
  thumbnailAltText: string;
  autoPlay: string;
  playButton: string;
  smallPlayButton: string;
  playbar: string;
  settingsControl: string;
  playbackRateControl: string;
  qualityControl: string;
  playsinline: boolean;
}

interface UnalteredStillImageAsset {
  url: string;
  width: string;
  height: string;
}

interface Stats {
  loadCount: number;
  playCount: number;
  uniqueLoadCount: number;
  uniquePlayCount: number;
  averageEngagement: number;
}
