
import { AnimeList } from "./TableAnimeList"
import { Row, Col } from "antd"

export const App = () => {
    return (
        <div>
            <Row>
                <Col xs={24} md={{span:12, offset:6}}>
                    <AnimeList />
                </Col>
            </Row>
        </div>
    )
}
