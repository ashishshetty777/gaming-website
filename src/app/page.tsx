import Content from './components/content/content';
import Footer from './components/footer/footer';
import Header from './components/header/header';

export default function Home() {
  return (
    <div className="main-bg">
      <div className="relative">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}
