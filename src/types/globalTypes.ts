export enum ImageTypeEnum {
  New = "new",
  Popular = "popular",
  Favorite = "favorite",
}

export interface IImage {
  id: number;
  url: string;
  date?: string;
  rating?: number;
  favorite?: boolean;
  type: ImageTypeEnum;
}
