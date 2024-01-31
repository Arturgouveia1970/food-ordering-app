import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="max-w-2xl mx-auto text-gray-500 mt-4 flex flex-col gap-4">
          <p>
            Ipsum consectetur ea culpa occaecat eu consectetur eu laborum elit
            labore enim do dolore commodo. Nisi culpa dolor dolore reprehenderit
            qui eu magna nostrud est. Ea nostrud minim ex cillum aute tempor
            duis cupidatat est reprehenderit. Pariatur officia ad officia
            eiusmod aute in nisi minim id quis sit. Velit enim veniam culpa qui
            aliquip excepteur. Est occaecat velit incididunt fugiat aute nulla
            et adipisicing occaecat irure minim aute ipsum consectetur. Officia
            adipisicing esse duis occaecat culpa aute adipisicing.
          </p>
          <p>
            Magna pariatur anim qui culpa. Quis officia sit qui ad consequat
            sunt ipsum excepteur. Exercitation anim ea non duis duis duis dolor
            laboris nostrud. Magna velit fugiat Lorem ut ad tempor excepteur.
            Irure dolore sit officia ea commodo ut quis dolore ex velit et
            laborum ex labore.
          </p>
          <p>
            Fugiat Lorem consequat laboris ut do velit ea tempor mollit mollit.
            Ea cillum dolor amet aute anim esse dolore ea. Esse Lorem sit aute
            elit proident adipisicing laboris ipsum voluptate.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={'Don\'t hesitate to'}
          mainHeader={'Contact Us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500 " href="tel:+244999123123">+244 999 123 123</a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500">
        &copy; 2024 All rights reserved
      </footer>
    </>
  );
}
