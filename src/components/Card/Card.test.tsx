import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Card from "../Card";
import { BookmarkContext } from "../../utils/context";
import Bookmark from "../../core/models/Bookmark";

describe("Card component", () => {
  const mockDeleteBookmark = vi.fn();

  const sampleBookmark: Bookmark = {
    author_name: "Author Test",
    author_url: "https://example.com",
    height: 200,
    html: "<p>Sample HTML</p>",
    provider_name: "Vimeo",
    provider_url: "https://vimeo.com/",
    thumbnail_height: 100,
    thumbnail_url: "https://example.com/thumbnail.jpg",
    thumbnail_width: 100,
    title: "Sample Title",
    type: "video",
    upload_date: "2025-01-01",
    url: "https://example.com",
    version: "1.0",
    video_id: 1234,
    width: 400,
    published_date_app: new Date(),
  };

  it("calls deleteBookmark when delete button is clicked", () => {
    render(
      <BookmarkContext.Provider
        value={{
          bookmarks: [sampleBookmark],
          deleteBookmark: mockDeleteBookmark,
        }}
      >
        <Card card={sampleBookmark} />
      </BookmarkContext.Provider>
    );

    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    expect(mockDeleteBookmark).toHaveBeenCalledWith(sampleBookmark);
  });

  it("renders HTML content safely for cards", () => {
    render(
      <BookmarkContext.Provider
        value={{
          bookmarks: [sampleBookmark],
          deleteBookmark: mockDeleteBookmark,
        }}
      >
        <Card card={sampleBookmark} />
      </BookmarkContext.Provider>
    );

    expect(screen.getByText("Sample HTML")).toBeInTheDocument();
  });
});
