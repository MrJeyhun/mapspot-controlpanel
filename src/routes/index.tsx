import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from 'shared/components/Loader';
import { PATHS } from './paths';

//center components
const UsersTable = React.lazy(() => import('components/UsersTable'));
const NotFound = React.lazy(() => import('shared/components/NotFound'));

//right-side components
const OtherPanel = React.lazy(() => import('components/RightSide/OtherPanel'));
const TablePanel = React.lazy(() => import('components/RightSide/TablePanel'));

export const CenterRoutes: JSX.Element = (
    <Suspense fallback={<Loader />}>
        <Routes>
            <Navigate to={PATHS.USERTABLE} />
            <Route path={PATHS.USERTABLE} element={<UsersTable />} />
            <Route path={PATHS.FILTER} element={<>This is filter</>} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    </Suspense>
);

export const RightRoutes: JSX.Element = (
    <Suspense fallback={<Loader />}>
        <Routes>
            <Route path={PATHS.USERTABLE} element={<TablePanel />} />
            <Route path={PATHS.FILTER} />
            <Route path="/*" element={<OtherPanel />} />
        </Routes>
    </Suspense>
);
