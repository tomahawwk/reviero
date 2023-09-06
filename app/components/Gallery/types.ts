export interface IGallery {
  items: string[];
  apartmentView?: boolean;
}

export interface IGalleryApartment {
  items: IGalleryItemFormat[];
}

export type IGalleryItem = {
  url?: string;
  original?: string;
  fullscreen?: string;
  thumbnail?: string;
};

export type IGalleryItemFormat = {
    original: string;
    fullscreen: string;
    thumbnail: string;
}
