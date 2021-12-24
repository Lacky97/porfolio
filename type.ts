import { IconType } from 'react-icons';

export interface IServices{
    title: string;
    about: string;
    Icon: IconType;
}

export interface ISkill{
    name: string;
    level: string;
    Icon: IconType;
}

export interface IProject{
    id: number;
    name: string;
    description: string;
    image_path: StaticImageData;
    deployed_url: string;
    github_url: string;
    playStore_url: string;
    appStore_url:string;
    category: Category[];
    key_tech: string[];
}

export type Category = 'react' | 'flutter' | 'python'