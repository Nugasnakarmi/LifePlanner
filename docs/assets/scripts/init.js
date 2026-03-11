
//custom script to solve undefined process error due to angular update 11 -> 12
window.process = {
    env: {
        NODE_DEBUG: 'development'
    }
} 

