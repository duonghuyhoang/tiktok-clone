import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';

const publicRoutes = [
    { part: '/', component: Home },
    { part: '/following', component: Following },
    { part: '/upload', component: Upload, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
