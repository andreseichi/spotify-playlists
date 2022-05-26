import { NextApiRequest, NextApiResponse } from 'next';

import getToken from '../token';
import { spotify } from '../../../services/spotify';

export default async function user(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  const user_id = slug[0];

  const token = await getToken();
  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  if (slug.includes('playlists')) {
    const { data } = await spotify.get(`users/${user_id}/playlists`, config);
    return res.status(200).json(data);
  }

  const { data } = await spotify.get(`users/${user_id}`, config);
  return res.status(200).json(data);
}
