
import React from "react";
import PageLaout from "./../PageLayout"
import './../styles/App.css';

const App = () => {
  const headerContent = <header>This is the header</header>;
  const footerContent = <footer>This is the footer</footer>;

  return (
    <PageLayout header={headerContent} footer={footerContent}>
      <main>
      <header>This is the header</header>;
      <div>This is the children content</div>;
      <footer>This is the footer</footer>;
     </main>
    </PageLayout>
  );
};

export default App;
