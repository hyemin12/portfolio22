import Layout from "../components/Layout";
import About from "../components/profile/About";
import Skills from "../components/profile/Skills";
import Experience from "../components/profile/Experience";
import ProfileHeader from "../components/profile/ProfileHeader";

const ProfileTemplate = () => {
  return (
    <Layout>
      <ProfileHeader />
      <About />
      <Skills />
      <Experience />
    </Layout>
  );
};

export default ProfileTemplate;
