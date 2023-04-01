import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';
import Live from '../pages/Live';

const publicRoutes = [
    { part: '/', component: Home },
    { part: '/following', component: Following },
    { part: '/upload', component: Upload, layout: null },
    { part: '/live', component: Live },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
