import { createContext, ReactNode, useEffect, useState } from "react";
import Bookmark from "../../core/models/Bookmark";

interface BookmarkContextType {
  bookmarks: Bookmark[];
  saveBookmarks?: (newBookMark: Bookmark) => void;
  deleteBookmark?: (newBookMark: Bookmark) => void;
  deleteAllBookmarks?: () => void;
  errorForm?: string;
}

export const BookmarkContext = createContext<BookmarkContextType>({
  bookmarks: [],
});

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(
    JSON.parse(localStorage.getItem("bookmarks") || "[]")
  );

  const [errorForm, setErrorForm] = useState<string>("");
  const saveBookmarks = (newBookmark: Bookmark) => {
    setErrorForm("");
    // if no valid bookmark from Vimeo or Flickr, and if already exist, dont save !
    if (newBookmark.error) {
      setErrorForm("Not a valid link for bookmark");
      return;
    }
    if (bookmarks.findIndex((elem) => newBookmark.url === elem.url) !== -1) {
      setErrorForm("Bookmark already exist");
      return;
    }
    if (
      newBookmark.provider_name !== "Flickr" &&
      newBookmark.provider_name !== "Vimeo"
    ) {
      setErrorForm("Bookmark should only come from Vimeo or Flickr");
      return;
    }
    setBookmarks([...bookmarks, newBookmark]);
  };

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const deleteAllBookmarks = () => {
    setBookmarks([]);
  };

  const deleteBookmark = (bookmark: Bookmark) => {
    setBookmarks((bookmarks) =>
      bookmarks.filter((elem) => elem.url !== bookmark.url)
    );
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        saveBookmarks,
        deleteBookmark,
        deleteAllBookmarks,
        errorForm,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};
