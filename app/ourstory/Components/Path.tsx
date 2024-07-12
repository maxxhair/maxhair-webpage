import Link from "next/link";

function Path() {
  return (
    <div className="w-full px-48 py-10 md:body-large body-medium">
      <Link href="/" className="font-[600]">
        Home
      </Link>{" "}
      - <Link href="/ourstory">Our Story</Link>
    </div>
  );
}

export default Path;
