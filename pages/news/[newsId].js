import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();

  return <h1>This is detail page with id {router?.query?.newsId}</h1>;
};

export default Detail;
