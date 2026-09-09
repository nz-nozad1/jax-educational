import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Books0 from "./pages/books0";
import Books1 from "./pages/books1";
import Books2 from "./pages/books2";
import Engineering from "./pages/engineering";

function App() {
  const [page, setPage] = useState(() => {
    const path = window.location.pathname;

    if (path === "/books0") return "books0";
    if (path === "/books1") return "books1";
    if (path === "/books2") return "books2";
    if (path === "/engineering") return "engineering";

    return "home";
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) return;

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [loading]);

  if (loading) {
    return (
      <div className="splash-screen">
        <img src="/nz7.png" alt="المدرسة" />

        <div className="splash-divider"></div>

        <img src="/npm.png" alt="JAX" />
      </div>
    );
  }

  return (
    <>
      {/* الصفحة الرئيسية */}
      {page === "home" && (
        <Home
          onOpenBooks={() => {
            setLoading(true);
            window.history.pushState({}, "", "/books0");
            setPage("books0");
          }}
        />
      )}

      {/* صفحة اختيار النظام */}
      {page === "books0" && (
        <Books0
          onBackHome={() => {
            window.history.pushState({}, "", "/");
            setPage("home");
          }}

          onOpenBooks={() => {
            setLoading(true);
            window.history.pushState({}, "", "/books1");
            setPage("books1");
          }}
        />
      )}

      {/* صفحة كتب البكالوريا */}
      {page === "books1" && (
        <Books1
          onBackHome={() => {
            window.history.pushState({}, "", "/books0");
            setPage("books0");
          }}

          onOpenBooks2={() => {
            setLoading(true);
            window.history.pushState({}, "", "/books2");
            setPage("books2");
          }}

          onGoHome={() => {
            window.history.pushState({}, "", "/");
            setPage("home");
          }}
        />
      )}

      {/* صفحة كتب تانية بكالوريا */}
      {page === "books2" && (
        <Books2
          onBackHome={() => {
            window.history.pushState({}, "", "/books1");
            setPage("books1");
          }}

          onGoHome={() => {
            window.history.pushState({}, "", "/");
            setPage("home");
          }}

          onOpenEngineering={() => {
            setLoading(true);
            window.history.pushState({}, "", "/engineering");
            setPage("engineering");
          }}
        />
      )}

      {/* صفحة هندسه وحاسبات */}
      {page === "engineering" && (
        <Engineering
          onBackHome={() => {
            window.history.pushState({}, "", "/books2");
            setPage("books2");
          }}

          onGoHome={() => {
            window.history.pushState({}, "", "/");
            setPage("home");
          }}
        />
      )}
    </>
  );
}

export default App;