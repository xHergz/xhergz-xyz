import type { NextPage } from "next";

import CaptainMoldie from "../src/assets/Captain_Moldie.png";
import ImageTile from "../src/components/ImageTile/ImageTile";
import PageWrapper from "../src/components/PageWrapper/PageWrapper";

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <div>
        <ImageTile
          imageSource={CaptainMoldie.src}
          title="ROSE Tools"
          linkTo="/rose"
          size="large"
        />
      </div>
    </PageWrapper>
  );
};

export default Home;
