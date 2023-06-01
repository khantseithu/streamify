"use client";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import SongItem from "@/components/SongItem";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

const list = [
  {
    name: "Liked Songs",
    image: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
    author: "Khant Sithu",
  },
  {
    name: "champagne & cocacola",
    image: "https://i.scdn.co/image/ab67706c0000f8e481bcb4ae4198afa5a6135ff0",
    author: "Brian",
  },
  {
    name: "My Playlist #1",
    author: "Khant Sithu",
  },
];

const songs = [
  {
    name: "Wow.",
    image:
      "https://media.pitchfork.com/photos/629a1d0bec6d212a5b6b705e/1:1/w_600/Post-Malone-Hollywoods-Bleeding.jpg",
    author: "Post Malone",
  },
  {
    name: "Wolves",
    image: "https://i1.sndcdn.com/artworks-000157549168-m5jgfu-t500x500.jpg",
    author: "Kanye West",
  },
  {
    name: "Till I Collapse",
    image: "https://i.scdn.co/image/ab67616d0000b2736ca5c90113b30c3c43ffb8f4",
    author: "Eminem",
  },
  {
    name: "Hate It Or Love It",
    image:
      "https://geo-media.beatsource.com/image_size/500x500/9/a/9/9a9fb40c-9926-4f65-b358-7b10307e2f23.jpg",
    author: "The Game",
  },
];

export default function Home() {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        {/* Welcome message */}
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">Welcome Back!</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-4">
            {list.map((item) => (
              <ListItem key={item.name} {...item} />
            ))}
          </div>
        </div>
      </Header>
      <div className="mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Newest Songs</h1>
          <p className="text-sm text-neutral-400 cursor-pointer hover:text-neutral-200 transition font-semibold">
            See All
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
          {songs.map((item) => (
            <SongItem key={item.name} {...item} />
          ))}
        </div>
      </div>
      <div className="mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Newest Playlists
          </h1>
          <p className="text-sm text-neutral-400 cursor-pointer hover:text-neutral-200 transition font-semibold">
            See All
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
          {songs.map((item) => (
            <SongItem key={item.name} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
