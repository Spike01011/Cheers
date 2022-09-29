import React, {useEffect, useState} from "react";
import Api from "../Utils/Api";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {Col, Row} from "react-bootstrap";
import {getTableRowUtilityClass} from "@mui/material";
import ReportWebVitals from "../reportWebVitals";


const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const get = async () => {
            try {
                const response = await Api.get("/");
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
                    <Col xs lg='3' style={{display: "inline-block; max-width: 350px; height: 650px;", marginTop: "20px"}}>
                        <Card>
                            {/*<Card className={"card-body"}>*/}
                            <CardContent className="card-body">
                                {/*<Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>*/}
                                {/*    {idea.Author}*/}
                                {/*</Typography>*/}
                                <Typography variant="h5" component="div" className={"card-title text-center"}>
                                    {idea.Name}
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
                            {/*<CardActions>*/}
                            {/*    <Button size="small">Learn More</Button>*/}
                            {/*</CardActions>*/}
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
