import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import GridTable from 'shared/components/GridTable';
import { usersDataRequested } from 'components/UsersTable/ducks/actions';
import { IRootState, IUsers } from 'models';
import './index.scss';

interface IProps {
    userSelected(id: string): string;
    usersDataRequested(): void;
    users: IUsers;
}

const MapPanel: FC<any> = ({ users, usersDataRequested }) => {
    useEffect(() => {
        usersDataRequested();
    }, []);

    const headersData = ['NAME', 'STATUS'];
    const columnSize = `grid-${headersData.length}`;

    const headers = (
        <div className="row">
            <div className="cell">{headersData[0]}</div>
            <div className="cell">{headersData[1]}</div>
        </div>
    );

    const body = users.allIds.map((id: string) => {
        const { name, status } = users.byId[id];
        return (
            <div className="row" key={id}>
                <div className="cell" data-title={headersData[0]}>
                    {name}
                </div>
                <div className="cell" data-title={headersData[1]}>
                    <button className={status}>{status}</button>
                </div>
            </div>
        );
    });

    return <GridTable {...{ body, headers, columnSize }} />;
};

const mapStateToProps = (state: IRootState) => ({ users: state.users });
export default connect(mapStateToProps, { usersDataRequested })(MapPanel);
