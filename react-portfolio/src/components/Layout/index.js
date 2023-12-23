import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () =>{
    return (
        <div className="App">
            <Sidebar/>
            <div className='page'>
                <span className='tags top-tags'>&lt;Go Coogs!&gt;</span>

                <Outlet />

                <span className='tags bottom-tags'>
                &lt;Houston, we got a problem!&gt;
                <br />
                <span className='bottom-tag-html'>&lt;Dare, Unite, Explore&gt;</span>
                </span>
            </div>
        </div>
    )
}

export default Layout