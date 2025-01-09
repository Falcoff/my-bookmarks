import React, { useContext } from "react";
import classes from "./Card.module.css";
import { BookmarkContext } from "../../utils/context";
import { compareDate, getDuration, transformDateText } from "../../utils/date";
import Bookmark from "../../core/models/Bookmark";

interface CardProps {
  card: Bookmark;
}
const Card: React.FC<CardProps> = ({ card }) => {
  const { deleteBookmark } = useContext(BookmarkContext);

  return (
    <div key={card.url} className={classes.card}>
      {card.provider_name === "Vimeo" ? (
        <div className={classes.card_content}>
          <div className={classes.card_top_content}>
            <div className={classes.card_title}>{card.title}</div>
            <div className={classes.card_date_app}>
              {compareDate(card.published_date_app)}
            </div>
            <button
              className={classes.delete_button}
              onClick={() => deleteBookmark && deleteBookmark(card)}
            >
              Delete
            </button>
          </div>
          <div className={classes.card_bottom_content}>
            <div
              className={classes.card_media}
              dangerouslySetInnerHTML={{ __html: card.html }}
            />
            <div className={classes.card_details}>
              <div>
                url: <a href={card.url}>{card.url}</a>
              </div>
              <div>authror: {card.author_name}</div>
              <div>Published date: {transformDateText(card.upload_date)}</div>
              <div>Duration: {getDuration(card.duration)}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.card_content}>
          <div className={classes.card_top_content}>
            <div className={classes.card_title}>{card.title}</div>
            <div className={classes.card_date_app}>
              {compareDate(card.published_date_app)}
            </div>
            <button
              className={classes.delete_button}
              onClick={() => deleteBookmark && deleteBookmark(card)}
            >
              Delete
            </button>
          </div>
          <div className={classes.card_bottom_content}>
            {/* <div
              className={classes.card_media}
              dangerouslySetInnerHTML={{ __html: card.html }}
            /> */}
            <div className={classes.card_img_container}>
              <img
                className={classes.card_img}
                alt="flickr img"
                src={card.thumbnail_url}
              ></img>
            </div>
            <div className={classes.card_details}>
              <div>
                url: <a href={card.url}>{card.url}</a>
              </div>
              <div>authror: {card.author_name}</div>
              <div>Published date: {transformDateText(card.upload_date)}</div>
              <div>
                Dimension: {card.width} x {card.height}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
