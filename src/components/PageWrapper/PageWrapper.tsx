import React, { use } from "react";
import clsx from "clsx";
import {
  Cog8ToothIcon,
  CommandLineIcon,
  StarIcon,
  UserCircleIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import getConfig from "next/config";
import Image from "next/image";
import Link from "next/link";

import { PATHS } from "../../constants/routes.constants";
import logo from "../../assets/logo.png";

import { customLoader } from "../../utils/next.utils";
import { useAuth } from "../../contexts/AuthContext";
import { useSupabase } from "../../contexts/SupabaseContext";

export type PageWrapperProps = React.PropsWithChildren<{}>;

const ICON_SIZE = 48;
const { publicRuntimeConfig } = getConfig();

const PageWrapper: React.FunctionComponent<PageWrapperProps> = ({
  children,
}: PageWrapperProps): JSX.Element => {
  const auth = useAuth();
  const supabase = useSupabase();

  const isSignedIn = !auth.loading && auth.user;

  const logout = () => {
    supabase.auth.signOut();
  };

  return (
    <div className="flex flex-col h-screen w-full">
      <nav className="flex items-center h-16 w-100 px-2 py-2 border-b">
        <Link className="mb-2" href={PATHS.HOME}>
          <Image
            src={logo.src}
            height={ICON_SIZE}
            width={ICON_SIZE}
            alt="left logo"
            loader={customLoader}
          />
        </Link>
        {isSignedIn ? (
          <Link
            className="ml-auto px-2 underline"
            href={PATHS.SIGN_IN}
            onClick={logout}
          >
            Log Out
          </Link>
        ) : (
          <Link className="ml-auto px-2 underline" href={PATHS.SIGN_IN}>
            Sign In
          </Link>
        )}
        <Link className="mr-2 px-2 underline" href={PATHS.SUPPORT}>
          Support
        </Link>
      </nav>
      <div className="flex flex-1">
        <nav className="flex flex-col h-100 w-16 border-r">
          <Link className="px-2 hover:bg-gray-100" href={PATHS.ROSE}>
            <StarIcon
              className="rotate-[12deg] my-2"
              height={ICON_SIZE}
              width={ICON_SIZE}
              color="grey"
              strokeWidth={1}
            />
          </Link>
          {isSignedIn && (
            <>
              <Link className="px-2 hover:bg-gray-100" href={PATHS.DEV}>
                <CommandLineIcon
                  className="my-2"
                  height={ICON_SIZE}
                  width={ICON_SIZE}
                  color="grey"
                  strokeWidth={1}
                />
              </Link>
              <Link className="px-2 hover:bg-gray-100" href={PATHS.MISC}>
                <WrenchScrewdriverIcon
                  className="my-2"
                  height={ICON_SIZE}
                  width={ICON_SIZE}
                  color="grey"
                  strokeWidth={1}
                />
              </Link>
            </>
          )}
          <div className="flex flex-col mt-auto">
            {isSignedIn && (
              <>
                <Link className="px-2 hover:bg-gray-100" href={PATHS.SETTINGS}>
                  <Cog8ToothIcon
                    className="my-2"
                    height={ICON_SIZE}
                    width={ICON_SIZE}
                    color="grey"
                    strokeWidth={1}
                  />
                </Link>
                <Link className="px-2 hover:bg-gray-100" href={PATHS.ACCOUNT}>
                  <UserCircleIcon
                    className="my-2"
                    height={ICON_SIZE}
                    width={ICON_SIZE}
                    color="grey"
                    strokeWidth={1}
                  />
                </Link>
              </>
            )}
            <span className="text-sm self-center">
              v{publicRuntimeConfig?.version}
            </span>
          </div>
        </nav>
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
};

export default PageWrapper;
