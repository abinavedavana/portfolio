import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const sections = [
  { id: "home", path: "/" },
  { id: "about", path: "/about" },
  { id: "projects", path: "/projects" },
  { id: "resume", path: "/resume" },
  { id: "contact", path: "/contact" },
];

function ScrollRouter() {
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const match = sections.find(s => s.id === entry.target.id);
            if (match) navigate(match.path, { replace: true });
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navigate]);

  return null;
}


export default ScrollRouter;

