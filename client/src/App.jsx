import Layout from "./Layout";
import Home from "./Featured/Pages/Home";
import ToTop from "./Featured/Common/ToTop";

const App = () => {
  return (
    <div>
      <Layout>
        <Home />
        <ToTop />
      </Layout>
    </div>
  );
};

export default App;
