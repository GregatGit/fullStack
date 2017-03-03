const env = process.env;
export const nodeEnv = env.NODE_ENV || 'develoment';

export const logStars = function(message) {
    console.log('***********');
    console.log(message);
    console.log('**********')
};

export default {
    port: env.PORT || 8080
};

