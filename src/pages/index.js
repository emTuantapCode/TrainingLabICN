import Image from "next/image";
import { Inter } from "next/font/google";
import Nav_bar from "@/components/Nav_bar";
import Slide_show from "@/components/Slide_show";
import Link from 'next/link';
import Blog_section from '@/components/Blog_section';
import Section from '@/components/Section';
import { index_dataMock as data } from '../../mock/index_data';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex  flex-col bg-white ${inter.className}`}
    >
      <Nav_bar />
      <Slide_show/>
      <Link href="/" className="link-default">
        {data.text.text_detail}
      </Link>
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-auto mb-4 md:mb-0"></div>
        <div className="title md:pl-48 text-center md:text-left">
          {data.text.text_center}
        </div>
        <Link href="/" className="mt-4 md:mt-0 md:mr-20 title-more flex items-center">
          {data.text.text_more} 
          {data.iconlink.icon_more}
        </Link>
      </div>
      <Blog_section />
      <div className="grid place-items-center">
        <p className="mt-20 title">{data.text.text_center_second}</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between bg-white p-4">
      <div className="flex items-center space-x-2">
        {data.iconlink.icon_heart}
        {/* Icon trái */}
        

        <span className="text-red-600 font-bold text-base md:text-lg">{data.text.text_topic}</span>
      </div>
      <Link href="/" className="mr-0 md:mr-16 title-more space-x-1 md:text-base">
          {data.text.text_more}
          {data.iconlink.icon_more}
        </Link>
    </div>
    <Blog_section />
    <Section />
    
    </main>
  );
}
