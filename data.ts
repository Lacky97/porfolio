import { RiComputerLine} from 'react-icons/ri';
import { IProject, IServices, ISkill } from './type';
import { DiJavascript1, DiDart, DiReact, DiMongodb} from 'react-icons/di';
import { RiFlutterFill } from 'react-icons/ri';
import { SiFlask, SiBlender, SiFirebase, SiTelegram, SiPython } from 'react-icons/si';
import { MdAnimation } from 'react-icons/md';
import { AiOutlineApi, AiFillDatabase } from 'react-icons/ai';
import { FaMobileAlt, FaHackerrank } from 'react-icons/fa';
import menus from '/public/images/menus.png';
import pog from '/public/images/pogchamps.png';
import liguria from '/public/images/liguria.png'
import speech from '/public/images/speech.png';
import esportazione from '/public/images/export.png';
import OSBot from '/public/images/oneshotBot.png';
import fiumiBot from '/public/images/fiumiBot.png';
import eterDog from '/public/images/eterDog.png';
import eterDogApp from '/public/images/eternaldogs.png';
import CoinFlip from '/public/images/CoinFlipCard.png';



export const services:IServices[] = [
    {
        title: 'Frontend Development',
        about: 'I can build a beautiful and scalable interface using HTML,CSS and React.js',
        Icon: RiComputerLine,
    },
    {
        title: 'Backend Development',
        about: 'Handle database, server, api using Express & Flask',
        Icon: AiFillDatabase,
    },{
        title: 'Api Development',
        about: 'I can develop robust REST API using Flask',
        Icon: AiOutlineApi,
    },
    {
        title: 'Mobile Development',
        about: 'I can develop mobile applications using Flutter or Java',
        Icon: FaMobileAlt,
    },{
        title: 'Competitive Challenge',
        about: 'A daily problem solver in HackerRank',
        Icon: FaHackerrank,
    },{
        title: 'Python Bot and Script',
        about: 'I can develop Script in Python and Telegram Bot',
        Icon: SiPython,
    }
]

export const languages:ISkill[] = [
    {
        name:'Python',
        level:'65%',
        Icon: SiPython,
    },
    {
        name:'JavaScript',
        level:'85%',
        Icon: DiJavascript1,
    },
    {
        name:'Dart',
        level:'75%',
        Icon: DiDart,
    },
    {
        name:'React',
        level:'85%',
        Icon: DiReact,
    },
    {
        name:'Flask',
        level:'55%',
        Icon: SiFlask,
    },
    {
        name:'Flutter',
        level:'75%',
        Icon: RiFlutterFill,
    },
]


export const tools:ISkill[] = [

    {
        name:'Blender',
        level:'40%',
        Icon: SiBlender,
    },
    {
        name:'MongoDB Compass',
        level:'70%',
        Icon: DiMongodb,
    },
    {
        name:'Firebase',
        level:'80%',
        Icon: SiFirebase,
    },
    {
        name:'Telegram bot',
        level:'80%',
        Icon: SiTelegram,
    },
    {
        name:'Rive',
        level:'60%',
        Icon: MdAnimation,
    },
]

export const projectsSite:IProject[] = [
    {
        id:1,
        name:'Menus',
        description:'This app allow to store the restaurants menus, scanned through QR code , to consul them whenever you want',
        image_path: menus,
        deployed_url: '',
        github_url: 'https://github.com/Lacky97/menus',
        playStore_url:'https://play.google.com/store/apps/details?id=com.lucabonasera.menus',
        appStore_url:'',
        category: ['flutter'],
        key_tech: ['Flutter', 'Dart', 'Hive']
    },
    {
        id:2,
        name:'PogChampsIta',
        description:'This site allow the user to follow the matches result of a chess championship between some streamer',
        image_path: pog,
        deployed_url: 'https://pogchampsita.web.app/',
        github_url: '',
        playStore_url:'',
        appStore_url:'',
        category: ['react'],
        key_tech: ['React', 'Material UI']
    },
    {
        id:3,
        name:'Livello Fiumi Liguria App',
        description:'This App allow the user to follow the level of the most rivers in liguria, and you can save it for receive notification when the level of the water in the river exceed a certain value',
        image_path: liguria,
        deployed_url: '',
        github_url: 'https://github.com/Lacky97/LivelloFiumiAPP',
        playStore_url:'',
        appStore_url:'',
        category: ['flutter'],
        key_tech: ['Flutter', 'Dart', 'Flutter Charts']
    },
    {
        id:4,
        name:'Livello Fiumi Liguria Bot',
        description:'This is an API that take the data from the Omril site and serve the data to the application LivelliFiumiApp',
        image_path: fiumiBot,
        deployed_url: '',
        github_url: 'https://github.com/Lacky97/randomChoiseflask',
        playStore_url:'',
        appStore_url:'',
        category: ['python'],
        key_tech: ['Python', 'Telebot']
    },
    {
        id:5,
        name:'EternalDogs',
        description:'This is a presentation site for a group of NFT called EternalDogs',
        image_path: eterDog,
        deployed_url: 'https://eternaldogs-f84da.web.app/',
        github_url: 'https://github.com/Lacky97/nftsite',
        playStore_url:'',
        appStore_url:'',
        category: ['react'],
        key_tech: ['React', 'Framer-motion', 'Tailwind']
    },
    {
        id:6,
        name:'EternalDogsApp',
        description:'This is an App that allow the user to see and save a random NFT from the group EternalDogs.',
        image_path: eterDogApp,
        deployed_url: '',
        github_url: 'https://github.com/Lacky97/eternaldogs',
        playStore_url:'',
        appStore_url:'',
        category: ['flutter'],
        key_tech: ['Flutter', 'Hive', 'Dart']
    },
    {
        id:7,
        name:'CoinFilp',
        description:'This is a little game application where you can throw a coin and you continue to throw until tails come out and at each thrown the probability to get cross increase',
        image_path: CoinFlip,
        deployed_url: '',
        github_url: 'https://github.com/Lacky97/LivelloFiumiAPP',
        playStore_url:'',
        appStore_url:'',
        category: ['flutter'],
        key_tech: ['Flutter', 'Rive', 'Hive', 'Dart']
    },
    {
        id:8,
        name:'RandomChoise (for OneShot)',
        description:'This is a python program based on flask that provides some API to the application CoinFlip.',
        image_path: OSBot,
        deployed_url: '',
        github_url: 'https://github.com/Lacky97/randomChoiseflask',
        playStore_url:'',
        appStore_url:'',
        category: ['python'],
        key_tech: ['Python', 'Flask']
    },
    {
        id:9,
        name:'speech project',
        description:'This is an App that using the library "Speech Recognizer" for sintetiza a voice that will read all the notification that you have receive.',
        image_path: speech,
        deployed_url: '',
        github_url: '',
        playStore_url:'',
        appStore_url:'',
        category: ['python'],
        key_tech: ['Android', 'Speech Recognizer']
    },
    {
        id:10,
        name:'Esportazione Mosaico',
        description:'This is a software write in python that extract the database from an older software called mosaico.',
        image_path: esportazione,
        deployed_url: '',
        github_url: 'https://github.com/Lacky97/Esportazione_mosaico',
        playStore_url:'',
        appStore_url:'',
        category: ['python'],
        key_tech: ['Python', 'Flask']
    },
]