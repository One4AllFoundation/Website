import { Team } from "@/types/team";
import Image from "next/image";
import teamsData from "./teamsData";

const Teams = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {teamsData.map((team) => (
            <div key={team.id} className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div
                className="wow fadeInUp bg-gray-light dark:bg-gray-dark flex flex-wrap items-center justify-center rounded-sm px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"
                data-wow-delay=".1s"
              >
                <SingleTeam team={team} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

const SingleTeam = ({ team }: { team: Team }) => {
  const { image, name, description, position } = team;

  return (
    <div className="mx-3 flex flex-col items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        href="#"
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={image} alt={name} fill />
      </a>
      <p className="mt-2 text-center">{name}</p>
      <p className="mt-2 text-center">{position}</p>
      <p className="mt-2 text-center">{description}</p>
    </div>
  );
};
