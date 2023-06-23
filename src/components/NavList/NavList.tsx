import Link from "next/link";
import Text from "../common/Text";

export type NavItem = {
  title: string;
  href: string;
};

export type NavSection = {
  title: string;
  items: NavItem[];
};

export type NavListProps = {
  sections: NavSection[];
  title: string;
};

const NavList: React.FunctionComponent<NavListProps> = ({
  sections,
  title,
}: NavListProps): JSX.Element => {
  return (
    <div className="flex p-4 w-64 border-r h-full">
      <nav className="w-full">
        <Text variant="h3" color="primary">
          {title}
        </Text>
        <ul className="mt-4">
          {sections.map((section) => (
            <>
              <li key={section.title} className="mt-2">
                <Text variant="h5" color="secondary">
                  {section.title}
                </Text>
              </li>
              {section.items.map((item) => {
                return (
                  <li key={`${section.title}-${item.title}`}>
                    <Link href={item.href}>
                      <Text variant="p" color="secondary">
                        {item.title}
                      </Text>
                    </Link>
                  </li>
                );
              })}
            </>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavList;
