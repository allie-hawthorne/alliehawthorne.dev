import playing from '../assets/playing.webm';
import spotify from '../assets/spotify.svg'
import { ScaleLoader } from 'react-spinners';
import { timeAgo } from './timeAgo';
import { useGetTrack } from './useGetTrack';


export const NowPlaying = () => {
  const {loading, track} = useGetTrack()

  if (loading) return (<div className='flex justify-center'>
    <ScaleLoader loading color='grey' />
  </div>)

  return track && (
    <div className='flex font-sans items-center justify-between gap-1 max-w-full min-w-full md:px-20'>
      <div className='flex gap-2'>
        <img src={spotify} alt='Spotify logo' width='50px' />
        <div className='max-w-[35vw]'>
          <p>{track.name}</p>
          <p className='text-white'>{track.artist}</p>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        {track.nowPlaying
          ? (<video disableRemotePlayback autoPlay loop muted width='50px'>
            <source src={playing} type='video/mp4' />
          </video>)
          : <p className='text-white ml-3 mr-2 opacity-50'>{timeAgo(track.date)}</p>
        }
        <img src={track.image} alt='Album cover' height='90px' width='90px' className='rounded-2xl' />
      </div>
    </div>
  )
};
