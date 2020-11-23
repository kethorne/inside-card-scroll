export interface CharacterModel {
  attributionHTML: string;
  attributionText: string;
  code: number;
  copyright: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: [
      {
        id: number;
        name: string;
        description: string;
        thumbnail: {
          path: string;
          extension: string;
        };
      }
    ];
  };
  etag: string;
  status: string;
}
