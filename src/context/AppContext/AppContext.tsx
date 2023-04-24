import React from "react";
import { AppContextProvider, ChildrenContextProvider } from "types";

export const AppContext = (providers: AppContextProvider[]) => {
  return providers.reduce(
    (Prev: AppContextProvider, Curr: AppContextProvider) =>
      ({ children }: ChildrenContextProvider) =>
        (
          <Prev>
            <Curr>{children}</Curr>
          </Prev>
        ),
  );
};
