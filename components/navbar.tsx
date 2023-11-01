import getCategories from "@/actions/get-categories";
import Link from "next/link";
import Container from "./container";
import MainNav from "./main-nav";
import NavbarActions from "./navbar-actions";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex items-center h-16">
          <Link href="/" className="font-bold text-xl">
            STORE
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
