export interface userPlaylists {
  href: string;
  items: Playlist[];
  limit: number;
  next: string | null;
  previous: string | null;
  total: number;
}

interface Playlist {
  collaborative: boolean;
  description: string;
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: {
    url: string;
  }[];
  name: string;
  owner: {
    display_name: string;
    external_urls: { spotify: string };
    id: string;
    type: string;
  };
  public: boolean;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
}
