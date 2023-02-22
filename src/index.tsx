import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import 'antd/dist/reset.css';

import { App } from "./components/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);
