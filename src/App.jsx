import { useEffect, useState, useRef } from "react";

import { fetchImages } from "./services/api";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const totalPages = useRef(0);

  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async () => {
      try {
        setErrorMessage("");
        setIsLoading(true);
        const { total, total_pages, results } = await fetchImages(page, query);
        if (total === 0) {
          setErrorMessage("No images found for your request");
          return;
        }
        totalPages.current = total_pages;
        if (totalPages.current === 1) {
          setErrorMessage("End of gallery");
        }
        setImages((prev) => [...prev, ...results]);
      } catch {
        setErrorMessage(
          "Something went wrong. Check your internet connection."
        );
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page, query]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
    if (page === totalPages.current) {
      setErrorMessage("End of gallery");
    }
  };

  const handleSetQuery = (searchValue) => {
    totalPages.current = 0;
    setQuery(searchValue);
    setImages([]);
    setPage(1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleOnModalClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar setQuery={handleSetQuery} />
      {!!images.length && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && page < totalPages.current && (
        <LoadMoreBtn onClick={handleChangePage} />
      )}
      {!!errorMessage && <ErrorMessage message={errorMessage} />}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={handleOnModalClose}
          image={selectedImage}
        />
      )}
    </>
  );
}

export default App;
