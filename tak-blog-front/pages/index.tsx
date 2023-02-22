import BlogLayout from "@/components/BlogLayout";
import { Button } from "@/styles/form";
import Link from "next/link";

export default function HomePage() {
  return (
    <BlogLayout>
      <Link href="/createPost">
        <Button>글쓰기</Button>
      </Link>
    </BlogLayout>
  );
}
