import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="">
      <div className="px-4 pt-4 flex justify-between text-textGray font-bold border-b-[1px] broder-broderGray">
        <Link href="/" className="pb-3 flex items-center border-b-4 border-iconBlue">
          For you
        </Link>
        <Link href="/" className="pb-3 flex items-center">Following</Link>
        <Link href="/" className="pb-3 flex items-center">React.js</Link>
        <Link href="/" className="pb-3 flex items-center">JavaScript</Link>
        <Link href="/" className="pb-3 flex items-center">CSS</Link>
      </div>
      <Share/>
      <Feed/>
      </div>
  );
}
