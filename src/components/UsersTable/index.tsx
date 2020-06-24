import React, { FC } from 'react';
import { connect } from 'react-redux';
import GridTable from 'shared/components/GridTable';
import { Dispatch } from 'redux';
import { userSelected } from './ducks/actions';
import { IUserState } from 'models';

const headersData = ['TITLE', 'ID', 'DATE', 'EDIT', 'STATUS', 'DATA'];
const columnSize = 'grid-6';
const bodyData: IUserState[] = [
    {
        title: 'the day you',
        id: '21',
        date: '20.20.1966',
        data: 'xyzReactxyz',
        edit: 'edit',
        status: 'delete',
    },
    {
        title: 'the day you',
        id: '22',
        date: '20.20.1966',
        data: 'xyzReactxyz',
        edit: 'edit',
        status: 'approved',
    },
    {
        title: 'the day you',
        id: '23',
        date: '20.20.1966',
        data: 'xyzReactxyz',
        edit: 'edit',
        status: 'progress',
    },
    {
        title: 'the day you',
        id: '24',
        date: '20.20.1966',
        data: 'xyzReactxyz',
        edit: 'edit',
        status: 'done',
    },
    {
        title: 'the day you',
        id: '25',
        date: '20.20.1966',
        data: 'xyzReactxyz',
        edit: 'edit',
        status: 'done',
    },
    {
        title: 'the day you',
        id: '26',
        date: '20.20.1966',
        data: 'xyzReactxyz',
        edit: 'edit',
        status: 'approved',
    },
    {
        title: 'the day you',
        id: '27',
        date: '20.20.1966',
        data: 'xyzReactxyz',
        edit: 'edit',
        status: 'delete',
    },
    {
        title: 'the day you',
        id: '28',
        date: '20.20.1966',
        data: 'xyzReactxyz',
        edit: 'edit',
        status: 'delete',
    },
    {
        title: 'the day you',
        id: '29',
        date: '20.20.1966',
        data: 'xyzReactxyz',
        edit: 'edit',
        status: 'progress',
    },
    {
        title: 'the day you',
        id: '30',
        date: '20.20.1966',
        data: 'xyzReactxyz',
        edit: 'edit',
        status: 'progress',
    },
];

interface IProps {
    userSelected: (currentUser: IUserState) => void;
}

const UsersTable: FC<IProps> = ({ userSelected }) => {
    const handleRowClick = (id: string) => {
        const currentUserArray = bodyData.filter((item: IUserState) => {
            return item.id === id;
        });
        const currentUser = currentUserArray[0];
        userSelected(currentUser);
    };
    const headers = (
        <div className="row">
            <div className="cell">{headersData[0]}</div>
            <div className="cell">{headersData[1]}</div>
            <div className="cell">{headersData[2]}</div>
            <div className="cell">{headersData[3]}</div>
            <div className="cell">{headersData[4]}</div>
            <div className="cell">{headersData[5]}</div>
        </div>
    );
    const body = bodyData.map(item => {
        const { title, id, date, edit, data, status } = item;
        //prettier-ignore
        return ( <div className="row" key={id} onClick={() => handleRowClick(id)}>
    <div className="cell" data-title={headersData[0]}>{title}</div>
    <div className="cell" data-title={headersData[1]}>{id}</div>
    <div className="cell" data-title={headersData[2]}>{edit}</div>
    <div className="cell" data-title={headersData[3]}>{data}</div>
    <div className="cell" data-title={headersData[4]}>
        <button className={status}>{status}</button></div>
    <div className="cell" data-title={headersData[5]}>{date}</div>
  </div>);
    });
    return <GridTable {...{ body, headers, columnSize }} />;
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    userSelected: (user: IUserState) => dispatch(userSelected(user)),
});

export default connect(null, mapDispatchToProps)(UsersTable);
