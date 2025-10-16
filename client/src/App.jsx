import Layout from "./Layout";
import Home from "./Featured/Pages/Home";
import ToTop from "./Featured/Common/ToTop";
import DetailModal from "./Featured/Common/Modal";

const App = () => {
  return (
    <div>
      <Layout>
        <Home />
        <ToTop />
        <DetailModal />
      </Layout>
    </div>
  );
};

export default App;
