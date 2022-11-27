module.exports = {
    async headers() {
        return [
             {
               // matching all API routes
               source: '/:path*',
               headers: [
                    { key:'Access-Control-Allow-Credentials', value: 'true' },
                    { key:'Access-Control-Allow-Origin', value: 'https://www.google.com/log?format=json&hasfast=true&authuser=0' },
                    { key:'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS, PUT, DELETE, HEAD' }
                    { key:'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization }
               ],
             },
         ];
     },
};  
  
          
