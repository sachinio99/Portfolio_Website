import {Layout} from "../layout/index";
import main from "../styles/main.module.css";

import Image from 'next/image';

export const Home = () => {
  return (
    <Layout>
    <section className="home">
      <div>
      <Image 
            src="/public/homeImage/prof.jpg" // Correct the path to your image
            alt="A picture of me."
            loading="eager"
            width={500}
            height={500}
            className={"img"}
             // Add a class for styling
          />
      </div>
      <div>
        My name is Sachin Shah and I am a Software Engineer with experience building products within the fintech and enterprise SaaS spaces. I am currently exploring projects
        within the music and generative AI spaces. 
        <p>

        </p>
      </div>
    </section>
    </Layout>
  );
};

export default Home;