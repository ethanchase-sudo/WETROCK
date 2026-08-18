import { useState } from 'react';
import { useRouter, matchRoute } from '@/lib/router';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { StatusBar } from '@/components/StatusBar';
import { BookingModal } from '@/components/BookingModal';
import { Home } from '@/pages/Home';
import { Stay } from '@/pages/Stay';
import { RoomDetail } from '@/pages/RoomDetail';
import { Camping } from '@/pages/Camping';
import { PrivateRetreat } from '@/pages/PrivateRetreat';
import { Compound } from '@/pages/Compound';
import { Stargazing } from '@/pages/Stargazing';
import { Experiences } from '@/pages/Experiences';
import { DiscoverMoab } from '@/pages/DiscoverMoab';
import { About } from '@/pages/About';
import { KitHost } from '@/pages/KitHost';
import { Gallery } from '@/pages/Gallery';
import { Groups } from '@/pages/Groups';
import { Location } from '@/pages/Location';
import { PlanYourStay } from '@/pages/PlanYourStay';
import { FAQ } from '@/pages/FAQ';
import { Contact } from '@/pages/Contact';

function App() {
  const { path, navigate } = useRouter();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingRoomId, setBookingRoomId] = useState<string | undefined>(undefined);

  const openBooking = (roomId?: string) => {
    setBookingRoomId(roomId);
    setBookingOpen(true);
  };

  const renderPage = () => {
    // Home
    if (path === '/') {
      return <Home onNavigate={navigate} onBookClick={() => openBooking()} />;
    }

    // Room detail (dynamic route)
    const roomMatch = matchRoute('/stay/:slug', path);
    if (roomMatch) {
      return <RoomDetail slug={roomMatch.slug} onNavigate={navigate} onBookClick={(id) => openBooking(id)} />;
    }

    // Static routes
    const routes: Record<string, React.ReactNode> = {
      '/stay': <Stay onNavigate={navigate} onBookClick={() => openBooking()} />,
      '/camping': <Camping onNavigate={navigate} onBookClick={(id) => openBooking(id)} />,
      '/private-retreat': <PrivateRetreat onNavigate={navigate} onBookClick={(id) => openBooking(id)} />,
      '/compound': <Compound onNavigate={navigate} onBookClick={(id) => openBooking(id)} />,
      '/stargazing': <Stargazing onNavigate={navigate} onBookClick={() => openBooking()} />,
      '/experiences': <Experiences onNavigate={navigate} onBookClick={() => openBooking()} />,
      '/discover-moab': <DiscoverMoab onNavigate={navigate} />,
      '/about': <About onNavigate={navigate} />,
      '/kit-host': <KitHost onNavigate={navigate} onBookClick={() => openBooking()} />,
      '/gallery': <Gallery onNavigate={navigate} />,
      '/groups': <Groups onNavigate={navigate} onBookClick={() => openBooking()} />,
      '/location': <Location onNavigate={navigate} />,
      '/plan-your-stay': <PlanYourStay onNavigate={navigate} onBookClick={() => openBooking()} />,
      '/faq': <FAQ onNavigate={navigate} onBookClick={() => openBooking()} />,
      '/contact': <Contact onNavigate={navigate} />,
    };

    if (routes[path]) return routes[path];

    // 404
    return (
      <div className="min-h-screen flex items-center justify-center bg-obsidian-950 pt-20">
        <div className="text-center px-6">
          <p className="label-mono text-spring-400 mb-4">◊ 404</p>
          <h1 className="display-lg text-bone-100 mb-6">This page drifted off the map.</h1>
          <p className="body-md text-bone-400 mb-8">The page you are looking for does not exist.</p>
          <button onClick={() => navigate('/')} className="btn-primary">
            Back to Home
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-obsidian-950 text-bone-100">
      <Nav currentPath={path} onNavigate={navigate} onBookClick={() => openBooking()} />
      <StatusBar />
      <main className="pt-24 md:pt-28">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialRoomId={bookingRoomId}
      />
    </div>
  );
}

export default App;
