const local = process.env.local || '';
module.exports = [
    {
        name: 'myhome',
        path: local+'/{{name}}/myhome',
        icon: 'home',
        title: 'My Home'
    }, {
        name: 'settings',
        path: local+'/{{name}}/settings',
        icon: 'build',
        title: '설정'
    }
];
