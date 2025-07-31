import { useCallback, useEffect, useState } from 'react';

const user = 'HoweIsAllie';
// I'm aware storing keys in client code is bad, even if they're not secrets. Let me have this one :(
  const clientKey = '3a81ff2b9fcc41ac5cd122592bc876c6'
const LAST_FM_URL = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${clientKey}&format=json`

type Track = {
  name: string
  artist: string
  album: string
  image: string
  url: string
  nowPlaying: boolean
  date?: Date
}

const mapRawTrackToTrack = (rawTrack: any): Track => {
  const timestamp = Number(rawTrack.date?.uts * 1000)
  return {
    name: rawTrack.name,
    artist: rawTrack.artist['#text'],
    album: rawTrack.album['#text'],
    image: rawTrack.image[3]['#text'],
    url: rawTrack.url,
    date: timestamp ? new Date(timestamp) : undefined,
    nowPlaying: !!rawTrack['@attr']?.nowplaying,
  }
}


export const useGetTrack = () => {
  const [loading, setLoading] = useState(false);
  const [track, setTrack] = useState<Track>();

  const getTrack = useCallback(async () => {
    setLoading(true);
    const response = await fetch(LAST_FM_URL);
    const data = JSON.parse(await response.text());
    setLoading(false);

    const rawMostRecentTrack = data.recenttracks.track[0];

    const newTrack = mapRawTrackToTrack(rawMostRecentTrack)
    setTrack(newTrack);
  }, [])

  useEffect(() => {getTrack()}, [])

  return {track, loading}
}
