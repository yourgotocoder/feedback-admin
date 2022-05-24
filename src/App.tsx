import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import "./App.css";
import Table from "./components/Table";

export type ExitFeedbackData = {
    po1: { id: number; title: string; question: string; rating: string };
    po2: { id: number; title: string; question: string; rating: string };
    po3: { id: number; title: string; question: string; rating: string };
    po4: { id: number; title: string; question: string; rating: string };
    po5: { id: number; title: string; question: string; rating: string };
    po6: { id: number; title: string; question: string; rating: string };
    po7: { id: number; title: string; question: string; rating: string };
    po8: { id: number; title: string; question: string; rating: string };
    po9: { id: number; title: string; question: string; rating: string };
    po10: { id: number; title: string; question: string; rating: string };
    po11: { id: number; title: string; question: string; rating: string };
    po12: { id: number; title: string; question: string; rating: string };
    pso1: { id: number; question: string; rating: string };
    pso2: { id: number; question: string; rating: string };
    futurePlans: {
        selection: string;
        detail: string;
    };
    strengths: {
        strength_one: string;
        strength_two: string;
        strength_three: string;
    };
    weakness: {
        weakness_one: string;
        weakness_two: string;
        weakness_three: string;
    };
    satifaction: {
        selection: string;
        detail: string;
    };
    detailed_comments: string;
};

type ExitFeedback = {
    count: number;
    exitFeedbackData: ExitFeedbackData[];
};

function App() {
    const [exitFeedbackCount, setExitFeedbackCount] = useState<number>(0);
    const [exitFeedbackData, setExitFeedbackData] =
        useState<ExitFeedbackData[]>();
    const [exitFeedbackButtonHover, setExitFeedbackButtonHover] =
        useState(false);

    useEffect(() => {
        fetch("http://localhost:3010/exit-feedback")
            .then((res) => res.json())
            .then((data: ExitFeedback) => {
                setExitFeedbackCount(data.count);
                setExitFeedbackData(data.exitFeedbackData);
            });
    }, []);

    const handleExitFeedbackHover = () => {
        setExitFeedbackButtonHover(true);
    };
    const handleExitFeedbackLeave = () => {
        setExitFeedbackButtonHover(false);
    };

    const handleExitFeedbackDownload = () => {
        console.log("Clicked");
    };

    return (
        <Card sx={{ minWidth: 500, maxWidth: 1080, margin: "2rem auto" }}>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    <Badge
                        badgeContent={
                            exitFeedbackButtonHover ? null : exitFeedbackCount
                        }
                        color="error"
                    >
                        <Button
                            variant="contained"
                            onMouseEnter={handleExitFeedbackHover}
                            onMouseLeave={handleExitFeedbackLeave}
                            onClick={handleExitFeedbackDownload}
                            sx={{ minWidth: 350 }}
                            color={exitFeedbackButtonHover ? "primary" : "info"}
                        >
                            {exitFeedbackButtonHover
                                ? "Download Exit Feedback Response"
                                : "Total Exit Feedback Response"}
                        </Button>
                    </Badge>
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Exit Feedback Response
                </Typography>
                <Box>
                    {exitFeedbackData && (
                        <Table feedbackData={exitFeedbackData} />
                    )}
                </Box>
            </CardContent>
        </Card>
    );
}

export default App;
