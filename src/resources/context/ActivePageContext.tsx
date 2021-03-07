import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  useContext,
  useLayoutEffect,
} from 'react';
import { useLocation } from 'react-router-dom';
import { active } from '../data/menu';

interface ActivePage {
  pageIndex: number | false;
  menuIndex: number | null;
}

interface PageContext {
  activePage: ActivePage;
  setActivePage: Dispatch<SetStateAction<ActivePage>>;
}

const defaultActivePage = {
  pageIndex: 0,
  menuIndex: null,
};

const ActivePageContext = React.createContext({} as PageContext);

const ActiveContextProvider = ({ children }: { children: ReactNode }) => {
  let location = useLocation();
  const [activePage, setActivePage] = useState<ActivePage>(defaultActivePage);

  useLayoutEffect(() => {
    const path = location.pathname.split('/').slice(1);

    let pageIndex: number | false = false;
    let menuIndex: number | null = null;

    if (active[path[0]]) {
      pageIndex = active[path[0]].activeIndex;
      if ('selectedIndex' in active[path[0]])
        menuIndex = active[path[0]].selectedIndex as number;
    } else if (path[0] === '') {
      pageIndex = active['home'].activeIndex;
    }

    if (
      activePage.pageIndex !== pageIndex ||
      menuIndex !== activePage.menuIndex
    )
      setActivePage({
        pageIndex,
        menuIndex,
      });
  }, [location.pathname]);

  return (
    <ActivePageContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </ActivePageContext.Provider>
  );
};

const useActivePageValue = () => useContext<PageContext>(ActivePageContext);

export { ActivePageContext, ActiveContextProvider, useActivePageValue };
