
import React from "react";
import PageLaout from "./../PageLayout"
import './../styles/App.css';

const App = () => {
  const headerContent = <header>This is the header</header>;
  const footerContent = <footer>This is the footer</footer>;

  return (
    <PageLayout header={headerContent} footer={footerContent}>
      <main>
       <h1>Welcome to my website</h1>
      </main>
    </PageLayout>
  );
};

export default App;
