import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import axios from "axios";
import { useState, useEffect } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import toast, { Toaster } from "react-hot-toast";
import { BarLoader } from "react-spinners";
import ImageModal from "./components/ImageModal";

function App() {
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [word, setWord] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [a, setA] = useState("");

  const handleChange =
    ("input",
    (event) => {
      const value = event.target.value;
      setWord(value);
    });

  const handleEmpty = () => {
    setGallery([]);
  };

  function openModal() {
    setIsOpen(true);
  }

  function deneme(y) {
    setA(y);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    handleEmpty();
  }, [word]);

  useEffect(() => {
    handleClick();
  }, [page]);

  function handleClick() {
    if (word.length > 2) {
      setLoading(true);
      axios
        .get(
          `https://api.unsplash.com/search/photos?query=${word}&client_id=WGMjeJGxu-KWot8l7pRTAZ8GytRfKwI71OFtklXNvAM&page=${page}&per_page=20`
        )
        .then(async (response) => {
          setGallery(gallery.concat(response.data.results));
        })
        .catch(() => {
          toast.error("The image could not be loaded");
        })
        .finally(() => setLoading(false));
    } else if (word.length > 0) {
      toast.error("The entered word must contain 3 or more characters");
    }
  }

  return (
    <>
      <div className="box">
        <SearchBar changeWord={handleChange} />
        <button onClick={handleClick}>Search</button>
      </div>
      <Toaster position="top-right" reverseOrder={false} />

      <ImageGallery imageList={gallery} ka={deneme} o={openModal} />
      <ImageModal o={openModal} c={closeModal} m={modalIsOpen} img={a} />

      {loading && (
        <div style={{ margin: "0 auto", width: "200px" }}>
          <BarLoader color="#fff" width={200} />
        </div>
      )}
      <br />
      {gallery.length > 0 && (
        <button onClick={() => setPage(page + 1)}>Load More</button>
      )}
    </>
  );
}

export default App;
