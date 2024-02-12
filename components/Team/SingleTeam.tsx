import { Team } from "@/types/team";
import Image from "next/image";
import Link from "next/link";

const SingleTeam = ({ team }: { team: Team }) => {
    const { name, image, position, description } = team;
    return (
        <>
            <div
                className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark"
                data-wow-delay=".1s"
            >
                <div className="relative block aspect-[37/22] w-full">
                    <Image src={image} alt="image" fill />
                </div>
                <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
                    <h3>
                        <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                            {name}
                        </h2>
                    </h3>
                    <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
                        {position}
                    </p>
                    <div className="flex items-center">
                        {description}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTeam;
