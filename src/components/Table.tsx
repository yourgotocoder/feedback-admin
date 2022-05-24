import React from "react";
import { Column, useTable } from "react-table";
import { ExitFeedbackData } from "../App";

type Props = {
    feedbackData: ExitFeedbackData[];
};

const Table = (props: Props) => {
    console.log(props.feedbackData);

    const defaultColumn = React.useMemo(
        () => ({
            minWidth: 30,
            width: 150,
            maxWidth: 800,
        }),
        []
    );

    const data = React.useMemo(
        () =>
            props.feedbackData.map((data) => ({
                PO_1: data.po1.rating,
                PO_2: data.po2.rating,
                PO_3: data.po3.rating,
                PO_4: data.po4.rating,
                PO_5: data.po5.rating,
                PO_6: data.po6.rating,
                PO_7: data.po7.rating,
                PO_8: data.po8.rating,
                PO_9: data.po9.rating,
                PO_10: data.po10.rating,
                PO_11: data.po11.rating,
                PO_12: data.po12.rating,
                PSO_1: data.pso1.rating,
                PSO_2: data.pso2.rating,
                Weakness_1: data.weakness.weakness_one,
                Weakness_2: data.weakness.weakness_two,
                Weakness_3: data.weakness.weakness_three,
                Strength_1: data.strengths.strength_one,
                Strength_2: data.strengths.strength_two,
                Strength_3: data.strengths.strength_three,
                Satisfied:
                    data.satifaction.selection === "Satisfied" ? "Yes" : "No",
                Satisfied_Reason: data.satifaction.detail,
                Future_Plans: data.futurePlans.selection,
                Future_Plans_Detail: data.futurePlans.detail,
                Comment: data.detailed_comments,
            })),
        []
    );

    const columns = React.useMemo<Column<any>[]>(
        () => [
            {
                Header: "PO_1",
                accessor: "PO_1", // accessor is the "key" in the data
            },
            {
                Header: "PO_2",
                accessor: "PO_2", // accessor is the "key" in the data
            },
            {
                Header: "PO_3",
                accessor: "PO_3", // accessor is the "key" in the data
            },
            {
                Header: "PO_4",
                accessor: "PO_4", // accessor is the "key" in the data
            },
            {
                Header: "PO_5",
                accessor: "PO_5", // accessor is the "key" in the data
            },
            {
                Header: "PO_6",
                accessor: "PO_6", // accessor is the "key" in the data
            },
            {
                Header: "PO_7",
                accessor: "PO_7", // accessor is the "key" in the data
            },
            {
                Header: "PO_8",
                accessor: "PO_8", // accessor is the "key" in the data
            },
            {
                Header: "PO_9",
                accessor: "PO_9", // accessor is the "key" in the data
            },
            {
                Header: "PO_10",
                accessor: "PO_10", // accessor is the "key" in the data
            },
            {
                Header: "PO_11",
                accessor: "PO_11", // accessor is the "key" in the data
            },
            {
                Header: "PO_12",
                accessor: "PO_12", // accessor is the "key" in the data
            },
            {
                Header: "PSO_1",
                accessor: "PSO_1", // accessor is the "key" in the data
            },
            {
                Header: "PSO_2",
                accessor: "PSO_2", // accessor is the "key" in the data
            },
            {
                Header: "Strength 1",
                accessor: "Strength_1",
            },
            {
                Header: "Strength 2",
                accessor: "Strength_2",
            },
            {
                Header: "Strength 3",
                accessor: "Strength_3",
            },
            {
                Header: "Weakness 1",
                accessor: "Weakness_1",
            },
            {
                Header: "Weakness 2",
                accessor: "Weakness_2",
            },
            {
                Header: "Weakness 3",
                accessor: "Weakness_3",
            },
            {
                Header: "Satisfied",
                accessor: "Satisfied",
            },
            {
                Header: "Future Plans",
                accessor: "Future_Plans",
            },
            {
                Header: "Future Plans Detail",
                accessor: "Future_Plans_Detail",
            },
            {
                Header: "Comment",
                accessor: "Comment",
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data, defaultColumn });

    return (
        <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th
                                {...column.getHeaderProps()}
                                style={{
                                    borderBottom: "solid 3px red",
                                    background: "aliceblue",
                                    color: "black",
                                    fontWeight: "bold",
                                }}
                            >
                                {column.render("Header")}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell: any) => {
                                return (
                                    <td
                                        {...cell.getCellProps()}
                                        style={{
                                            padding: "10px",
                                            border: "solid 1px gray",
                                            background: "papayawhip",
                                            width: "auto",
                                            maxHeight: "40px",
                                        }}
                                    >
                                        {cell.render("Cell")}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
