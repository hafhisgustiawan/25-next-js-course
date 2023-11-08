import { Fragment } from "react";
import Link from "next/link";

const News = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/next-js-is-great">Next js is greate</Link>
        </li>
        <li>
          <Link href="/news/nest-js-is-amazing">Nest js is amazing</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default News;
