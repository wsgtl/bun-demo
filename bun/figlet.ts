import figlet from "figlet"

const server = Bun.serve({
    port:1233,
    fetch(){
        const body = figlet.textSync("fuck dj");
        return new Response(body);
    }
})