export interface Image {
  id: string;
  alt_description: string;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
    location: string;
  };
}

export interface DataImages {
  total: number;
  total_pages: number;
  results: Image[];
}
