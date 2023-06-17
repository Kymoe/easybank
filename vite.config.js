export default{
    base:'/',
    build:{
        rollupOptions:{
            input:{
                main:'./index.html',
                about: './src/about.html',
            },
        },
    },
};