const { PrismaClient } = require('../generated/prisma'); // ✅ Fix path
const prisma=new PrismaClient({
    log:["query"],

})
module.exports=prisma