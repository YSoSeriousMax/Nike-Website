import {CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality} from './sections';
import Nav from './components/Nav';


const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding"> 
      <PopularProducts />
    </section>
    <section className="px-8 py-12 sm:px-16 sm:py-24"><SuperQuality/> </section>
    <section className="px-8 py-10 sm:px-16<"><Services/> </section>
    <section className="px-8 py-12 sm:px-16 sm:py-24"><SpecialOffer/> </section>
    <section className="px-8 py-12 bg-pale-blue sm:px-16 sm:py-24">
      <CustomerReviews />
    </section>
    <section className="w-full px-8 py-16 sm:px-16 sm:py-32<"><Subscribe/> </section>
    <section className="px-8 pt-12 pb-8 bg-black sm:px-16 sm:pt-24<"><Footer/> </section>
  </main >
);

export default App;
