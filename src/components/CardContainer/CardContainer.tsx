import React, { useContext } from "react";
import classes from "./CardContainer.module.css";
import { BookmarkContext } from "../../utils/context";
import Card from "../Card";

const CardContainer: React.FC = () => {
  const { bookmarks, deleteAllBookmarks } = useContext(BookmarkContext);

  return (
    <div className={classes.container}>
      <div className={classes.container_title}>
        <h2>{`Current BookMarks  (${bookmarks.length})`}</h2>
        <button
          className={classes.delete_all_button}
          onClick={deleteAllBookmarks}
          disabled={!bookmarks || bookmarks?.length === 0}
        >
          Delete all
        </button>
      </div>
      <div className={classes.container_content}>
        {bookmarks.map((card) => (
          <Card key={card.url} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
