import { RouterProvider } from "react-router-dom";
import RootRouter from "./Router";
import AlignCenter from "@components/UI/AlignCenter";

function App() {
  return (
    <AlignCenter>
      <RouterProvider router={RootRouter} />
    </AlignCenter>
  );
}

export default App;
