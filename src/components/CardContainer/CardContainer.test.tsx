import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import CardContainer from "./CardContainer";
import { BookmarkContext } from "../../utils/context";
import Bookmark from "../../core/models/Bookmark";

describe("CardContainer component", () => {
  const mockDeleteAllBookmarks = vi.fn();

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

  it("render good title when 1 element", () => {
    render(
      <BookmarkContext.Provider
        value={{
          bookmarks: [sampleBookmark],
          deleteAllBookmarks: mockDeleteAllBookmarks,
        }}
      >
        <CardContainer />
      </BookmarkContext.Provider>
    );
    const title = screen.getByRole("heading", { level: 2 });
    console.log(title);
    expect(title.textContent).toBe("Current BookMarks  (1)");
    const deleteAllButton = screen.getByText("Delete all");
    fireEvent.click(deleteAllButton);
    expect(mockDeleteAllBookmarks).toHaveBeenCalled();

  });

  it("renders HTML content safely for cards", () => {
    render(
      <BookmarkContext.Provider
        value={{
          bookmarks: [sampleBookmark],
          deleteAllBookmarks: mockDeleteAllBookmarks,
        }}
      >
        <CardContainer />
      </BookmarkContext.Provider>
    );
  });
});

describe("Empty bookmark", () => {
  const mockDeleteAllBookmarks = vi.fn();

  it("render good title when empty array", () => {
    render(
      <BookmarkContext.Provider
        value={{
          bookmarks: [],
          deleteAllBookmarks: mockDeleteAllBookmarks,
        }}
      >
        <CardContainer />
      </BookmarkContext.Provider>
    );

    const deleteAllButton = screen.getByText("Delete all");
    expect(deleteAllButton).toBeDisabled();

    //   expect(mockDeleteAllBookmark).toHaveBeenCalledWith(sampleBookmark)
  });
});
