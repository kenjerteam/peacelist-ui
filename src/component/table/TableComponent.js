import {Button, Col, FormControl, InputGroup, Row, Table} from "react-bootstrap";
import {ReactComponent as ContactIcon} from "../common/icons/phone.svg";
import {ReactComponent as WebSiteIcon} from "../common/icons/web.svg";
import {ReactComponent as PersonIcon} from "../common/icons/helper.svg";
import {ReactComponent as ArrowRightIcon} from "../common/icons/arrow.svg";
import {ReactComponent as ArrowLeftIcon} from "../common/icons/arrow_left.svg";
import {ReactComponent as SingleArrowRightIcon} from "../common/icons/single_arrow.svg";
import {ReactComponent as SingleArrowLeftIcon} from "../common/icons/single_arrow-left.svg";
import React from "react";
import {useTable} from "react-table";
import {usePagination} from "react-table";
import Container from "react-bootstrap/Container";

export const TableComponent = ({resources}) => {

    const data = React.useMemo(() =>
        resources.map((resource) => {
            return {id: resource.id, type: resource.type.type, content: resource.content, approved: resource.approved}
        }), [resources]);

    const columns = React.useMemo(
        () => [
            {
                Header: '',
                accessor: 'type',
                Cell: tableProps => (
                    mapIcon(tableProps.row.original.type)
                )
            },
            {
                Header: '',
                accessor: 'content'
            },
            {
                Header: '',
                accessor: 'approved'
            }
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: {pageIndex, pageSize},
    } = useTable(
        {
            columns,
            data,
            initialState: {pageIndex: 0},
        },
        usePagination
    )

    return (
        <Container>
            <Row>
                <Col>
                    <Table {...getTableProps} className="table-borderless" size="sm" responsive>
                        <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                        </thead>
                        <tbody {...getTableBodyProps}>
                        {rows.map((row) => {
                            prepareRow(row);
                            return <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col>
                    <span>Page{' '}<strong>{pageIndex + 1} of {pageOptions.length}</strong>{' '}</span>
                </Col>
                <Col>
                    <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage} size={"sm"}>
                        <ArrowLeftIcon/>
                    </Button>
                    {' '}
                    <Button onClick={() => previousPage()} disabled={!canPreviousPage} size={"sm"}>
                        <SingleArrowLeftIcon/>
                    </Button>
                    {' '}
                    <Button onClick={() => nextPage()} disabled={!canNextPage} size={"sm"}>
                        <SingleArrowRightIcon/>
                    </Button>
                    {' '}
                    <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} size={"sm"}>
                        <ArrowRightIcon/>
                    </Button>
                </Col>
                <Col>
                    <Container>
                        <Row>
                            <Col>{' '}Go to page: {' '}</Col>
                            <Col><FormControl
                                type="number"
                                defaultValue={pageIndex + 1}
                                onChange={e => {
                                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                                    gotoPage(page)
                                }}
                                style={{width: '100px'}}/>
                            </Col>
                                <Col><select value={pageSize} onChange={e => {setPageSize(Number(e.target.value))}}>
                                    {[10, 20, 30, 40, 50].map(pageSize => (
                                        <option key={pageSize} value={pageSize}>
                                            {pageSize}
                                        </option>
                                    ))}
                                </select>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

function mapIcon(type) {
    switch (type) {
        case 'WEB_SITE':
            return <WebSiteIcon/>;
        case 'PERSON':
            return <PersonIcon/>;
        default :
            return <ContactIcon/>;
    }
}