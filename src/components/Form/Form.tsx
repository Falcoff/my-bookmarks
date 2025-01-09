import React, { useContext, useState } from "react";
import classes from "./Form.module.css";
import { getNoEmbed } from "../../core/api/ApiService";
import { BookmarkContext } from "../../utils/context";
import Bookmark from "../../core/models/Bookmark";

const Form: React.FC = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { saveBookmarks, errorForm } = useContext(BookmarkContext);

  const sendUrl = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    getNoEmbed(url)
      .then((res) => res.json())
      .then((data: Bookmark) => {
        //if not valid bookmark, dont save
        if (data && saveBookmarks) {
          saveBookmarks({...data, published_date_app: new Date()});
          setIsLoading(false);
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <form className={classes.form} onSubmit={(e) => sendUrl(e)}>
      <div className={classes.inputContainer}>

      <input
      placeholder="Enter a Flickr or Vimeo url"
        value={url}
        onChange={(e) => setUrl(e.currentTarget.value)}
        name="searchUrl"
        type="url"
        id="searchUrl"
        ></input>
        {<div className={classes.formError}>{errorForm}</div>}
        </div>

      <button disabled={isLoading || !url}>
        {isLoading ? "Loading ..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;
