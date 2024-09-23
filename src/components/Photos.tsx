import { FunctionComponent, useEffect, useState } from "react";

interface PhotosProps {}

const Photos: FunctionComponent<PhotosProps> = () => {
  let [photos, setPhotos] = useState<any>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
      .then((res: Response) => res.json())
      .then((photos: any) => {
        setPhotos(photos);
        console.log(photos);
      });
  }, []);
  return (
    <>
      <h2>Photos</h2>
      {photos.length ? (
        <table className="table">
          <thead>
            <tr>
              <th>Album id</th>
              <th>Id</th>
              <th>Title</th>
              <th>Thumbnail</th>
            </tr>
          </thead>
          <tbody>
            {photos.map((photo: any) => (
              <tr key={photo.id}>
                <td>{photo.albumId}</td>
                <td>{photo.id}</td>
                <td>{photo.title}</td>
                <td>
                  <img src={photo.thumbnailUrl} alt={photo.title} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No photos</p>
      )}
    </>
  );
};

export default Photos;
