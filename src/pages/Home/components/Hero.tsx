import Profile from "../../../assets/images/image 1.jpg";
import { skillsData } from "../../../data/skillsData";
import { servicesImages } from "../../../data/servicesImages";
import { useRef } from "react";
import { useCursorInElement } from "../../../hooks/useCursorElement";

const Hero = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const coords = useCursorInElement(imgRef);
  return (
    <header className="grid-layouts lg:m-5 m-3">
      {/* Profile */}
      <section
        className="g xl:p-6 lg:p-6 p-4 rounded-4xl z-5 flex flex-col"
        id="Profile"
      >
        <img
          ref={imgRef}
          src={Profile}
          loading="eager"
          className="rounded-2xl shadow-lg lg:w-full md:max-w-[350px] w-full object-cover mx-auto cursor-none"
          alt="Farhan Fadaei profile photo"
        />
        {coords && (
          <div
            className="fixed top-0 left-0 p-3  rounded-full duration-100 bg-(--gray-900-42) pointer-events-none  items-center justify-center backdrop-blur-lg lg:block hidden"
            style={{
              transform: `translate(${coords.x}px, ${coords.y}px) translate(-50%, -50%)`,
            }}
          >
            <span className="text-[#ffffffb4]">Hire me!</span>
          </div>
        )}
        <h1 className="DisplayHeadline pt-5">Farhan Fadaei</h1>
        <h2 className="HeadLine2 pt-4">Front End Dev</h2>
        <div className="flex items-center sm:gap-5 gap-3 py-8 mt-auto">
          <a
            href="https://www.linkedin.com/in/farhan-fadaei/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-(--gray-800) p-3 rounded-[100px] border-(--gray-400) border-t-2 border-b border-b-(--gray-500-52) hover:bg-(--gray-900-42) duration-400  hover:border-(--gray-500-60)"
            aria-label="LinkedIn profile"
            title="LinkedIn"
          >
            <svg
              role="img"
              aria-label="LinkedIn icon"
              width="25"
              height="25"
              className="sm:w-[25px] sm:h-[25px] w-5 h-5"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30 28.6364H23.3696V19.0489C23.3696 16.5394 22.3324 14.8262 20.0518 14.8262C18.3073 14.8262 17.3371 15.9823 16.8856 17.0965C16.7162 17.4964 16.7427 18.0535 16.7427 18.6106V28.6364H10.174C10.174 28.6364 10.2587 11.6531 10.174 10.1094H16.7427V13.017C17.1308 11.7457 19.2298 9.93124 22.5794 9.93124C26.7351 9.93124 30 12.5962 30 18.3347V28.6364ZM3.53127 7.79196H3.48895C1.3723 7.79196 0 6.37566 0 4.58042C0 2.75024 1.41286 1.36365 3.57185 1.36365C5.72907 1.36365 7.0555 2.74677 7.09783 4.57519C7.09783 6.37044 5.72906 7.79196 3.53127 7.79196ZM0.756683 10.1094H6.60395V28.6364H0.756683V10.1094Z"
                fill="white"
              />
            </svg>
          </a>
          <span className="w-px h-5 bg-(--gray-500-79)"></span>
          <a
            href="https://t.me/Feri3044"
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram"
            aria-label="Telegram profile"
            className="bg-(--gray-800) p-3 rounded-[100px] border-(--gray-400) border-t-2 border-b border-b-(--gray-500-52) hover:bg-(--gray-900-42) duration-400  hover:border-(--gray-500-60)"
          >
            <svg
              role="img"
              className="sm:w-[25px] sm:h-[25px] w-5 h-5"
              aria-label="Telegram icon"
              width="25"
              height="25"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_15_43)">
                <path
                  d="M23.8871 4.56812C23.8871 4.56812 26.3154 3.62124 26.113 5.9208C26.0456 6.86769 25.4385 10.1817 24.9663 13.7664L23.3474 24.3849C23.3474 24.3849 23.2126 25.9405 21.9984 26.2111C20.7842 26.4816 18.963 25.2642 18.6257 24.9936C18.3559 24.7908 13.5667 21.7472 11.8804 20.2592C11.4082 19.8534 10.8686 19.0418 11.9478 18.0949L19.0304 11.3316C19.8399 10.5199 20.6493 8.62619 17.2766 10.9257L7.83319 17.351C7.83319 17.351 6.75394 18.0273 4.73038 17.4186L0.345888 16.0659C0.345888 16.0659 -1.27299 15.0514 1.49259 14.0369C8.23794 10.8581 16.5347 7.61162 23.8871 4.56812Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_15_43">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <span className="w-px h-5 bg-(--gray-500-79)"></span>
          <a
            href="mailto:farhanfadayi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
            aria-label="Email profile"
            className="bg-(--gray-800) p-3 rounded-[100px] border-(--gray-400) border-t-2 border-b border-b-(--gray-500-52) hover:bg-(--gray-900-42) duration-400  hover:border-(--gray-500-60)"
          >
            <svg
              role="img"
              className="sm:w-[25px] sm:h-[25px] w-5 h-5"
              aria-label="Email icon"
              width="25"
              height="25"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_17_161)">
                <path
                  d="M29.7119 12.2171H15.3195V17.9842H23.5895C23.4565 18.8003 23.158 19.6032 22.7209 20.3354C22.22 21.1741 21.6008 21.8127 20.9662 22.299C19.0651 23.7558 16.8487 24.0537 15.3095 24.0537C11.4211 24.0537 8.09879 21.5406 6.81264 18.1257C6.76074 18.0018 6.72627 17.8738 6.68431 17.7473C6.40009 16.8781 6.24481 15.9577 6.24481 15.001C6.24481 14.0053 6.41296 13.0522 6.71958 12.152C7.92899 8.60177 11.3262 5.95008 15.3123 5.95008C16.114 5.95008 16.8861 6.04551 17.6183 6.23586C19.2916 6.67088 20.4752 7.52765 21.2004 8.20535L25.5766 3.9197C22.9146 1.47896 19.4444 3.69022e-09 15.305 3.69022e-09C11.9958 -7.12241e-05 8.94063 1.03098 6.437 2.77348C4.40664 4.18661 2.74145 6.0786 1.61766 8.27594C0.572364 10.3133 0 12.5711 0 14.9987C0 17.4264 0.573238 19.7077 1.61853 21.7262V21.7398C2.72262 23.8828 4.33718 25.7279 6.29951 27.1345C8.01381 28.3634 11.0877 30 15.305 30C17.7303 30 19.8797 29.5627 21.7753 28.7433C23.1428 28.1522 24.3544 27.3811 25.4514 26.3902C26.9008 25.0809 28.0359 23.4614 28.8107 21.5981C29.5855 19.7348 30 17.6277 30 15.3433C30 14.2794 29.8931 13.199 29.7119 12.217V12.2171Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_17_161">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <span className="w-px h-5 bg-(--gray-500-79)"></span>
          <a
            href="https://github.com/FARHAN2324J"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            aria-label="GitHub profile"
            className="bg-(--gray-800) p-3 rounded-[100px] border-(--gray-400) border-t-2 border-b border-b-(--gray-500-52) hover:bg-(--gray-900-42) duration-400  hover:border-(--gray-500-60)"
          >
            <svg
              role="img"
              className="sm:w-[25px] sm:h-[25px] w-5 h-5"
              aria-label="GitHub icon"
              width="25"
              height="25"
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-140.000000, -7559.000000)"
                  fill="#FFFF"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                      id="github-[#142]"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </section>
      {/* About */}
      <section
        className="g lg:px-6 md:px-4 lg:py-8 md:py-6 p-4 rounded-4xl z-5 flex flex-col gap-6"
        id="About"
      >
        <article>
          <h3 className="Info">About</h3>
          <p className="pt-5 text-pretty ItalicText">
            Someone who loves the world of programming and is always looking for
            a way to solve problems and constantly learn new technologies and
            improve skills.
          </p>
        </article>
        <span className=" h-px bg-(--gray-500-37)"></span>
        <article>
          <h4 className="Info">Services</h4>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 items-center xl:gap-8 lg:gap-5 md:gap-2 gap-3 mt-5">
            {servicesImages.map((service, index) => (
              <div
                className={`bg-(--gray-800) w-full rounded-[28px] grid-rows-subgrid items-center row-span-2 grid relative overflow-hidden 
        ${
          index === servicesImages.length - 1
            ? "lg:col-span-2 xl:col-span-1"
            : ""
        }`}
                style={
                  { "--divider-color": service.color } as React.CSSProperties
                }
              >
                <div className="absolute divider1" aria-hidden="true"></div>
                <div className="absolute divider2" aria-hidden="true"></div>
                <figure className="bg-(--gray-600-43) inner-shadowing rounded-3xl m-2 relative z-5 p-5 grid-rows-subgrid row-span-2 grid  items-center justify-center">
                  <img
                    src={service.src}
                    alt={service.alt}
                    width={150}
                    height={150}
                    loading="lazy"
                    className="m-auto"
                  />
                  <figcaption className="Caption text-center sm:mt-0 mt-5">
                    {service.caption}
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </article>
      </section>
      {/* Skills */}
      <section className="g px-6 py-8" id="Skills">
        <h5 className="Info">Skills</h5>
        <ul className="mt-5 border border-(--gray-500-53) p-4 z-5 bg-(--gray-800) w-fit rounded-[34px] relative overflow-hidden inset-shadowing grid gap-4 items-center skills-list lg:grid-cols-10 md:grid-cols-3 grid-cols-3">
          {skillsData.map((skill) => (
            <li
              key={skill.id}
              className="p-1 bg-(--gray-300-19) rounded-[18px] w-fit"
              aria-label={skill.title}
              title={skill.title}
            >
              {skill.icon}
            </li>
          ))}
        </ul>
      </section>
    </header>
  );
};

export default Hero;

