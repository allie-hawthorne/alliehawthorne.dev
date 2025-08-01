import playing from '../../assets/playing.webm';
import spotify from '../../assets/spotify.svg'
import { ScaleLoader } from 'react-spinners';
import { timeAgo } from './timeAgo';
import { useGetTrack } from './useGetTrack';
import { NewTabLink } from '../pages';

const spotifySearchUrl = 'https://open.spotify.com/search';

// TODO: not 100% satisfied with this - see commit df0101bce94283ef2f6acc70111e1c4a1ecab5e7 for redesign WIP
export const NowPlaying = () => {
  const {loading, track} = useGetTrack()

  if (loading) return <div className='flex justify-center'>
    <ScaleLoader loading color='grey' />
  </div>

  if (!track) return null;

  const searchTerm = `${track.name} ${track.artist}`;

  return <div className='flex font-sans items-center justify-between gap-1 max-w-full min-w-full md:px-20' >
    <div className='flex gap-2'>
      <img src={spotify} alt='Spotify logo' width='50px' />
      <NewTabLink className='max-w-[35vw]' href={`${spotifySearchUrl}/${searchTerm}`}>
        <p>{track.name}</p>
        <p className='text-white'>{track.artist}</p>
      </NewTabLink>
    </div>
    <div className='flex items-center justify-center'>
      {track.nowPlaying
        ? <video disableRemotePlayback autoPlay loop muted width='50px'>
          <source src={playing} type='video/mp4' />
        </video>
        : <p className='text-white ml-3 mr-2 opacity-50'>{timeAgo(track.date)}</p>
      }
      <img src={track.image} alt='Album cover' height='90px' width='90px' className='rounded-2xl' />
    </div>
  </div>
};
