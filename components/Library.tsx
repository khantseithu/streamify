import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/navigation";
import MediaItem from "./MediaItem";
// interface LibraryProps {
//   songs: Song[];
// }

const list = [
  {
    name: "Liked Songs",
    image: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
    author: "Khant Sithu",
  },
  {
    name: "champagne & coke",
    image: "https://i.scdn.co/image/ab67706c0000f8e481bcb4ae4198afa5a6135ff0",
    author: "Ilke Kartal",
  },
  {
    name: "My Playlist #1",
    author: "Khant Sithu",
  },
];

const Library = () => {
  const onClick = () => {
    // TODO: Add a modal to create a playlist
  };

  const router = useRouter();

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="
            text-neutral-400 
            cursor-pointer 
            hover:text-white 
            transition
          "
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {list.map((item) => (
          <MediaItem
            onClick={() => router.push("/playlist/123")}
            key={item.name}
            {...item}
          />
        ))}
      </div>
      <p className="pt-4 px-4">Your Songs</p>
    </div>
  );
};
export default Library;
