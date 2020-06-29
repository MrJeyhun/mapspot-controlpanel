import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import GridTable from 'shared/components/GridTable';
import { userSelected, usersDataRequested } from './ducks/actions';
import { IRootState, IUsers } from 'models';
// import { IUserState, ISelectUser, IUsers } from 'models';

interface IProps {
    userSelected(id: string): string;
    usersDataRequested(): void;
    users: IUsers;
}

const UsersTable: FC<any> = ({ users, userSelected, usersDataRequested }) => {
    useEffect(() => {
        usersDataRequested();
    }, []);

    console.log(users);

    const handleRowClick = (id: string) => {
        userSelected(id);
    };

    const headersData = ['NAME', 'DATE', 'EMAIL', 'PHONE', 'STATUS', 'TOTAL TASKS'];
    const columnSize = `grid-${headersData.length}`;

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
    const body = users.allIds.map((id: string) => {
        const { name, date, email, phone, status, totaltasks } = users.byId[id];
        console.log(totaltasks);
        //prettier-ignore
        return ( <div className="row" key={id} onClick={() => handleRowClick(id)}>
    <div className="cell" data-title={headersData[0]}>{name}</div>
    <div className="cell" data-title={headersData[1]}>{date}</div>
    <div className="cell" data-title={headersData[2]}>{email}</div>
    <div className="cell" data-title={headersData[3]}>{phone}</div>
    <div className="cell" data-title={headersData[4]}>
        <button className={status}>{status}</button></div>
    <div className="cell" data-title={headersData[5]}>{totaltasks}</div>
  </div>);
    });
    return <GridTable {...{ body, headers, columnSize }} />;
};
const mapStateToProps = (state: IRootState) => ({ users: state.users });
export default connect(mapStateToProps, { userSelected, usersDataRequested })(UsersTable);
