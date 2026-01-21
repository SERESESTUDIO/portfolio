export interface IWorkConfig {
    title:string;
    url:string;
    size: 'small' | 'tall' | 'wide' | 'large';
    id:string;
    category: string;
}
export const sampleWorkConfig: IWorkConfig = {
    title: '',
    url: '',
    size: 'small',
    id: '',
    category: ''
}
export const workConfigs: IWorkConfig[] = [
    {
        title: 'Montaña',
        url: '/test_img/01.png',
        size: 'large',
        id: 'project-1',
        category: 'web-development'
    },
    {
        title: 'Montaña',
        url: '/test_img/02.png',
        size: 'small',
        id: 'project-2',
        category: 'video-games'
    },
    {
        title: 'Montaña',
        url: '/test_img/03.png',
        size: 'tall',
        id: 'project-3',
        category: 'expiriences'
    },
    {
        title: 'Montaña',
        url: '/test_img/04.png',
        size: 'wide',
        id: 'project-4',
        category: 'web-development'
    }
];