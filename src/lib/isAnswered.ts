import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
type NotifierT = () => void;
const formatKey = (id: string) => `isAnswered-${id}`;

export function isAnswered(id: string) {
  return localStorage.getItem(formatKey(id)) != null;
}

export function setAnswered(id: string) {
  localStorage.setItem(formatKey(id), "true");
}

class UserAnswers {
  private answered: Map<string, boolean> = new Map<string, boolean>();
  private notifier: Map<string, NotifierT> = new Map<string, NotifierT>();
  public subscribe(id: string, notifier: NotifierT) {
    this.notifier.set(id, notifier);
  }
  public unscubscribe(id: string) {
    this.notifier.delete(id);
  }
  public notify() {
    Array.from(this.notifier.values()).forEach((f) => f());
  }
  public setAnswered = (id: string) => {
    setAnswered(id);
    this.answered.set(id, true);
    this.notify();
  };
  public isAnswered = (id: string) => {
    const inMemoryValue = this.answered.get(id);
    if (typeof inMemoryValue != "undefined") return inMemoryValue;
    if (isAnswered(id)) {
      this.answered.set(id, true);
      return true;
    }
    return false;
  };
}
const userAnswersManager = new UserAnswers();
export const useIsAnswered = (id: string) => {
  const [, setState] = useState(true);
  useEffect(() => {
    userAnswersManager.subscribe(id, () => setState((e) => !e));
    return () => userAnswersManager.unscubscribe(id);
  }, [id]);
  return {
    isAnswered: userAnswersManager.isAnswered,
    setAnswered: userAnswersManager.setAnswered,
  };
};
