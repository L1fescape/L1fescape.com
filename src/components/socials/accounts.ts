import { Links } from './links'
import { LinkComponent } from 'ak.gg/components/link'
import { Icons, IconComponent } from './icons'
import { Platforms } from './platforms'

export interface Account {
  username?: string
  userID?: string
  title?: string
  url: string
  Link: LinkComponent
  Icon: IconComponent
}

export const Accounts: { [key: string]: Account } = {
  [Platforms.Twitter]: {
    username: 'L1fescape',
    userID: '7319852',
    url: 'https://twitter.com/l1fescape',
    Link: Links.Twitter,
    Icon: Icons[Platforms.Twitter],
  },
  [Platforms.Instagram]: {
    username: 'L1fescape',
    url: 'https://www.instagram.com/l1fescape',
    Link: Links.Instagram,
    Icon: Icons[Platforms.Instagram],
  },
  [Platforms.GitHub]: {
    username: 'L1fescape',
    url: 'https://github.com/l1fescape',
    Link: Links.GitHub,
    Icon: Icons[Platforms.GitHub],
  },
  [Platforms.SoundCloud]: {
    username: 'L1fescape',
    url: 'https://soundcloud.com/l1fescape',
    Link: Links.SoundCloud,
    Icon: Icons[Platforms.SoundCloud],
  },
  [Platforms.LinkedIn]: {
    username: 'L1fescape',
    url: 'https://www.linkedin.com/in/l1fescape/',
    Link: Links.LinkedIn,
    Icon: Icons[Platforms.LinkedIn],
  },
  [Platforms.DevTo]: {
    username: 'L1fescape',
    url: 'https://dev.to//l1fescape/',
    Link: Links.DEV,
    Icon: Icons[Platforms.DevTo],
  },
}

export const AccountsList: Account[] = Object.keys(Accounts).map(key => ({
  ...Accounts[key as Platforms],
  title: key,
}))
