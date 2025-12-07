import { Link, useParams } from "react-router-dom";
import { cards } from "../../data/cards";

const ProjectDetail: React.FC = () => {
  const { title } = useParams();
  const project = cards.find((card) => card.title === title);
  if (!project) {
    return <p className="m-5 HeadLine2">Project not found</p>;
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 md:py-16">
      <Link
        to="/"
        className="border-t-2 border-t-(--gray-500) border-b border-b-(--gray-500) pr-4 pl-1 py-3 rounded-4xl  bg-(--white-4) flex items-center w-fit gap-1"
      >
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 1024 1024"
          fill="var(--gray)"
          className="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
            fill=""
          />
        </svg>
        <span className="text-(--gray)">Home</span>
      </Link>
      <div className="my-10 md:my-12 border-b border-(--gray-500) pb-6 md:pb-8">
        <h1 className="HeadLine1 mb-3 md:mb-4 text-(--white)">
          {project.title}
        </h1>
        <p className="HeadLine2 text-pretty">{project.description}</p>
      </div>

      <div className="mb-10 md:mb-12">
        <h2 className="title mb-4 md:mb-6 uppercase tracking-wider">
          Technologies
        </h2>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 md:px-4 md:py-2 bg-(--gray-700) border border-(--gray-500) 
                   rounded-full text-(--gray) text-xs md:text-sm font-medium
                   hover:bg-(--gray-600) transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-12 md:mb-16">
        <h3 className="title mb-6 md:mb-8 uppercase tracking-wider">
          Features
        </h3>
        <ul className="space-y-4 md:space-y-6 list-disc pl-5">
          {project.features?.map((feature, index) => (
            <li
              key={index}
              className="text-base md:text-lg text-(--gray) hover:text-(--white) transition-colors"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-(--gray-500) pt-6 md:pt-8">
        <h4 className="title mb-6 md:mb-8 uppercase tracking-wider">Links</h4>
        <div className="flex sm:flex-row flex-col items-center gap-3">
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 
               bg-(--gray-800) border border-(--gray-600) rounded-lg 
               text-(--gray) hover:text-(--white) hover:bg-(--gray-700) 
               transition-all group w-full sm:w-auto"
          >
            <span className="font-medium">Live Preview</span>
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <a
            href={project.links.source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 
               bg-(--gray-800) border border-(--gray-600) rounded-lg 
               text-(--gray) hover:text-(--white) hover:bg-(--gray-700) 
               transition-all group w-full sm:w-auto"
          >
            <span className="font-medium">Source Code</span>
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
