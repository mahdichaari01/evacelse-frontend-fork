"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import Stack from "@/lib/stack";
const DEFAULT_TITLE = "Evacelse";
/*
    we're going to implement a feature that allows the title to be dynamic on navigation
    by default the title is "Evacelse" but if a page sets the title it will be used instead
    howver if a title is set by a compoenent and then reset by a child, the child compoenent will be used until the child is unmounted
    this is done by using a stack of titles,
    if siblings set the title, the last one will be used
    SO the main datastructure is a stack of titles
    it may cause some issues with concurrent rendering but it's not a big deal
 */

interface TitleContextType {
  pushTitle: (title: string) => void;
  popTitle: () => void;
  title: string;
}

const context = createContext({
  pushTitle: (title: string) => {},
  popTitle: () => {},
  title: DEFAULT_TITLE,
});

const DynamicTitleProvider = ({ children }: { children: React.ReactNode }) => {
  const memoizedStack = useMemo(() => new Stack<string>(), []);
  const [title, setTitle] = useState(DEFAULT_TITLE);
  const updateTitle = () => {
    setTitle(memoizedStack.peek() || DEFAULT_TITLE);
  };
  const pushTitle = (title: string) => {
    memoizedStack.push(title);
    updateTitle();
  };
  const popTitle = () => {
    memoizedStack.pop();
    updateTitle();
  };
  return (
    <context.Provider value={{ pushTitle, popTitle, title }}>
      {children}
    </context.Provider>
  );
};

const SetTitle = ({ children }: { children: string }) => {
  const { pushTitle, popTitle } = useContext(context);
  useEffect(() => {
    pushTitle(children);
    return popTitle;
  }, []);
  return <></>;
};

const Title = () => {
  const { title } = useContext(context);
  return <>{title}</>;
};

export { DynamicTitleProvider, Title, SetTitle };
