import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import browserPlugin from "router5-plugin-browser";
import loggerPlugin from "router5-plugin-logger";
import {Page} from "./player";
import createRouter from "router5";
import {routes} from "./player/routes";
import {createAppStore} from "./utils/create-app-store/create-app-store";
import {Root} from "./_components/root";

const root = document.getElementById("root");

const router = createRouter(routes, {
  defaultRoute: "home",
  defaultParams: {},
  allowNotFound: false,
  caseSensitive: true,
  queryParamsMode: "loose",
});

router.usePlugin(browserPlugin());
router.usePlugin(loggerPlugin);

const store = createAppStore({router});

router.setDependencies({routes, store});

router.start(() => {
  ReactDom.render(
    <>
      <Provider store={store}>
        <Root />
        <Page router={router} />
      </Provider>
    </>,
    root
  );
});
