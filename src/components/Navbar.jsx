import {SimpleHeader} from "./simple-header";

const Navbar = async ({locale, content}) => {
  return <SimpleHeader locale={locale} content={content} />;
};

export default Navbar;
