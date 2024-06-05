import { Card } from "flowbite-react";
import Link from "next/link";

export function BlogCard() {
  return (
    <Link href="/blogpage">
      <Card
        className="max-w-sm mx-auto cursor-pointer"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="/Frame 1618873065.svg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Know your hair
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Have you ever wondered why is hair so precious? What makes up a strand
          of hair? what is it made of? Why is it so difficult to find good hair?
          And what makes up good hair? And most importantly what makes it so
          expensive? We have heard you!
        </p>
      </Card>
    </Link>
  );
}
