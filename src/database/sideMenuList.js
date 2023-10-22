import { RiTeamFill } from 'react-icons/ri';
import { FaHelmetUn } from 'react-icons/fa6';
import { MdLeaderboard } from 'react-icons/md';
import { VscGitCompare } from 'react-icons/vsc';

export const sideMenuList = [
    {
        label : 'Teams',
        to : '/teams',
        icon : <RiTeamFill />
    },
    {
        label : 'Players',
        to : '/players',
        icon : <FaHelmetUn />,
    },
    {
        label : 'Leaderboard',
        to : '/leaderboard',
        icon : <MdLeaderboard />
    },
    {
        label : 'Comparision',
        to : '/compare',
        icon : <VscGitCompare />
    }
];