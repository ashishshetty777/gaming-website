import Content from './components/content/content';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <div className="main-bg">
      <div className="relative">
        <Header />
        <Content />
        <Footer />
        <Toaster />
      </div>
    </div>
  );
}
