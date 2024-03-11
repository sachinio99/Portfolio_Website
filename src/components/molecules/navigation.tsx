import Link from "next/link";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/resume">Resume</Link>
        </li>
        <li>
          <Link href="/substack">Substack</Link>
        </li>
        <li>
          <Link href="/project">What Im working on</Link>
        </li>
        <li>
          <Link href="/blog">What Im Thinking About</Link>
        </li>
        <li>
          <Link href="/music">Look at your live Spotify Data</Link>
        </li>
      </ul>
    </nav>
  );
};