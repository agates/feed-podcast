import Feed from './feed'

let sampleDate = new Date('Sat, 13 Jul 2013 23:00:00 GMT');

let feed = new Feed({
  title: 'Feed Title',
  description: 'This is my personnal feed!',
  link: 'http://example.com/',
  id: 'http://example.com/',
  feed: 'http://example.com/feed.rss',
  image: 'http://example.com/image.png',
  copyright: 'All rights reserved 2013, John Doe',
  updated: sampleDate, // optional, default = today
  generator: 'awesome', // optional, default = 'Feed for Node.js'
  author: {
    name: 'John Doe',
    email: 'johndoe@example.com',
    link: 'https://example.com/johndoe'
  },
  managingEditor: {
    name: 'John Doe',
    email: 'johndoe@example.com',
  },
  webMaster: {
    name: 'Jane Doe',
    email: 'janedoe@example.com',
  },
  owner: {
    name: 'John Doe',
    email: 'johndoe@example.com',
  }
})

feed.addCategory('Technology')

test('it should generate a Podcast Namespace 1.0 RSS 2.0 feed', () => {
  feed.addItem({
    title: 'Hello World',
    id: 'https://example.com/hello-world',
    link: 'https://example.com/hello-world',
    description: 'This is an article about Hello World.',
    date: sampleDate,
    author: [
      {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        href: 'https://example.com/jane-doe.html',
        img: 'https://example.com/jane-doe.png'
      },
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'guest',
        group: 'visuals',
        href: 'https://example.com/john-doe.html',
        img: 'https://example.com/john-doe.png'
      }
    ],
    explicit: true,
    media: [
      {
        type: 'video/webm',
        codecs: 'vp8',
        length: 12345,
        bitrate: 400000,
        title: 'Video - vp8',
        language: "en-us",
        sources: [
          { uri: 'https://example.com/hello-world.vp8' },
          { uri: 'https://example.com/hello-world-vp8-ogg.torrent', contentType: 'application/x-bittorrent' }
        ],
        integrity: [
          {
            type: 'sri',
            name: 'sha256',
            value: '0001hash'
          },
          {
            type: 'pgp-signature',
            value: '0001pgp'
          }
        ]
      },
      {
        type: 'video/webm',
        codecs: 'vp9',
        length: 54321,
        bitrate: 500000,
        title: 'Video - vp9',
        language: "en-us",
        height: 720,
        sources: [
          { uri: 'https://example.com/hello-world.vp9' },
          { uri: 'https://example.com/hello-world-vp9-ogg.torrent', contentType: 'application/x-bittorrent' }
        ],
        integrity: [
          {
            type: 'sri',
            name: 'sha384',
            value: '0002hash'
          },
          {
            type: 'pgp-signature',
            value: '0002pgp'
          }
        ]
      }
    ],
    thumbnail: [{
      url: 'https://example.com/hello-world.png',
    }],
    categories: [
      { value: 1, label: 'Category 1' },
      { value: 2, label: 'Category 2' }
    ],
    subTitle: [
      {
        url: "https://example.com/subs/0001.vtt",
        language: "en-us"
        // invalid because it doesn't have the type attribute
      },
      {
        url: "https://example.com/subs/0001.vtt",
        language: "en-us",
        type: "application/vtt",
        rel: "captions"
      }
    ]
  })

  let expected = `<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:podcast="https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md">
    <channel>
        <title>Feed Title</title>
        <link>http://example.com/</link>
        <description>This is my personnal feed!</description>
        <lastBuildDate>Sat, 13 Jul 2013 23:00:00 GMT</lastBuildDate>
        <docs>http://blogs.law.harvard.edu/tech/rss</docs>
        <generator>awesome</generator>
        <podcast:person>John Doe</podcast:person>
        <itunes:author>John Doe</itunes:author>
        <managingEditor>johndoe@example.com (John Doe)</managingEditor>
        <webMaster>janedoe@example.com (Jane Doe)</webMaster>
        <itunes:owner>
            <itunes:email>johndoe@example.com</itunes:email>
            <itunes:name>John Doe</itunes:name>
        </itunes:owner>
        <itunes:explicit>no</itunes:explicit>
        <image>
            <title>Feed Title</title>
            <url>http://example.com/image.png</url>
            <link>http://example.com/</link>
        </image>
        <itunes:image href="http://example.com/image.png">
        </itunes:image>
        <copyright>All rights reserved 2013, John Doe</copyright>
        <category>Technology</category>
        <itunes:category text="Technology"/>
        <item>
            <title><![CDATA[Hello World]]></title>
            <link>https://example.com/hello-world</link>
            <guid>https://example.com/hello-world</guid>
            <pubDate>Sat, 13 Jul 2013 23:00:00 GMT</pubDate>
            <description><![CDATA[This is an article about Hello World.]]></description>
            <author>jane.doe@example.com (Jane Doe)</author>
            <dc:creator>Jane Doe</dc:creator>
            <podcast:person href="https://example.com/jane-doe.html" img="https://example.com/jane-doe.png">Jane Doe</podcast:person>
            <podcast:person role="guest" group="visuals" href="https://example.com/john-doe.html" img="https://example.com/john-doe.png">John Doe</podcast:person>
            <podcast:transcript url="https://example.com/subs/0001.vtt" type="application/vtt" language="en-us" rel="captions">
            </podcast:transcript>
            <enclosure type="video/webm" length="12345" url="https://example.com/hello-world.vp8">
            </enclosure>
            <podcast:alternateEnclosure type="video/webm" codecs="vp8" length="12345" bitrate="400000" language="en-us" default="true">
                <podcast:source uri="https://example.com/hello-world.vp8">
                </podcast:source>
                <podcast:source uri="https://example.com/hello-world-vp8-ogg.torrent" contentType="application/x-bittorrent">
                </podcast:source>
                <podcast:integrity type="sri" value="sha256-0001hash">
                </podcast:integrity>
                <podcast:integrity type="pgp-signature" value="0001pgp">
                </podcast:integrity>
            </podcast:alternateEnclosure>
            <podcast:alternateEnclosure type="video/webm" codecs="vp9" length="54321" bitrate="500000" height="720" language="en-us">
                <podcast:source uri="https://example.com/hello-world.vp9">
                </podcast:source>
                <podcast:source uri="https://example.com/hello-world-vp9-ogg.torrent" contentType="application/x-bittorrent">
                </podcast:source>
                <podcast:integrity type="sri" value="sha384-0002hash">
                </podcast:integrity>
                <podcast:integrity type="pgp-signature" value="0002pgp">
                </podcast:integrity>
            </podcast:alternateEnclosure>
            <itunes:image href="https://example.com/hello-world.png">
            </itunes:image>
            <itunes:explicit>yes</itunes:explicit>
        </item>
    </channel>
</rss>`

  let actual = feed.podcast()

  expect(actual).toBe(expected)
})
