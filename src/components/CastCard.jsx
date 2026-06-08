import { getPosterUrl } from "../utils/helpFunctions";
import { useRef } from "react";

function CastCard({ title, Cast }) {
  const containerRef = useRef(null);

  {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        scrollLeft();
      } else if (e.key === "ArrowRight") {
        scrollRight();
      }
    });
  }
  function scrollLeft() {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -330, behavior: "smooth" });
    }
  }
  function scrollRight() {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 330, behavior: "smooth" });
    }
  }
  return (
    <>
      <div className="bg-gray-950 w-full  py-8">
        <div className="max-w-7xl mx-auto p-1">
          <div className="container flex justify-center items-center mx-auto font-bold text-amber-300 bg-gray-950">
            <h1 className="text-2xl ">{title}</h1>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={scrollLeft}
              className="hover:text-white flex items-center gap-1 bg-amber-300 p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <div
              ref={containerRef}
              className="overflow-x-auto w-auto py-4 hide-scrollbar bg-gray-950"
            >
              <div className="flex gap-4 py-4 ">
                {Cast.map((actor) => (
                  <div
                    key={actor.id}
                    className="w-80 flex-shrink-0 flex flex-col justify-between h-auto bg-gray-950 rounded-lg  shadow-lg hover:scale-105 transition-transform duration-300 "
                  >
                    <img
                      src={getPosterUrl(actor.profile_path)}
                      alt={actor.name}
                      className="w-full h-96 object-cover"
                    />
                    <div className="p-4">
                      <div>
                        <h2 className="text-lg font-bold text-white mb-2">
                          {actor.name}
                        </h2>
                        <p className="text-sm text-amber-300 mb-2">
                          as {actor.character}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={scrollRight}
              className="hover:text-white flex items-center gap-1 bg-amber-300 p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default CastCard;
