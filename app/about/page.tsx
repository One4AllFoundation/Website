import SingleTeam from "@/components/Team/SingleTeam";
import teamData from "@/components/Team/teamsData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "One4AllFoundation",
  description: "We make life better",
  // other metadata
};

const Team = () => {
  return (
    <>
      <Breadcrumb
        pageName="Team"
        description="Meet our amazing team members who work tirelessly to make a difference in people's lives."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {teamData.map((team) => (
              <div
                key={team.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleTeam team={team} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
