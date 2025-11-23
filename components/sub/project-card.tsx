import Image from "next/image";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  // link: string;
  video?: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  video,
  // link,
}: ProjectCardProps) => {
  return (
   <div
  className="group relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
  rel="noreferrer noopener"
>
  {/* Thumbnail Image */}
  <Image
    src={src}
    alt={title}
    width={1000}
    height={1000}
    className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-0"
  />

  {/* Hover Video */}
  {video && (
    <video
      src={video}
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-64 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    />
  )}

  <div className="relative p-4 bg-gradient-to-t from-black/60 to-transparent">
    <h1 className="text-2xl font-semibold text-white">{title}</h1>
    <p className="mt-2 text-gray-300">{description}</p>
  </div>
</div>

  );
};
