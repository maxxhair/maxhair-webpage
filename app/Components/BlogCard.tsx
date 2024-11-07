import { Card } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  blog: {
    _id: string;
    title: string;
    subHeading: string;
    blogImage: string;
    slug: string;
  };
}

const BlogCard: React.FC<Props> = ({ blog }) => {
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL || "";
  const blogimg = `${baseUrl}/uploads/${blog.blogImage}`;

  return (
    <Link href={`/blog/${blog._id}`}>
      <Card className="max-w-sm mx-auto cursor-pointer">
        <Image
          alt="Meaningful alt text for an image that is not purely decorative"
          src={blogimg}
          width={500}
          height={300}
        />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {blog.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-5">
          {blog.subHeading}
        </p>
      </Card>
    </Link>
  );
};

export default BlogCard;
