
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectors, actions } from "../../store/anime";
import { Table, Typography, Image, Input } from "antd";

export const AnimeList = () => {
       const animes = useSelector(selectors.getAnime);
       const params = useSelector(selectors.getParams);

       const dispatch = useDispatch();

       useEffect(() => {
              dispatch(actions.fetchAnime() as any)
       }, []);

       const columns = [
              {
                     title: "Name",
                     dataIndex: "title",
                     key: "title",
                     render: (text: string) => <Typography.Text copyable>{text}</Typography.Text>
              },
              {
                     title: "Rating",
                     dataIndex: "rating",
                     key: "rating"
              },
              {
                     title: "Episodes",
                     dataIndex: "episodes",
                     key: "episodes",
                     sorter: (a: any, b: any) => a.episodes - b.episodes,
              },
              {
                     title: "Duration",
                     dataIndex: "duration",
                     key: "duration"
              },
              {
                     title: "Image",
                     dataIndex: ["images", "jpg", "image_url"],
                     key: "image",
                     render: (text:any, record:any) => <Image src={record.images.jpg.image_url} alt="anime" width={150} />
              },
       ]
       
       const dataSourse = animes.map((anime) => ({ ...anime, key: anime.mal_id }))
       return (
              <div>
                     {/* <Input.Search placeholder="Search here..." /> */}
                     {/* <Search placeholder="input search loading with enterButton" loading enterButton /> */}
                     <Table 
                     dataSource={dataSourse}
                     columns={columns}
                     pagination={{
                            defaultPageSize: params.limit,
                            showSizeChanger: true,
                            pageSizeOptions: [3, 5, 10, 15, 20]

                     }}
                     />
              </div>
       );
};
