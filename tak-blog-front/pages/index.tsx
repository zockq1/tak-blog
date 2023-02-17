import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import BlogLayout from "@/components/BlogLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <BlogLayout>Hello</BlogLayout>;
}
