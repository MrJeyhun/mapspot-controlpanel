import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from 'shared/components/Loader';
import { PATHS } from './paths';

//center components
const StatisticsPage = React.lazy(() => import('components/Statistics'));
const UsersTable = React.lazy(() => import('components/UsersTable'));
const NotFound = React.lazy(() => import('shared/components/NotFound'));
const HereMaps = React.lazy(() => import('components/HereMaps'));

//right-side components
const OtherPanel = React.lazy(() => import('components/RightSide/OtherPanel'));
const TablePanel = React.lazy(() => import('components/RightSide/TablePanel'));
const MapPanel = React.lazy(() => import('components/RightSide/MapPanel'));

export const CenterRoutes: JSX.Element = (
    <Suspense fallback={<Loader />}>
        <Routes>
            <Navigate to={PATHS.USERTABLE} />
            <Route path={PATHS.STATISTICS} element={<StatisticsPage />} />
            <Route path={PATHS.USERTABLE} element={<UsersTable />} />
            <Route path={PATHS.MAPS} element={<HereMaps />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    </Suspense>
);

export const RightRoutes: JSX.Element = (
    <Suspense fallback={<Loader />}>
        <Routes>
            <Route path={PATHS.USERTABLE} element={<TablePanel />} />
            <Route path={PATHS.MAPS} element={<MapPanel />} />
            <Route path="/*" element={<OtherPanel />} />
        </Routes>
    </Suspense>
);
