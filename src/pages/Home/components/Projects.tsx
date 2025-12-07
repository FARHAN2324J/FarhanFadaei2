import { useNavigate } from "react-router-dom";
import { cards } from "../../../data/cards";
import Badge from "../../../components/ui/Badge";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <section className="sm:px-6 sm:py-8 py-5 px-4 lg:mx-5 mx-3 my-10" id="pp">
      <h2 className="Info text-center mb-10">Projects</h2>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {cards.map((card) => (
          <article
            key={card.id}
            className="bg-(--gray-700) border border-(--gray-500) rounded-4xl sm:p-5 p-4 cart-shadowing h-full flex flex-col"
          >
            <img
              src={card.src}
              alt={card.title}
              className="rounded-2xl border border-(--gray-500-31)"
            />
            <div className="flex flex-col mb-4 flex-1">
              <div className="flex items-baseline flex-wrap gap-3">
                <h3 className="title mt-5">{card.title}</h3>
                {card.category && <Badge type={card.category} />}
              </div>
              <div className="flex items-center flex-wrap gap-2 mt-3">
                {card.tags.map((tag) => (
                  <span key={tag} className="Caption">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 mt-auto">
              {card.category === "featured" && (
                <button
                  onClick={() => {
                    navigate(`/projects/${card.title}`);
                    window.scrollTo({ top: 0 });
                  }}
                  className="palette sm:px-3 sm:py-2.5 px-3 py-2 cursor-pointer"
                  aria-label="More information"
                >
                  <span className="text-(--gray) text-sm">More Info</span>
                </button>
              )}
              <a
                href={card.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="palette sm:px-3 sm:py-2.5 px-3 py-2"
                aria-label="Live preview"
              >
                <div className="flex items-center gap-2">
                  <span className="text-(--gray) text-sm">Live Preview</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 21L21 1M21 1H6M21 1V16"
                      stroke="#8d8d8d"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
