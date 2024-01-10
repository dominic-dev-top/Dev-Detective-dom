import { Header } from "./Components/Header";
import { Search } from "./Components/Search";
import { Result } from "./Components/Result";
import { useState, useEffect } from "react";
import { fetchData } from "./api";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [inputData, setInputData] = useState("actuallyakshat");

  const [notFound, setNotFound] = useState(false);
  const [data, setData] = useState([]);

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [url, setUrl] = useState("");
  const [twitter, setTwitter] = useState("");
  const [info, setInfo] = useState({});

  useEffect(() => {
    searchHandler();
    const time = new Date();
    const currentHour = time.getHours();
    {
      currentHour > 15 ? setTheme("dark") : setTheme("light");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(data);
    renderData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchHandler]);

  function renderData(data) {
    setAvatar(data.avatar_url);
    setName(data.name);
    setUsername(data.login);
    setRepos(data.public_repos);
    setFollowers(data.followers);
    setFollowing(data.following);
    setLocation(data.location);
    setBio(data.bio);
    setUrl(data.html_url);
    setTwitter(data.twitter_username);
    setInfo({ name, avatar, username, repos, followers, following, location, bio, url, twitter});
  }

  function themeHandler() {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  }

  async function searchHandler() {
    try {
      const data = await fetchData(inputData);
      if (data.message === "Not Found") {
        setNotFound(true);
      } else {
        setNotFound(false);
        setData(data);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-darkBlue text-white"
          : "bg-frostWhite text-softBlue"
      } h-full min-h-screen w-screen flex justify-center py-10`}
    >
      <div className="w-[720px] h-full">
        <Header theme={theme} themeHandler={themeHandler} />
        <Search
          theme={theme}
          inputData={inputData}
          setInputData={setInputData}
          setNotFound={setNotFound}
          setData={setData}
          searchHandler={searchHandler}
        />
        <Result info={info} theme={theme} notFound={notFound} />
      </div>
    </div>
  );
}
