import { FC } from "react";

import MainLayout from "layouts/MainLayout";
import MainPage from "pages/MainPage";

const App: FC = () => {
  return (
    <MainLayout>
      <MainPage />
    </MainLayout>
  );
};

export default App;
