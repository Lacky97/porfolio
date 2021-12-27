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



export const services:IServices[] = [
    {
        title: 'Frontend Development',
        about: 'I can build a beautiful and scalable interface using HTML,CSS and React.js',
        Icon: RiComputerLine,
    },
    {
        title: 'Backend Development',
        about: 'Handle database, server, api using Express & other popular frameworks',
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
        about: 'lorem Ipsum is Lorem Ipsum. Lorem Ipsum is a Lorem Ipsum. Lorem Ipsum is a Lorem Ipsum',
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
        name:'Studio 3T',
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
        description:'Questa applicazione permette di memorizzare i menu dei ristoranti, scansionati tramite QR Code, per poi poterli consultare in qualsiasi momento si voglia',
        image_path: menus,
        deployed_url: 'https://google.com/',
        github_url: 'https://github.com/Lacky97/menus',
        playStore_url:'',
        appStore_url:'',
        category: ['flutter'],
        key_tech: ['Flutter', 'Dart', 'Hive']
    },
    {
        id:2,
        name:'PogChampsIta',
        description:'Questo sito permette di tenere traccia dei risultati delle partite di un torneo di schacchi tra streamer di twitch.',
        image_path: pog,
        deployed_url: 'https://pogchampsita.web.app/',
        github_url: 'https://google.com/',
        playStore_url:'',
        appStore_url:'',
        category: ['react'],
        key_tech: ['React', 'Material UI']
    },
    {
        id:3,
        name:'Livello Fiumi Liguria App',
        description:'this app allow to see homy many codiv cas in a day, this app allow to see homy many codiv cas in a day, this app allow to see homy many codiv cas in a day, this app allow to see homy many codiv cas in a day, ',
        image_path: liguria,
        deployed_url: 'https://google.com/',
        github_url: 'https://google.com/',
        playStore_url:'',
        appStore_url:'',
        category: ['flutter'],
        key_tech: ['Flutter', 'Dart', 'Flutter Charts']
    },
    {
        id:4,
        name:'Livello Fiumi Liguria Bot',
        description:'this app allow to see homy many codiv cas in a day',
        image_path: fiumiBot,
        deployed_url: 'https://google.com/',
        github_url: 'https://google.com/',
        playStore_url:'',
        appStore_url:'',
        category: ['python'],
        key_tech: ['Python', 'Telebot']
    },
    {
        id:5,
        name:'EternalDogs',
        description:'this app allow to see homy many codiv cas in a day',
        image_path: eterDog,
        deployed_url: 'https://google.com/',
        github_url: 'https://google.com/',
        playStore_url:'',
        appStore_url:'',
        category: ['react'],
        key_tech: ['React', 'Framer-motion', 'Tailwind']
    },
    {
        id:6,
        name:'EternalDogs App',
        description:'this app allow to see homy many codiv cas in a day',
        image_path: menus,
        deployed_url: 'https://google.com/',
        github_url: 'https://google.com/',
        playStore_url:'',
        appStore_url:'',
        category: ['flutter'],
        key_tech: ['Flutter', 'Hive', 'Dart']
    },
    {
        id:7,
        name:'OneShot',
        description:'this app allow to see homy many codiv cas in a day',
        image_path: menus,
        deployed_url: 'https://google.com/',
        github_url: 'https://google.com/',
        playStore_url:'',
        appStore_url:'',
        category: ['flutter'],
        key_tech: ['Flutter', 'Rive', 'Hive', 'Dart']
    },
    {
        id:8,
        name:'RandomChoise (for OneShot)',
        description:'this app allow to see homy many codiv cas in a day',
        image_path: OSBot,
        deployed_url: 'https://google.com/',
        github_url: 'https://google.com/',
        playStore_url:'',
        appStore_url:'',
        category: ['python'],
        key_tech: ['Python', 'Flask']
    },
    {
        id:9,
        name:'speech project',
        description:'this app allow to see homy many codiv cas in a day',
        image_path: speech,
        deployed_url: 'https://google.com/',
        github_url: 'https://google.com/',
        playStore_url:'',
        appStore_url:'',
        category: ['python'],
        key_tech: ['Android', 'Speech Recognizer']
    },
    {
        id:10,
        name:'Esportazione Mosaico',
        description:'this app allow to see homy many codiv cas in a day',
        image_path: esportazione,
        deployed_url: 'https://google.com/',
        github_url: 'https://google.com/',
        playStore_url:'',
        appStore_url:'',
        category: ['python'],
        key_tech: ['Python', 'Flask']
    },
]