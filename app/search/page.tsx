"use client";

import Header from "@/components/Header";
import Input from "@/components/Input";
import Playlist from "@/components/MediaItem";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

const data = {
  name: "Liked Songs",
  image: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
  author: "Khant Sithu",
};

const SearchPage = () => {
  return (
    <div className="bg-neutral-900 rounded-lg w-full h-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Search</h1>
          <Input placeholder="What do you want to listen to?" />
        </div>
      </Header>

      <div className="flex flex-col gap-y-2 w-full p-6">
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <Playlist {...data} />
          </div>
          <div>
            <AiOutlineHeart size={25} />
          </div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <Playlist {...data} />
          </div>
          <div>
            <AiOutlineHeart size={25} />
          </div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <Playlist {...data} />
          </div>
          <div>
            <AiOutlineHeart size={25} />
          </div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <Playlist {...data} />
          </div>
          <div>
            <AiOutlineHeart size={25} />
          </div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <Playlist {...data} />
          </div>
          <div>
            <AiOutlineHeart size={25} />
          </div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <Playlist {...data} />
          </div>
          <div>
            <AiOutlineHeart size={25} />
          </div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <Playlist {...data} />
          </div>
          <div>
            <AiOutlineHeart size={25} />
          </div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <Playlist {...data} />
          </div>
          <div>
            <AiOutlineHeart size={25} />
          </div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <Playlist {...data} />
          </div>
          <div>
            <AiOutlineHeart size={25} />
          </div>
        </div>
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <Playlist {...data} />
          </div>
          <div>
            <AiOutlineHeart size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchPage;
