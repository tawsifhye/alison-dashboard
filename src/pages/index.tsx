import CourseContent from "components/CourseContent";
import { Data } from "interface/interface";
import type { NextPage } from "next";

const Home: NextPage = () => {
  // as url redirect // page won't display
  return (
    <>
      <CourseContent />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch(
    "https://alison-dashboard-i24nie5tc-tawsifhye.vercel.app/fakeData.json"
  );
  const modules: Data[] = await res.json();
  return { props: { modules }, revalidate: 10 };
}
