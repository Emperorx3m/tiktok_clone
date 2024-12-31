import { useEffect, useState } from 'react'
import './App.css'
import Video from './Video'
import Ax from './Axios';
import { io } from 'socket.io-client';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

function App() {
// const [count, setCount] = useState(0);
const [ft_vids, setVids] = useState([]);
const chkvids = 0;


  useEffect(() => {
    var fetchVids = async () => {
      const resp = await Ax.get("/v1/posts");
      setVids(resp.data);
      // setVids((v) => resp.data);
    }
    fetchVids();

  }, []);

 
  return (
    <div className="app">
<AppHeader />
      <div className='app_video__container'>
      {ft_vids.map(({vidurl,channel,song,desc,likes,shares,comments,_id}) => (
         <Video
         key={_id}
          vidurl={vidurl}
          channel={channel}
          song={song}
          desc={desc}
          likes={likes}
          shares={shares}
          comments={comments}
        />
      )
      )}
       
      </div>
      <AppFooter />
    </div>
  );
}

export default App
