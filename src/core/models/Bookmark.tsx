export default interface Bookmark {
  error?: string;
  
  account_type?: string;
  author_name: string;
  author_url: string;
  description?: string;
  duration?: number;
  height: number;
  html: string;
  is_plus?: string;
  provider_name: "Vimeo" | "Flickr";
  provider_url: "https://vimeo.com/" | "https://www.flickr.com/";
  thumbnail_height: number;
  thumbnail_url: string;
  thumbnail_url_with_play_button?: string;
  thumbnail_width: number;
  title: string;
  type: string;
  upload_date?: string;
  uri?: string;
  url: string;
  version: string;
  video_id?: number;
  width: number;


  cache_age?: number;
  flickr_type?: string;
  license?: string;
  license_id?: string;
  license_url?: string;
  media_url?: string;
  web_page?: string;
  web_page_short_url?: string;

  published_date_app: Date;
}
