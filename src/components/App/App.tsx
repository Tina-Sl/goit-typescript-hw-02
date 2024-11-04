import { useEffect, useState, useRef } from "react";

import { fetchImages } from "../../services/api";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { Image, DataImages } from "../../services/types";

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const totalPages = useRef(0);

  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async (): Promise<void> => {
      try {
        setErrorMessage("");
        setIsLoading(true);
        const data: DataImages | undefined = await fetchImages(page, query);
        if (data === undefined) {
          return;
        }
        const { total, total_pages, results } = data;
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

  const handleChangePage = (): void => {
    setPage((prev) => prev + 1);
    if (page === totalPages.current) {
      setErrorMessage("End of gallery");
    }
  };

  const handleSetQuery = (searchValue: string): void => {
    totalPages.current = 0;
    setQuery(searchValue);
    setImages([]);
    setPage(1);
  };

  const handleImageClick = (image: Image): void => {
    setSelectedImage(image);
  };

  const handleOnModalClose = (): void => {
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
