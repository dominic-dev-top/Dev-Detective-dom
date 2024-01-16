import { NotFound } from "./NotFound";
import { FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export const Result = ({ info, theme, notFound }) => {
  const avatar = info.avatar;
  const location = info.location != null ? info.location : "Not Available";
  const name = info.name;
  const username = info.username;
  const repos = info.repos;
  const following = info.following;
  const followers = info.followers;
  const bio = info.bio;
  const url = info.url;
  const twitter = info.twitter;

  return (
    <div>
      <div className={`{theme==dark ? "text-white" : "text-black"}`}>
        {notFound == true && <NotFound />}
      </div>
      {notFound == false && (
        <div
          className={`${
            theme === "dark"
              ? "bg-cardBlue shadow-blue shadow-blue-500/5 shadow-xl"
              : "bg-white shadow-lg"
          } my-8 p-8 rounded-lg flex flex-col md:flex-row gap-8`}
        >
          <div className="h-fit md:h-full mx-auto md:mx-0">
            <img
              src={avatar}
              alt="image"
              className="rounded-full w-[160px] md:w-[220px]"
            />
          </div>
          <div className="flex flex-col font-spaceMono">
            <h1 className=" text-2xl font-bold text-center md:text-left">
              {name}
            </h1>
            <a
              href={url}
              rel="noreferrer"
              target="_blank"
              className="underline text-blue-500 text-center md:text-left"
            >{`@${username}`}</a>
            <p className="text-gray-400 my-4">{bio}</p>
            <div
              className={`${
                theme == "dark" ? "bg-darkBlue" : "bg-frostWhite"
              } flex max-w-fit w-[90%] overflow-hidden gap-8 md:gap-20 px-4 md:px-10 my-4 py-6 rounded-xl text-center justify-center items-center mx-auto`}
            >
              <div className="flex flex-col shrink-1">
                <p className="text-xs md:text-sm">Repos</p>
                <p className="text-md md:text-2xl font-bold">{repos}</p>
              </div>
              <div>
                <p className="text-xs md:text-sm">Followers</p>
                <p className="text-md md:text-2xl font-bold">{followers}</p>
              </div>
              <div>
                <p className="text-xs md:text-sm">Following</p>
                <p className="text-md md:text-2xl font-bold">{following}</p>
              </div>
            </div>
            <div className="text-lg">
              <div className="flex items-center gap-2">
                <FaLocationDot />
                <p>{location}</p>
              </div>
              {twitter != null && (
                <div className="flex items-center gap-2">
                  <FaTwitter />
                  <a
                    className="underline"
                    href={`https://www.twitter.com/${twitter}`}
                    rel="noreferrer"
                    target="_blank"
                  >{`@${twitter}`}</a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
