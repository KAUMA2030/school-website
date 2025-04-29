import HeroSlider from '../components/HeroSlider';
import Section from '../components/Section';

function Home() {
  return (
    <div>
      <HeroSlider />
      <Section title="Our Mission" content="To provide excellent education and foster innovation." />
      <Section title="Our Vision" content="To be a leader in nurturing the leaders of tomorrow." />
      <Section title="Our Motto" content="Excellence and Integrity." />
      <Section title="Our Core Values" content="Honesty, Teamwork, Innovation, Excellence." />
    </div>
  );
}

export default Home;