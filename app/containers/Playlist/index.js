import React from 'react';

import Header from '../../components/Header';
import TrackItem from '../../components/TrackItem';

import '!style!css!sass!./index.scss';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audios: [],
      songs: [ {'album' : {'album_type' : 'album', 'available_markets' : [ 'AD', 'AR', 'AT', 'AU', 'BE', 'BG', 'BO', 'BR', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'EC', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HU', 'IE', 'IS', 'IT', 'LI', 'LT', 'LU', 'LV', 'MC', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO', 'NZ', 'PA', 'PE', 'PH', 'PL', 'PT', 'PY', 'RO', 'SE', 'SG', 'SI', 'SK', 'SV', 'TR', 'TW', 'US', 'UY' ], 'external_urls' : {'spotify' : 'https://open.spotify.com/album/6eGYLONkDMja0MNtZWnRRB'}, 'href' : 'https://api.spotify.com/v1/albums/6eGYLONkDMja0MNtZWnRRB', 'id' : '6eGYLONkDMja0MNtZWnRRB', 'images' : [ {'height' : 640, 'url' : 'https://i.scdn.co/image/97092f295b383b1c59445ef9525051655ffa78e3', 'width' : 640 }, {'height' : 300, 'url' : 'https://i.scdn.co/image/513e2c99b1fdd15caf6d02a474e84cb8cfa6d488', 'width' : 300 }, {'height' : 64, 'url' : 'https://i.scdn.co/image/818a5c5fb605e68e48ce5adf71f9b84fc01d6f6e', 'width' : 64 } ], 'name' : 'Hello Nasty (Deluxe Version) [Remastered]', 'type' : 'album', 'uri' : 'spotify:album:6eGYLONkDMja0MNtZWnRRB'}, 'artists' : [ {'external_urls' : {'spotify' : 'https://open.spotify.com/artist/03r4iKL2g2442PT9n2UKsx'}, 'href' : 'https://api.spotify.com/v1/artists/03r4iKL2g2442PT9n2UKsx', 'id' : '03r4iKL2g2442PT9n2UKsx', 'name' : 'Beastie Boys', 'type' : 'artist', 'uri' : 'spotify:artist:03r4iKL2g2442PT9n2UKsx'} ], 'available_markets' : [ 'AD', 'AR', 'AT', 'AU', 'BE', 'BG', 'BO', 'BR', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'EC', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HU', 'IE', 'IS', 'IT', 'LI', 'LT', 'LU', 'LV', 'MC', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO', 'NZ', 'PA', 'PE', 'PH', 'PL', 'PT', 'PY', 'RO', 'SE', 'SG', 'SI', 'SK', 'SV', 'TR', 'TW', 'US', 'UY' ], 'disc_number' : 1, 'duration_ms' : 231493, 'explicit' : false, 'external_ids' : {'isrc' : 'USCA20903764'}, 'external_urls' : {'spotify' : 'https://open.spotify.com/track/5fpizYGbi5IQoEraj6FP0R'}, 'href' : 'https://api.spotify.com/v1/tracks/5fpizYGbi5IQoEraj6FP0R', 'id' : '5fpizYGbi5IQoEraj6FP0R', 'name' : 'Intergalactic - 2009 Digital Remaster', 'popularity' : 67, 'preview_url' : 'https://p.scdn.co/mp3-preview/003a22f493b49975efb28cbe0f1b59c2496992f4', 'track_number' : 7, 'type' : 'track', 'uri' : 'spotify:track:5fpizYGbi5IQoEraj6FP0R'}, {'album' : {'album_type' : 'album', 'available_markets' : [ 'AD', 'AR', 'AT', 'AU', 'BE', 'BG', 'BO', 'BR', 'CH', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'EC', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HU', 'IE', 'IS', 'IT', 'LI', 'LT', 'LU', 'LV', 'MC', 'MT', 'MY', 'NI', 'NL', 'NO', 'NZ', 'PA', 'PE', 'PH', 'PL', 'PT', 'PY', 'RO', 'SE', 'SG', 'SI', 'SK', 'SV', 'TR', 'TW', 'UY' ], 'external_urls' : {'spotify' : 'https://open.spotify.com/album/5ju5Ouzan3QwXqQt1Tihbh'}, 'href' : 'https://api.spotify.com/v1/albums/5ju5Ouzan3QwXqQt1Tihbh', 'id' : '5ju5Ouzan3QwXqQt1Tihbh', 'images' : [ {'height' : 640, 'url' : 'https://i.scdn.co/image/4e6916b16ce51c241c16f4d642360443aeb7b4df', 'width' : 640 }, {'height' : 300, 'url' : 'https://i.scdn.co/image/120cac380eef50089a9330e90cf8651fc778f9fc', 'width' : 300 }, {'height' : 64, 'url' : 'https://i.scdn.co/image/dc64749d1c464d5c32aa793509bf211d94e02bb2', 'width' : 64 } ], 'name' : '1 (Remastered)', 'type' : 'album', 'uri' : 'spotify:album:5ju5Ouzan3QwXqQt1Tihbh'}, 'artists' : [ {'external_urls' : {'spotify' : 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2'}, 'href' : 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2', 'id' : '3WrFJ7ztbogyGnTHbHJFl2', 'name' : 'The Beatles', 'type' : 'artist', 'uri' : 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2'} ], 'available_markets' : [ 'AD', 'AR', 'AT', 'AU', 'BE', 'BG', 'BO', 'BR', 'CH', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'EC', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HU', 'IE', 'IS', 'IT', 'LI', 'LT', 'LU', 'LV', 'MC', 'MT', 'MY', 'NI', 'NL', 'NO', 'NZ', 'PA', 'PE', 'PH', 'PL', 'PT', 'PY', 'RO', 'SE', 'SG', 'SI', 'SK', 'SV', 'TR', 'TW', 'UY' ], 'disc_number' : 1, 'duration_ms' : 207786, 'explicit' : false, 'external_ids' : {'isrc' : 'GBUM71505898'}, 'external_urls' : {'spotify' : 'https://open.spotify.com/track/0wFW5NQJdNDJPcZyfYSExx'}, 'href' : 'https://api.spotify.com/v1/tracks/0wFW5NQJdNDJPcZyfYSExx', 'id' : '0wFW5NQJdNDJPcZyfYSExx', 'name' : 'Hello, Goodbye - Remastered 2015', 'popularity' : 65, 'preview_url' : 'https://p.scdn.co/mp3-preview/39e68b462fcdd12d1e83b86a77d4b63cb4d6592a', 'track_number' : 19, 'type' : 'track', 'uri' : 'spotify:track:0wFW5NQJdNDJPcZyfYSExx'}, {'album' : {'album_type' : 'album', 'available_markets' : [ 'AD', 'AR', 'AT', 'AU', 'BE', 'BG', 'BO', 'BR', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'EC', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HU', 'IE', 'IS', 'IT', 'LI', 'LT', 'LU', 'LV', 'MC', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO', 'NZ', 'PA', 'PE', 'PH', 'PL', 'PT', 'PY', 'RO', 'SE', 'SG', 'SI', 'SK', 'SV', 'TR', 'TW', 'US', 'UY' ], 'external_urls' : {'spotify' : 'https://open.spotify.com/album/2F9QXXQKnqqyzI1u4UK1Ss'}, 'href' : 'https://api.spotify.com/v1/albums/2F9QXXQKnqqyzI1u4UK1Ss', 'id' : '2F9QXXQKnqqyzI1u4UK1Ss', 'images' : [ {'height' : 640, 'url' : 'https://i.scdn.co/image/988b1732adef59795a2983cb164fb63400c3cecb', 'width' : 640 }, {'height' : 300, 'url' : 'https://i.scdn.co/image/61bf43ff3c0fb202d4d56e94fdbdb97200b538c2', 'width' : 300 }, {'height' : 64, 'url' : 'https://i.scdn.co/image/52b8dd80277649e033c765b3ea0ae36dd203bee3', 'width' : 64 } ], 'name' : 'Hello Rockview', 'type' : 'album', 'uri' : 'spotify:album:2F9QXXQKnqqyzI1u4UK1Ss'}, 'artists' : [ {'external_urls' : {'spotify' : 'https://open.spotify.com/artist/20oQv3LStCKCjI9oQ0JNha'}, 'href' : 'https://api.spotify.com/v1/artists/20oQv3LStCKCjI9oQ0JNha', 'id' : '20oQv3LStCKCjI9oQ0JNha', 'name' : 'Less Than Jake', 'type' : 'artist', 'uri' : 'spotify:artist:20oQv3LStCKCjI9oQ0JNha'} ], 'available_markets' : [ 'AD', 'AR', 'AT', 'AU', 'BE', 'BG', 'BO', 'BR', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'EC', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HU', 'IE', 'IS', 'IT', 'LI', 'LT', 'LU', 'LV', 'MC', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO', 'NZ', 'PA', 'PE', 'PH', 'PL', 'PT', 'PY', 'RO', 'SE', 'SG', 'SI', 'SK', 'SV', 'TR', 'TW', 'US', 'UY' ], 'disc_number' : 1, 'duration_ms' : 211400, 'explicit' : false, 'external_ids' : {'isrc' : 'USCA29800348'}, 'external_urls' : {'spotify' : 'https://open.spotify.com/track/1hh4GY1zM7SUAyM3a2ziH5'}, 'href' : 'https://api.spotify.com/v1/tracks/1hh4GY1zM7SUAyM3a2ziH5', 'id' : '1hh4GY1zM7SUAyM3a2ziH5', 'name' : 'All My Best Friends Are Metalheads', 'popularity' : 55, 'preview_url' : 'https://p.scdn.co/mp3-preview/0dbf1a24abb41719f550a8ce76cf1a3beb40a01b', 'track_number' : 3, 'type' : 'track', 'uri' : 'spotify:track:1hh4GY1zM7SUAyM3a2ziH5'}, {'album' : {'album_type' : 'album', 'available_markets' : [ 'AD', 'AR', 'AT', 'AU', 'BE', 'BG', 'BO', 'BR', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'EC', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HU', 'IE', 'IS', 'IT', 'LI', 'LT', 'LU', 'LV', 'MC', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO', 'NZ', 'PA', 'PE', 'PH', 'PL', 'PT', 'PY', 'RO', 'SE', 'SG', 'SI', 'SK', 'SV', 'TR', 'TW', 'US', 'UY' ], 'external_urls' : {'spotify' : 'https://open.spotify.com/album/2F9QXXQKnqqyzI1u4UK1Ss'}, 'href' : 'https://api.spotify.com/v1/albums/2F9QXXQKnqqyzI1u4UK1Ss', 'id' : '2F9QXXQKnqqyzI1u4UK1Ss', 'images' : [ {'height' : 640, 'url' : 'https://i.scdn.co/image/988b1732adef59795a2983cb164fb63400c3cecb', 'width' : 640 }, {'height' : 300, 'url' : 'https://i.scdn.co/image/61bf43ff3c0fb202d4d56e94fdbdb97200b538c2', 'width' : 300 }, {'height' : 64, 'url' : 'https://i.scdn.co/image/52b8dd80277649e033c765b3ea0ae36dd203bee3', 'width' : 64 } ], 'name' : 'Hello Rockview', 'type' : 'album', 'uri' : 'spotify:album:2F9QXXQKnqqyzI1u4UK1Ss'}, 'artists' : [ {'external_urls' : {'spotify' : 'https://open.spotify.com/artist/20oQv3LStCKCjI9oQ0JNha'}, 'href' : 'https://api.spotify.com/v1/artists/20oQv3LStCKCjI9oQ0JNha', 'id' : '20oQv3LStCKCjI9oQ0JNha', 'name' : 'Less Than Jake', 'type' : 'artist', 'uri' : 'spotify:artist:20oQv3LStCKCjI9oQ0JNha'} ], 'available_markets' : [ 'AD', 'AR', 'AT', 'AU', 'BE', 'BG', 'BO', 'BR', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'EC', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HU', 'IE', 'IS', 'IT', 'LI', 'LT', 'LU', 'LV', 'MC', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO', 'NZ', 'PA', 'PE', 'PH', 'PL', 'PT', 'PY', 'RO', 'SE', 'SG', 'SI', 'SK', 'SV', 'TR', 'TW', 'US', 'UY' ], 'disc_number' : 1, 'duration_ms' : 202133, 'explicit' : false, 'external_ids' : {'isrc' : 'USCA29800342'}, 'external_urls' : {'spotify' : 'https://open.spotify.com/track/6xOZCV4EPCupXwvqajSKzq'}, 'href' : 'https://api.spotify.com/v1/tracks/6xOZCV4EPCupXwvqajSKzq', 'id' : '6xOZCV4EPCupXwvqajSKzq', 'name' : 'History Of A Boring Town', 'popularity' : 51, 'preview_url' : 'https://p.scdn.co/mp3-preview/542b4094bc632c5e522337e8eb22c0d3b9ec3954', 'track_number' : 7, 'type' : 'track', 'uri' : 'spotify:track:6xOZCV4EPCupXwvqajSKzq'}, {'album' : {'album_type' : 'album', 'available_markets' : [ 'AD', 'AR', 'AT', 'AU', 'BE', 'BG', 'BO', 'BR', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'EC', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HU', 'IE', 'IS', 'IT', 'LI', 'LT', 'LU', 'LV', 'MC', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO', 'NZ', 'PA', 'PE', 'PH', 'PL', 'PT', 'PY', 'RO', 'SE', 'SG', 'SI', 'SK', 'SV', 'TR', 'TW', 'US', 'UY' ], 'external_urls' : {'spotify' : 'https://open.spotify.com/album/3RjokVpEMWreOuyN1DBskW'}, 'href' : 'https://api.spotify.com/v1/albums/3RjokVpEMWreOuyN1DBskW', 'id' : '3RjokVpEMWreOuyN1DBskW', 'images' : [ {'height' : 640, 'url' : 'https://i.scdn.co/image/b0425e6bff8c57c40e043acf6a7d526d1da45fc2', 'width' : 640 }, {'height' : 300, 'url' : 'https://i.scdn.co/image/377ca241fa468c7d3e0509a792fb8cbd7ac806e3', 'width' : 300 }, {'height' : 64, 'url' : 'https://i.scdn.co/image/636afef487fe70859eb51443ae8b25df76c36547', 'width' : 64 } ], 'name' : 'War & Peace Vol. 2 (The Peace Disc)', 'type' : 'album', 'uri' : 'spotify:album:3RjokVpEMWreOuyN1DBskW'}, 'artists' : [ {'external_urls' : {'spotify' : 'https://open.spotify.com/artist/3Mcii5XWf6E0lrY3Uky4cA'}, 'href' : 'https://api.spotify.com/v1/artists/3Mcii5XWf6E0lrY3Uky4cA', 'id' : '3Mcii5XWf6E0lrY3Uky4cA', 'name' : 'Ice Cube', 'type' : 'artist', 'uri' : 'spotify:artist:3Mcii5XWf6E0lrY3Uky4cA'} ], 'available_markets' : [ 'AD', 'AR', 'AT', 'AU', 'BE', 'BG', 'BO', 'BR', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'EC', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HU', 'IE', 'IS', 'IT', 'LI', 'LT', 'LU', 'LV', 'MC', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO', 'NZ', 'PA', 'PE', 'PH', 'PL', 'PT', 'PY', 'RO', 'SE', 'SG', 'SI', 'SK', 'SV', 'TR', 'TW', 'US', 'UY' ], 'disc_number' : 1, 'duration_ms' : 232533, 'explicit' : true, 'external_ids' : {'isrc' : 'USBS10000044'}, 'external_urls' : {'spotify' : 'https://open.spotify.com/track/3MQLYKlNxsk7csGVEcw0R6'}, 'href' : 'https://api.spotify.com/v1/tracks/3MQLYKlNxsk7csGVEcw0R6', 'id' : '3MQLYKlNxsk7csGVEcw0R6', 'name' : 'Hello - Feat. Dr. Dre And MC Ren', 'popularity' : 52, 'preview_url' : 'https://p.scdn.co/mp3-preview/990ff6d63492e5221963cb723bb28f3266588f09', 'track_number' : 1, 'type' : 'track', 'uri' : 'spotify:track:3MQLYKlNxsk7csGVEcw0R6'} ]
    };

    this._stopAll = this._stopAll.bind(this);
    this._add = this._add.bind(this);
  }

  render() {
    return (<div>
              <Header/>
              <div id="container" className="playlist">
                <div className="wrap-container">
                  <h2>[name]’s Playlist [dob1938]</h2>
                  <ul>
                    <li className="titles">
                      <div className="list-title">Song</div>
                      <div className="list-title">Artist</div>
                    </li>
                    {
                      this.state.songs.map(item => {
                        return (
                          <li key={item.id}>
                            <TrackItem
                              track={item}
                              onOpen=''
                              onChange=''
                              onRemove=''
                              onPlus=''
                              onReload=''
                              stopAll={this._stopAll}
                              audio={this._add}
                            />
                          </li>
                        );
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>);
  }

  _add(item) {
    this.state.audios.push(item);
  }

  _stopAll() {
    this.state.audios.map((item) => {
      item.pause();
    });
  }
}

export default Playlist;
