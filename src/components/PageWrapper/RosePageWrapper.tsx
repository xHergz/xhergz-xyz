import RoseNavList from "../NavList/RoseNavList";
import PageWrapper, { PageWrapperProps } from "./PageWrapper";

export type RosePageWrapperProps = PageWrapperProps & {};

const RosePageWrapper: React.FunctionComponent<RosePageWrapperProps> = ({
  children,
}: RosePageWrapperProps): JSX.Element => {
  return (
    <PageWrapper>
      <div className="flex h-full w-full">
        <RoseNavList />
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </div>
    </PageWrapper>
  );
};

export default RosePageWrapper;
