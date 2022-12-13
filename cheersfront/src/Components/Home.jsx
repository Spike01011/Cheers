import React, {useEffect, useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from "axios";
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const get = async () => {
            try {
                const response = await axios.get("https://localhost:7021/idea/index", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                const responseJson = await response.data;
                await setData(responseJson);
            } catch (e) {
                console.error(e);
            }
        };
        get();
    }, []);


    return data != null ? (
        <React.Fragment className={"container"} style={{height: "650px"}}>
            <Row className="no-gutters" style={{marginInline: "10px", marginTop: "10px"}}>
                {data.map((idea) => (
                    <Col xs lg='3'
                         style={{display: "inline-block; max-width: 350px; height: 650px;", marginTop: "20px"}}>
                        <Card>
                            <i>{(idea.Author === null) ? "Anonymous" : idea.Author.Email}</i>
                            <CardContent className="card-body">
                                <Typography variant="h5" component="div" className={"card-title text-center"}>
                                    <p key={idea.Id}>
                                        <Link
                                            style={{color: "black"}}
                                            to={`/get-details/${idea.Id}`}
                                        >
                                            {idea.Name}
                                        </Link>
                                    </p>
                                </Typography>
                                <Typography sx={{mb: 1.5}} color="text.secondary">
                                    {idea.ShortDescription}
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br/>
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Col>
                ))}
            </Row>
        </React.Fragment>

    ) : (
        <p>Loading...</p>
    );
};
export default Home;
