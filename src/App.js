import "./styles.css";
import PageLayout from "/src/layout/PageLayout";

// remove default margin on <body>
document.body.style.margin = 0;

const App = () => (
  <PageLayout>
    <div>homepage - welcome to our shop</div>
  </PageLayout>
);

export default App;
