import "./styles.css";
import PageLayout from "/src/layout/PageLayout";
import Advertisement from "/src/components/Advertisement";

// remove default margin on <body>
document.body.style.margin = 0;

const App = () => (
  <PageLayout>
    <Advertisement />
  </PageLayout>
);

export default App;
